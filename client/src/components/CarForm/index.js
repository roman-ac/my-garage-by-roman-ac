/* eslint-disable no-unused-vars */
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
    image:"",
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
          username: Auth.getProfile().data.username,
          ...carDetails,
          year: parseInt(carDetails.year),
          odometer: parseInt(carDetails.odometer),

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
      <div>
        <h3>Welcome {Auth.getProfile().data.username} ! </h3>
      </div>
        <br/>
    <div className="carform">
      <h3
      style={{
        color:'black',
        borderBottom:'5px solid yellow',
        borderRadius:'15px'
      }}
      >Add a Car</h3>

      
        <>
          <form
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
              <button className="buttonadd btn" type="submit"
              style ={{
                cursor: 'pointer'
              }}
              >
                Add Car
              </button>
            </div>
            {error && (
              <div className="col-12"
              style={{
                color:'white'
              }}
              >
                {error.message}
              </div>
            )}
          </form>
        </>
      
    </div>
        <br/>
        <br/>
    </div>
  );
};

export default CarForm;

// {Auth.loggedIn() ? (

// ) : (
//   { <p>
//   You need to be logged in to add a car. Please{' '}
//   <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//  </p>}
// )}