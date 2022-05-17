import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ServiceList from '../components/ServiceList';
import ServiceForm from '../components/ServiceForm';

import { QUERY_SINGLE_CAR } from '../utils/queries';


const SingleCar = () => {
  
  // Use `useParams()` to retrieve value of the route parameter ``
  const { carId: userParam } = useParams();
  console.log(userParam);

  const { loading, data } = useQuery(QUERY_SINGLE_CAR, {
    variables: { carId: userParam },
  });


  useEffect(() => {
    console.log(data?.car || []);
}, [data]);
    
  const car = data?.car || [];

  console.log(car);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
<main>
<div>
      <div  className="serviceformcontainer">
      <div
          className="col-12 col-md-8"
        >
        <ServiceForm 
        carId= {userParam}
        />
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
