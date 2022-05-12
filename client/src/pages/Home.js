import React from 'react';
import { useQuery } from '@apollo/client';

import CarList from '../components/CarList';
import CarForm from '../components/CarForm';

import { QUERY_CARS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_CARS);
  const cars = data?.cars || [];

  return (
    <main>
      <div className="carformcontainer">
        <div
          className="col-12 col-md-8"
          style={{ border: '1px dotted #1a1a1a' }}
        >
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
    </main>
  );
};

export default Home;
