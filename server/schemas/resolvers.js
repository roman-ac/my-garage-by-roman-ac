const { AuthenticationError } = require('apollo-server-express');
const { User, Car, Service } = require('../models');
const { populate } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('cars');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('cars');
    },
    cars: async () => {
      return Car.find().populate('services');
    },
    services: async () => {
      return Service.find().populate('');
    }
  },

  Mutation: {
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

    addCar: async (parent, {make, model, year, odometer, color, image }) =>
    {
      const car = await Car.create ({make, model, year, odometer, color, image});

      await User.findOneAndUpdate(
        {username: "roman1234"},
        {$addToSet: {cars: car._id}}
      );
      return car;
    },
//     addThought: async (parent, { thoughtText, thoughtAuthor }) => {
//       const thought = await Thought.create({ thoughtText, thoughtAuthor });

//       await User.findOneAndUpdate(
//         { username: thoughtAuthor },
//         { $addToSet: { thoughts: thought._id } }
//       );

//       return thought;
//     },
//     addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
//       return Thought.findOneAndUpdate(
//         { _id: thoughtId },
//         {
//           $addToSet: { comments: { commentText, commentAuthor } },
//         },
//         {
//           new: true,
//           runValidators: true,
//         }
//       );
//     },
//     removeThought: async (parent, { thoughtId }) => {
//       return Thought.findOneAndDelete({ _id: thoughtId });
//     },
//     removeComment: async (parent, { thoughtId, commentId }) => {
//       return Thought.findOneAndUpdate(
//         { _id: thoughtId },
//         { $pull: { comments: { _id: commentId } } },
//         { new: true }
//       );
//     },
   },
};

module.exports = resolvers;
