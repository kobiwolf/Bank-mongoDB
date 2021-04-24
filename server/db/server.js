const mongoose = require('mongoose');
const path =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGO
    : 'mongodb://localhost:27017/bank-api';
console.log(process.env.NODE_ENV);
mongoose.connect(path, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
