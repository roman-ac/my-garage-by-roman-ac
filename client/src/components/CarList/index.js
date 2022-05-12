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
          <div key={car._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {car.thoughtAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this thought on {car.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{car.carText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${car._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CarList;
