const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SaleSchema = new Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  amountOfPaper: {type: Number, required: true},
  customer: {type: String, required: true},
  profit: {type: Number, required: true},

}, {timestamps: true});

const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;
