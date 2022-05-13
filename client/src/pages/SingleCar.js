import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ServiceList from '../components/ServiceList';
import ServiceForm from '../components/ServiceForm';

import { QUERY_SERVICES } from '../utils/queries';

const SingleCar = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { carId } = useParams();

  const { loading, data } = useQuery(QUERY_SERVICES, {
    // pass URL parameter
    variables: { carId: carId },
  });

  const car = data?.car || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {car.username} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {car.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
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
