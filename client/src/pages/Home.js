import React from 'react';
import { Link } from 'react-router-dom';

import Dashboard from './Dashboard';
import Auth from '../utils/auth';

const Home = () => {
  
  

  return (
    <main>
          {Auth.loggedIn() ? (
          <Dashboard
          username={Auth.getProfile().data.username}
          />  
          ) : (

      <div className="homecontainer">
        <div className='garagecontainer col-12 col-lg-10'>
            <div>
              <h1>Welcome to My Garage !</h1>
            </div>
            <br/>
            <br/>
            <div className="">
            <>
              <Link className="buttonsgin btn" to="/login">
                Login
              </Link>
            </>
            </div>
        </div>

      </div>
    )
    }
    </main>
  );
};

export default Home;
