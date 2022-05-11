const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    services: [Service]
  }

  type Mutation {
    addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCar(make: String!, model: String!, year: Int!, odometer: Int!, color: String!, image: String): Auth
  }
`;

module.exports = typeDefs;
