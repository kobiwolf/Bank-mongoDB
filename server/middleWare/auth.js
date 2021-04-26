const jwt = require('jsonwebtoken');
const User = require('../model/user');

const auth = async (req, res, next) => {
  // try {
  //   const token = req.header('auth').replace('Bearer', '');
  //   const check = jwt.compare(token, 'password');
  //   if (!check) res.status(400).end('alo bad auth');
  //   req.user = await User.findById(check.id);
  // } catch (e) {
  //   res.status(400).send('bad auth');
  // }
  console.log('i am from auth');
  next();
};
module.exports = auth;
