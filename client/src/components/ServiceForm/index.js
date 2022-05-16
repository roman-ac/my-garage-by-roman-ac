/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useReactiveVar } from '@apollo/client';

import { ADD_SERVICE } from '../../utils/mutations';
import { QUERY_SERVICES } from '../../utils/queries';



import Auth from '../../utils/auth';
//import { __Directive } from 'graphql';

const ServiceForm = (carId) => {
  const [serviceDetails, setServiceDetails] = useState({
    cost:"",
    description:"",
  });

  const [addService, { error }] = useMutation(ADD_SERVICE, {
    update(cache, { data: { addService } }) {
      try {
        const { services } = cache.readQuery({ query: QUERY_SERVICES });

        cache.writeQuery({
          query: QUERY_SERVICES,
          data: { services: [addService, ...services] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(serviceDetails)

    try {
      const { data } = await addService({
        variables: {
          carId,
          ...serviceDetails,
          cost: parseInt(serviceDetails.cost),
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
    <div className="serviceform">
      <h4
      style={{
        color:'black',
        borderBottom:'5px solid yellow',
        borderRadius:'15px'
      }}
      >Add a Service</h4>

      {Auth.loggedIn() ? (
        
        <>
          <form
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
                style={{ lineHeight: '4', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="buttonadd btn" type="submit"
              style ={{
                cursor: 'pointer'
              }}
              >
                Add Service
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
    </div>
  );
};

export default ServiceForm;
