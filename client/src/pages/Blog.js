import React from 'react';
import Auth from '../utils/auth';
import Home from './Home';


const Blog = () => {
  

    return (
      <main>
            {Auth.loggedIn() ? (
                
            <div className="carformcontainer">
            <div className="forumcontainer">
              
            <h1>Welcome to Your Garage {Auth.getProfile().data.username} ! </h1>
            <h1>This Page is still under construction. </h1>
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