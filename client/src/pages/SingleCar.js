import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ServiceList from '../components/ServiceList';
import ServiceForm from '../components/ServiceForm';

import { QUERY_SINGLE_CAR } from '../utils/queries';



const SingleCar = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { carId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_CAR, {
    // pass URL parameter
    variables: { carId: carId },
  });

  const car = data?.car || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="text-light p-2 m-0"
      style={{
        backgroundColor: '#82C5FB',
        width:'50%',
      }}>
        {car.image}
        <br />
        {car.make}
        <br />
        {car.model}
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px solid #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {car.description}
        </blockquote>
      </div>

      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ServiceForm carId={car._id} />
      </div>
      <div className="my-5">
        <ServiceList comments={car.make} />
      </div>

    </div>
  );
};

export default SingleCar;
