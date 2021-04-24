const mongoose = require('mongoose');
const path =
  process.env.NODE_ENV !== 'development'
    ? process.env.MONGO
    : 'mongodb://localhost:27017/bank-api';

mongoose.connect(path, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
