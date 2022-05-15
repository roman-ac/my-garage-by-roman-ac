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
        createdAt
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
        services {
          _id
          createdAt
          cost
          description
        }
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
        createdAt
        services {
          _id: ID
          createdAt
          cost
          description
      }
    }
  }
`;

export const QUERY_SERVICES = gql`
  query getServices {
    services {
        _id
        createdAt
        cost
        description
    }
  }
`;
