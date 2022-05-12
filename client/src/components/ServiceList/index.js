import React from 'react';

const ServiceList = ({ services, title }) => {
  if (!services.length) {
    return <h3>No Services Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Service History
      </h3>
      <div className="flex-row my-4">
        {services &&
          services.map((service) => (
            <div key={service._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
              <h4 className="card-header bg-primary text-light">
              {service.cost} 
              <br />
              {service.description}
              <br />
              <span style={{ fontSize: '1rem' }}>
                Car listed on {service.createdAt}
              </span>
            </h4>
                <p className="card-body">{service.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ServiceList;
