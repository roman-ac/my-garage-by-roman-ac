const { gql } = require('apollo-server-express');

const typeDefs = gql`

scalar Upload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type User {
    _id: ID
    username: String
    firstname: String
    lastname: String
    email: String
    password: String
    cars: [Car]
  }

  type Car {
    _id: ID
    make: String
    model: String
    year: Int
    odometer: Int
    color: String
    image: String
    createdAt: String
    services: [Service]
  }

  type Service {
    _id: ID
    createdAt: String
    cost: Int
    description: String
  }



  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    cars: [Car]
    car(carId: ID!): Car
    services: [Service]
    service(serviceId:ID!):Service
  }

  type Mutation {
    addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    upload(file: Upload!): File!
    addCar(username: String!, make: String!, model: String!, year: Int!, odometer: Int!, color: String!, image: Upload): User
    addService(carId: ID!, cost: Int!, description: String!): Car
  }
`;

module.exports = typeDefs;
