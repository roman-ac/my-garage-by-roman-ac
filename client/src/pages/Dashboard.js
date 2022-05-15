import React,{useEffect} from 'react';
import { useQuery } from '@apollo/client';
// import { useParams  } from 'react-router-dom';

import Auth from '../utils/auth';
import Home from './Home';
import CarList from '../components/CarList';
import CarForm from '../components/CarForm';

import { QUERY_USER } from '../utils/queries';

const Dashboard = () => {
//   const { loading, data } = useQuery(QUERY_CARS);
//   const cars = data?.cars || [];
const username = Auth.getProfile().data.username;
// const { username } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: {username : username},
    });

    useEffect(() => {
      console.log(data?.user || []);
  }, [data]);

  const user = data?.user || [];
  console.log(user);

  return (
    <main>

    {Auth.loggedIn() ? (
      
      <div className="carformcontainer">
        
        <div
          className="col-12 col-md-8"
        >
          <CarForm />
        </div>
        <div className="col-12 col-md-8">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CarList
              cars={user.cars}
              title="My Cars..."
            />
          )}
        </div>
  
      </div>
         
    ) : (
        <Home></Home>
    )
    }         
    </main>
  );
};

export default Dashboard;
