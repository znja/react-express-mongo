const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  description: {type: String, required: [true, 'A todo description required']},
  isDone: {type: Boolean, default: false }
});

const List = mongoose.model('list', ListSchema);

module.exports = List;
