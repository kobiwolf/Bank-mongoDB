const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate(value) {
      if (/\d/.test(value)) throw new Error("name mustn't have digits");
    },
  },
  phone: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isMobilePhone(value, 'he-IL'))
        throw new Error('not a valid phone number');
    },
  },
  email: {
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error('not a valid email');
    },
  },
  password: {
    type: String,
    required: true,
  },
  cash: {
    type: Number,
    required: true,
    default: 0,
  },
  credit: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 7);
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
