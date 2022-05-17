import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import carGif from '../../assets/car.gif';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header">
      <div className="btncontainer">
        
        <div className='titlecontainer'>
          <img className="cargif" src={carGif} alt='carGif'></img>
          <h1 className="">My Garage</h1>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="buttonnav btn" to="/blog">
              Forum
              </Link>
              <Link className="buttonnav btn" to={`/dashboard/${Auth.getProfile().data.username}`}>
              Dashboard
              </Link>
              <Link className="buttonnav btn" to={`/cars/${Auth.getProfile().data.username}`}>
              My Cars
              </Link>
              <button className="buttonsgout btn" onClick={logout}
              href="/"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="buttonsgup btn" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
