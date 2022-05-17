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
    $image: Upload
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
      carId: $carId,
      cost: $cost,
      description: $description
    ) {
      _id
        make
        model
        year
        odometer
        color
        image
        createdAt
        services {
          _id
          createdAt
          cost
          description
    }
  }
}
`;
