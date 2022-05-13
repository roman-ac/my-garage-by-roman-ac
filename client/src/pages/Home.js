import React from 'react';
import Profile from './Profile';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';



const Home = () => {
  // const { loading, data } = useQuery(QUERY_CARS);
  // const cars = data?.cars || [];

  return (
    <main>
          {Auth.loggedIn() ? (
          <Profile></Profile>  
          ) : (

      <div className="carformcontainer">
        <div>
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>    
        <h1>Welcome to My Garage!</h1>
        <br/>
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>  

        </div>
      </div>
    )
    }
    </main>
  );
};

export default Home;
