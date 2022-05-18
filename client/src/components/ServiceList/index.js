import React from 'react';

const ServiceList = ( {services = []}) => {

  console.log(services)
  
  return (
    <>
    <div className='servicelistdiv'>
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
            <div key={service._id} className="servicelistmaindiv col-12">
              <div className="servicelistcontainer">
                <div>
                <h5 style={{textDecoration:'underline'}}>Service Details</h5>
                <h6>{service.description}</h6>
                <h6>Cost: ${service.cost}</h6>
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
