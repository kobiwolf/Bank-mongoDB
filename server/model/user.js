const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'you forgot your name?'],
    validate(value) {
      if (/\d/.test(value)) throw new Error("name mustn't have digits");
    },
  },
  phone: {
    type: String,
    required: [true, 'a phone is required!'],
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
    required: [true, 'a password is required!'],
  },
  cash: {
    type: Number,
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
UserSchema.statics.kobi = () => {
  console.log('kobi');
};
const User = mongoose.model('User', UserSchema);

module.exports = User;
