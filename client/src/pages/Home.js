import React from 'react';
import { Link } from 'react-router-dom';

import Blog from './Blog';
import Auth from '../utils/auth';

const Home = () => {
  
  // const data = Auth.getProfile().data;
  // console.log(data);
  
  return (
    <main>
          {Auth.loggedIn() ? (
          <Blog
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
