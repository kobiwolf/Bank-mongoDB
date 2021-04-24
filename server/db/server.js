const mongoose = require('mongoose');

const path = process.env.URL_DB || 'mongodb://localhost:27017/bank-api';

mongoose.connect(path, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
