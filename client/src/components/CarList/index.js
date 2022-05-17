import React from 'react';
import { Link } from 'react-router-dom';



const CarList = ({ cars, title }) => {
  // if (!cars.length) {
  //   return <h3>No Cars Yet</h3>;

  // }

  return (
    <div>
          <h3
              style={{
                color:'black',
                borderBottom:'5px solid black',
                borderRadius:'15px',
                marginBottom:'20px'
              }}
          >{title}</h3>
            {cars &&
                cars.map((car) => (
        <div key={car._id} className="carlistmaindiv col-12">
          <div className="carlistcontainer">
            <div>
              <h5>Image: {car.image}</h5>
              <h4>Make: {car.make}</h4>
              <h5>Model: {car.model}</h5>
              <h6>Color: {car.color}</h6>
              <h6>Odometer: {car.odometer} km</h6>
              <h6>Year: {car.year}</h6>
              <h6 style={{ fontSize: '1rem' }}>
                Listed on {car.createdAt}
              </h6>
              <Link
              className="buttonsh btn"
              style={{
                fontSize: '1rem',
                border: '2px solid #1a1a1a',
                marginLeft:'35px', 
              }}
              to={`/car/${car._id}`}
              >
              View Service History
              </Link> 
            </div>
          </div>
        </div>
        ))}
    </div>
  );
};

export default CarList;
