import React from 'react';
import Dashboard from './Dashboard';
import Auth from '../utils/auth';

const Home = () => {
  

  return (
    <main>
          {Auth.loggedIn() ? (
          <Dashboard></Dashboard>  
          ) : (

      <div className="carformcontainer">
        <div>
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>    
        <h1>Welcome to My Garage!</h1>
        <br/>
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>  
        <br/>  

        </div>
      </div>
    )
    }
    </main>
  );
};

export default Home;
