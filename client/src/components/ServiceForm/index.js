/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SERVICE } from '../../utils/mutations';
import { QUERY_SINGLE_CAR } from '../../utils/queries';


import Auth from '../../utils/auth';

const ServiceForm = ({ carId }) => {
  const [serviceDetails, setServiceDetails] = useState({
    cost:"",
    description:"",
  });


  const [addService, { error }] = useMutation(ADD_SERVICE, {
    update(cache, { data: { addCar } }) {
      try {
        const { services } = cache.readQuery({ query: QUERY_SINGLE_CAR });

        cache.writeQuery({
          query: QUERY_SINGLE_CAR,
          data: { services: [addService, ...services] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addService({
        variables: {
          ...serviceDetails,
          cost: parseInt(serviceDetails.cost),
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setServiceDetails('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setServiceDetails({
      ...serviceDetails,
      [name]: value,
    });
  };

  return (
    <div>
      <h4>Add a Service</h4>

      {Auth.loggedIn() ? (
        
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
            <input
                  className="form-input"
                  placeholder="Cost"
                  name="cost"
                  type="number"
                  value={serviceDetails.cost}
                  onChange={handleChange}
                />
              
              <textarea
                name="description"
                placeholder="Add service details"
                value={serviceDetails.description}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add to Service History
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ServiceForm;
