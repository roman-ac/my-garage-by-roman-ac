import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createUploadLink } from 'apollo-upload-client';


import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleCar from './pages/SingleCar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Cars from './pages/Cars';
import Blog from './pages/Blog';


// Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(createUploadLink({ uri: "/graphql" })),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/dashboard/:username" 
                element={<Dashboard />} 
              />
              <Route 
                path="/cars/:username" 
                element={<Cars />} 
              />
              <Route 
                path="/blog" 
                element={<Blog />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />  
              {<Route 
              path="/car/:carId" 
              element={<SingleCar />} 
/> }
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;


