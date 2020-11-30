const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {type: String, required: true},
  birthday: {type: Date, required: true},
  email: {type: String, required: true},
  department: {type: String, required: true},
}, {timestamps: true});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;