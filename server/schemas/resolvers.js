const { AuthenticationError } = require('apollo-server-express');
const { User, Car, Service } = require('../models');
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
      return Car.find().populate('');
    },
    cars: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Car.find(params).sort({ createdAt: -1 });
    },
    car: async (parent, { carID }) => {
      return Car.findOne({ _id: carID });
    },
  },

//   Mutation: {
//     addUser: async (parent, { username, firstname, lastname, email, password }) => {
//       const user = await User.create({ username, firstname, lastname, email, password });
//       const token = signToken(user);
//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('No user found with this email address');
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const token = signToken(user);

//       return { token, user };
//     },
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
//   },
};

module.exports = resolvers;
