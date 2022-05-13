import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header">
      <div className="btncontainer">
        <div>
            <h1 className="">My Garage</h1>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <button className="buttonnav btn" href="/profile">
                Profile
              </button>
              <button className="buttonnav btn">
                Service History
              </button>
              <button className="buttonnav btn">
                Blog
              </button>
              <button className="buttonsgout btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="buttonsgin btn" to="/login">
                Login
              </Link>
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
