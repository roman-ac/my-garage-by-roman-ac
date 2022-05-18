import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import Home from './Home';
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
{Auth.loggedIn() ? (

      <div className="serviceformcontainer" >
        <div className='singlecardisplay'>
            <div className="col-12 col-md-8">

              <ServiceForm 
              carId= {car._id}
              />
            </div>
              
            <div className="singlecarlistcontainer">
              <img style={{maxWidth: "25%"}} src={"/"+car.image} alt=""/>
              <h4>{car.make}</h4>
              <h5>{car.model}</h5>
              <h6>Color: {car.color}</h6>
              <h6>Year: {car.year}</h6>
              <h6>Odometer: {car.odometer} km</h6>
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
  ) : (
    <Home></Home>
)
}         
  </main>

  );
};

export default SingleCar;
