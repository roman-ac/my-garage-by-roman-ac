const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(
  // 'mongodb://127.0.0.1:27017/my-garage' || process.env.MONGODB_URI,
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/my-garage',

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;


