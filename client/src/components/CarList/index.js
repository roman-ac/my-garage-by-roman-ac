import React from 'react';
import { Link } from 'react-router-dom';

const CarList = ({ cars, title }) => {
  if (!cars.length) {
    return <h3>No Cars Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {cars &&
        cars.map((car) => (
          <div key={car._id} className="card mb-1">
            <h4 className="card-header bg-primary text-light">
              <div>
              <h5>Make: {car.make}</h5>
              <h5>Model: {car.model}</h5>
              <h5>Year: {car.year}</h5>
              <h5>Odometer: {car.odometer} km</h5>
              <h5>Color: {car.color}</h5>
              <h5>Image: {car.image}</h5>
              <span style={{ fontSize: '1rem' }}>
                Listed on {car.createdAt}
              </span>
              <Link
              className="btn"
              style={{
                fontSize: '1rem',
                border: '2px solid #1a1a1a',
                marginLeft:'35px', 
              }}
              to={`/cars/${car._id}`}
            >
              View Service History
            </Link>
            </div>
            </h4>
            
            
          </div>
        ))}
    </div>
  );
};

export default CarList;
