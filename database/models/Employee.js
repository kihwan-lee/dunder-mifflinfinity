const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {type: String, required: true},
  birthday: {type: Date, required: true},
  email: {type: String, required: true},
  department: {type: String, required: true},
  sales: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sale',
  }]
}, {timestamps: true});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;