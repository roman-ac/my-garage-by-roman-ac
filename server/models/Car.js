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
    }
});

const Car = model('Car', carSchema);

module.exports = Car;