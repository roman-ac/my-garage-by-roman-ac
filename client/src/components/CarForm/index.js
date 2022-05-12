import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_CAR } from '../../utils/mutations';
import { QUERY_CARS } from '../../utils/queries';

import Auth from '../../utils/auth';

const CarForm = () => {
  const [carDetails, setCarDetails] = 
  useState({
    make:"", 
    model:"",
    year:"",
    odometer:"",
    color:"",
    image:""
  });

  const [addCar, { error }] = useMutation(ADD_CAR, {
    update(cache, { data: { addCar } }) {
      try {
        const { cars } = cache.readQuery({ query: QUERY_CARS });

        cache.writeQuery({
          query: QUERY_CARS,
          data: { cars: [addCar, ...cars] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(carDetails)
    try {
      const { data } = await addCar({
        variables: {
          ...carDetails,
          year: parseInt(carDetails.year),
          odometer: parseInt(carDetails.odometer),

          username: Auth.getProfile().data.username,
        },
      });

      setCarDetails('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCarDetails({
      ...carDetails,
      [name]: value,
    });
  };

  return (
    <div>
      <h3>Add a Car</h3>

      {Auth.loggedIn() ? (
        <>
          <form
            className="carform"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
            <input
                  className="form-input"
                  placeholder="Make"
                  name="make"
                  type="text"
                  value={carDetails.make}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Model"
                  name="model"
                  type="text"
                  value={carDetails.model}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Year"
                  name="year"
                  type="number"
                  value={carDetails.year}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Odomoter"
                  name="odometer"
                  type="number"
                  value={carDetails.odometer}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Color"
                  name="color"
                  type="text"
                  value={carDetails.color}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Image"
                  name="image"
                  type="text"
                  value={carDetails.image}
                  onChange={handleChange}
                />
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Car
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a car. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CarForm;
