const { AuthenticationError } = require('apollo-server-express');
const { User, Car, Service } = require('../models');
const { populate } = require('../models/User');
const { signToken } = require('../utils/auth');
const fs = require("fs");
const path = require("path");
const {v4: uuid} = require('uuid');
const { finished } = require('stream/promises');
const { GraphQLUpload } = require('graphql-upload');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('cars').populate(
        {
        path: 'cars',
        populate: 'services'
    });
    },
    user: async (parent, { username }) => {
      return User.findOne( {username: username} ).populate('cars').populate(
        {
          path: 'cars',
          populate: 'services'
        }
      );
    },
    cars: async () => {
      return Car.find().populate('services');
    },
    car: async (parent, { carId }) => {
      return Car.findOne({ _id: carId }).populate('services');
    },
    services: async () => {
      return Service.find().populate('');
    },
    service: async (parent, { serviceId }) => {
      return Service.findOne({ _id: serviceId }).populate('');
    },
  },

  Upload: GraphQLUpload,
  
  Mutation: {

    upload: async (_, { file }) => {
      let { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();
      filename = uuid() + filename;
      const out = fs.createWriteStream(path.join(__dirname, "../uploads/" + filename));
      stream.pipe(out);
      await finished(out);
      return { filename, mimetype, encoding };
    },

    addUser: async (parent, { username, firstname, lastname, email, password }) => {
      const user = await User.create({ username, firstname, lastname, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addCar: async (parent, {username, make, model, year, odometer, color, image }) =>
    {
      

      let { createReadStream, filename, mimetype, encoding } = await image;
      const stream = createReadStream();
      filename = uuid() + filename;
      const out = fs.createWriteStream(path.join(__dirname, "../uploads/" + filename));
      stream.pipe(out);
      await finished(out);

      const car = await Car.create ({make, model, year, odometer, color, image:filename});
      console.log(car);
      await User.findOneAndUpdate(
        {username: username},
        {$addToSet: {cars: car._id}}
      );
      return car;
    },

    addService: async(parent, {carId, cost, description }) =>
    {
      const service = await Service.create({cost, description});
      
      const car = await Car.findOneAndUpdate(
        {_id: carId},
        {$addToSet:{services: service._id}},
        {new: true}
      );
        await car.populate('services');
        return car
    }
//     
   },
};

module.exports = resolvers;
