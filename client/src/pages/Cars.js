import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import Home from './Home';


import CarList from '../components/CarList';

import { QUERY_USER } from '../utils/queries';

const Cars = () => {

    const { username } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: {username : username},
    });
    const user = data?.user || [{}];
    console.log(data);
  
    return (
      <main>
  
      {Auth.loggedIn() ? (
        
        <div className="carformcontainer">
          
          <div className="col-12 col-md-8">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <CarList
                cars={user}
                title="My Cars..."
              />
            )}
          </div>
    
        </div>
           
      ) : (

        <Home/>

      )
      }         
      </main>
    );
  };
  
  export default Cars;
  