const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branchSchema = new Schema({
  location: {type: String, required: true},
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {timestamps: true});

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;