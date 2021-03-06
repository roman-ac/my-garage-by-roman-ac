import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="homecontainer">
      <div className="garagecontainer col-12 col-lg-10">
        
          <div className="logincard">
            <h4 className="card-header">Login</h4>
            <div className="card-body">
              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/dashboard">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="submitbtn btn"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              )}

              {error && (
                <div className="my-3 p-3"
                style ={{
                  color: 'white'
                }}
                >
                  <br/>
                  {error.message}
                </div>
              )}
            </div>
          </div>
            <br/>
            <br/>    
          <div>
            <>
              <Link className="buttonsgup btn" to="/">
                Home
              </Link>
            </>
          </div>              
      </div>
    </main>
  );
};

export default Login;
