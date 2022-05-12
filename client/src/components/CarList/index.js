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
              {car.make} 
              <br />
              {car.model}
              <br />
              {car.year}
              <br />
              {car.odometer}
              <br />
              {car.color}
              <br />
              {car.image}
              <br />
              <span style={{ fontSize: '1rem' }}>
                Car listed on {car.createdAt}
              </span>
            </h4>
            
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/cars/${car._id}`}
            >
              View Service History
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CarList;
