import React from 'react';
import Auth from '../utils/auth';
import Home from './Home';


const Blog = () => {
  

    return (
      <main>
            {Auth.loggedIn() ? (
                
            <div className="carformcontainer">
            <div>
            <br/>  
            <br/>  
            <br/>  
            <br/>  
            <br/>  
            <br/>    
            <h1>This is Blog Page !</h1>
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
                ) : (
  
        <Home/>
      )
      }
      </main>
    );
  };
  
  export default Blog;