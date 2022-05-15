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
              <Link className="buttonnav btn" to="/dashboard/">
              Dashboard
              </Link>
              <Link className="buttonnav btn" to="/cars">
              My Cars
              </Link>
              <Link className="buttonnav btn" to="/blog">
              Blog
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
