import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';



import CarList from '../components/CarList';
import CarForm from '../components/CarForm';

import { QUERY_CARS } from '../utils/queries';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_CARS);
  const cars = data?.cars || [];

  return (
    <main>

    {Auth.loggedIn() ? (
      
      <div className="carformcontainer">
        
        <div
          className="col-12 col-md-8"
        >
        <></>
          <CarForm />
        </div>
        <div className="col-12 col-md-8">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CarList
              cars={cars}
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

export default Dashboard;
