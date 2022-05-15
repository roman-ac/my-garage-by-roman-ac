import React from 'react';

const ServiceList = ( {services = []}) => {
  if (!services.length) {
    return <h3>No Services Yet</h3>;
  }

  console.log(services)
  
  return (
    <>
    <div>
      <h3
        style={{ 
          color:'black',
          borderBottom:'5px solid black',
          borderRadius:'15px',
          marginBottom:'20px'        }}
      >
        Service History
      </h3>

        {services &&
          services.map((service) => (
            <div key={service._id} className="col-12">
              <div className="servicelistcontainer">
                <div>
                <h5>Cost: ${service.cost}</h5>
                <h5>Description: {service.description}</h5>
                <span style={{ fontSize: '1rem' }}>
                  Service done on {service.createdAt}
                </span>
                </div>                
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ServiceList;
