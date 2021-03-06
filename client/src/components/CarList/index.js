import React from 'react';
import { Link } from 'react-router-dom';


const CarList = ({ cars, title }) => {
  

  return (
    <div className="carlistdiv">
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
              <img style={{maxWidth: "40%", borderRadius:'10px'}} src={"/"+car.image} alt=""/>
              <h4>{car.make}</h4>
              <h5>{car.model}</h5>
              <h6>Color: {car.color}</h6>
              <h6>Year: {car.year}</h6>
              <h6>Odometer: {car.odometer} km</h6>
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
        ))}
    </div>
  );
};

export default CarList;
