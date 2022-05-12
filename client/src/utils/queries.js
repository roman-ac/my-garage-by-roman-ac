import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      firstname
      lastname
      email
      cars {
        _id
        make
        model
        year
        odometer
        color
        image
      }
    }
  }
`;

export const QUERY_CARS = gql`
  query getCars {
    cars {
      _id
        make
        model
        year
        odometer
        color
        image
        createdAt
    }
  }
`;

export const QUERY_SINGLE_CAR = gql`
  query getSingleCar($carId: ID!) {
    car(carId: $carId) {
      _id
        make
        model
        year
        odometer
        color
        image
      services {
        _id: ID
        createdAt: String
        cost: Int
        description: String
      }
    }
  }
`;
