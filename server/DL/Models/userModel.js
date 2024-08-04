const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  role: {
    type: String,
    enum: ['admin', 'customer'],
    required: true,
    default: 'customer'
  }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = User;
