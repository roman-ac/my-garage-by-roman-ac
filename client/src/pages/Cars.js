import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



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
          <p>
            You need to be logged in to add a car. Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
      )
      }         
      </main>
    );
  };
  
  export default Cars;
  