import React, {useEffect} from 'react';
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
    variables: { _id: carId },
  });

  useEffect(() => {
    console.log(data?.car || []);
}, [data]);
    
  const car = data?.car || [{}];


  console.log(car);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    // <div className="my-3">
    //   <h3 className="text-light p-2 m-0"
    //   style={{
    //     backgroundColor: '#82C5FB',
    //     width:'50%',
    //   }}>
    //     {car.image}
    //     <br />
    //     {car.make}
    //     <br />
    //     {car.model}
    //   </h3>
    //   <div className="bg-light py-4">
    //     <blockquote
    //       className="p-4"
    //       style={{
    //         fontSize: '1.5rem',
    //         fontStyle: 'italic',
    //         border: '2px solid #1a1a1a',
    //         lineHeight: '1.5',
    //       }}
    //     >
    //       {car.description}
    //     </blockquote>
    //   </div>
<main>
<div>
      <div  className="serviceformcontainer">
      <div
          className="col-12 col-md-8"
        >
        <ServiceForm />
        </div>

      </div>
      <div className="col-12 col-md-8">
      {loading ? (
            <div>Loading...</div>
          ) : (
        <ServiceList services={car.services} />
          )}
      </div>
          
    </div>
    </main>

  );
};

export default SingleCar;
