import React,{useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { useParams  } from 'react-router-dom';

import Auth from '../utils/auth';
import Home from './Home';
import CarList from '../components/CarList';
import CarForm from '../components/CarForm';

import { QUERY_USER } from '../utils/queries';

const Dashboard = (username) => {

// const username = Auth.getProfile().data.username;

const { username: userParam } = useParams();
console.log(userParam);

    const { loading, data } = useQuery(QUERY_USER, {
        variables: {username : userParam},
    });


    useEffect(() => {
      console.log(data?.user || []);
    }, [data]);

  const user = data?.user || [];
  console.log(user);

  return (
    <main>

    {Auth.loggedIn() ? (
      
      <div className="carformcontainer">
        
        <div
          className="col-12 col-md-8"
        >
          <CarForm 
          username={user.username}
          />
        </div>
        <div className="col-12 col-md-8">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CarList
              cars={user.cars}
              title="My Cars..."
            />
          )}
        </div>
  
      </div>
         
    ) : (
        <Home></Home>
    )
    }         
    </main>
  );
};

export default Dashboard;
