import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import logo from '../../assets/logo.png';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header">
      <div className="btncontainer">
        
        <div className='titlecontainer'>
          <img className="logo" src={logo} alt='logo'></img>
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
              <Link
              className="buttonsgout btn" onClick={logout}
              to={`/`}
              >
                Logout
              </Link>

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
