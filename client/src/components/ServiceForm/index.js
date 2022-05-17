/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useReactiveVar } from '@apollo/client';
import { ADD_SERVICE } from '../../utils/mutations';
import { QUERY_SERVICES } from '../../utils/queries';



import Auth from '../../utils/auth';

const ServiceForm = ({carId}) => {

  const [cost, setCost] = useState('');
  const [description, setDescription] = useState('');


  const [addService, { error }] = useMutation(ADD_SERVICE);
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();


    try {
      const { data } = await addService({
        variables: {
          carId,
          cost: parseInt(cost),
          description,
        },
      });

      setCost('');
      setDescription('');
      
    } catch (err) {
      console.error(err);
    }
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
                  value={cost}
                  onChange={(event) => setCost(event.target.value)}
                />
              
              <textarea
                name="description"
                placeholder="Add service details"
                value={description}
                className="form-input w-100"
                style={{ lineHeight: '4', resize: 'vertical' }}
                onChange={(event) => setDescription(event.target.value)}
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