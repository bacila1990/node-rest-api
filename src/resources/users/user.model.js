const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    login: String,
    password: String,
    _id: {
      type: String,
      default: uuidv4
    }
  },
  { versionKey: false }
);

userSchema.statics.toResponse = user => {
  const { id, name, login } = user;
  return { id, name, login };
};

const User = mongoose.model('User', userSchema);

module.exports = User;
