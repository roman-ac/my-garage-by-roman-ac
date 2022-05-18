import React from 'react';
import Auth from '../utils/auth';
import Home from './Home';


const Blog = () => {
  

    return (
      <main>
            {Auth.loggedIn() ? (
                
            <div className="homecontainer">
                <h1>Welcome to Your Garage {Auth.getProfile().data.username} ! </h1>
            <div className="forumcontainer">
              <br/>
              <h1>Forum Page is under construction. </h1>
              <h1>Please head to your Dashboard.</h1>
            
            

            </div>
            </div>
                ) : (
  
        <Home/>
      )
      }
      </main>
    );
  };
  
  export default Blog;