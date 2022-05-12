const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const carSchema = new Schema({
    make: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      trim: true,
    },
    odometer: {
        type: Number,
        required: true,
        trim: true,
    },
    color: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
      },
    services: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Service'
    }
    ],
});

const Car = model('Car', carSchema);

module.exports = Car;