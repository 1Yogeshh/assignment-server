const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name:{type:String},
  username:{type:String},
  otp: { type: String },
  isVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
