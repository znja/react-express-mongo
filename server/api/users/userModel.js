const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {type: String, required: [true, 'First Name required']},
  lastName: {type: String},
  username: {type: String, required: [true, 'username required']},
  email: {type: String, required: [true, 'email required']}
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
