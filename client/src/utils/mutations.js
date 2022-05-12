import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!, 
    $firstname: String!, 
    $lastname: String!, 
    $email: String!, 
    $password: String!
    ) 
    {
    addUser(
      username: $username, 
      firstname: $firstname, 
      lastname: $lastname, 
      email: $email, 
      password: $password
      ) 
      {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CAR = gql`
  mutation addCar(
    $username: String!, 
    $make: String!, 
    $model: String!, 
    $year: Int!, 
    $odometer: Int!, 
    $color: String!, 
    $image: String
    ) 
    {
    addCar(
    username: $username,
    make: $make,
    model: $model,
    year: $year,
    odometer: $odometer,
    color: $color,
    image: $image  
    ) {
      _id
      make
      model
      year
      odometer
      color
      image
      services {
        _id
        cost
        description
      }
    }
  }
`;

export const ADD_SERVICE = gql`
  mutation addService(
    $carId: ID!,
    $cost: Int!,
    $description: String!
  ) {
    addService(
      carID: $carId,
      cost: $cost,
      description: $description
    ) {
      id
      cost
      description
    }
  }
`;
