const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const serviceSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    },
    cost: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    }
});

const Service = model('Service', serviceSchema);

module.exports = Service;