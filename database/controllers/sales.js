const db = require("../models");

// Get All Sales
const index = (req, res) => {
  db.Sale.find({})
  .then((foundSales) => {
    res.json({sales: foundSales });
  });

  console.log('underneath database query');
};

// Show Sale
const show = (req, res) => {
  db.Sale.findById(req.params.id)
    .then((foundSales) => {
      res.json({sales: foundSales });
    })
    .catch((err) => {
      console.log('Error in sales.show:', err);
      res.json({Error: 'Unable to get data'});
    });
};

// Create New Sale
const create = (req, res) => {
  db.Sale.create(req.body)
    .then((newSale) => {
      db.Employee.findById(req.body.employee, (err, foundEmployee) => {
        if (err) return console.log(err);
  
        foundEmployee.sales.push(newSale._id);
        foundEmployee.save((err, savedEmployee) => {
          if (err) return console.log(err);
        });
      })
    .catch((err) => {
      res.json({Error: 'Unable to get data'});
    });
  });
};

// Update Sale
const update = (req, res) => {
  db.Sale.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedSale) => {
      if (err) console.log("Error in sales#update:", err);

      res.send("Incomplete sales#update controller function");
    }
  );
};

// Delete Sale
const destroy = (req, res) => {
  db.Sale.findByIdAndDelete(req.params.id, (err, deletedSale) => {
    if (err) console.log("Error in sales#destroy:", err);

    res.send("Incomplete sales#destroy controller function");
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
