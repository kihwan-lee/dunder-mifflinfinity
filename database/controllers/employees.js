const db = require("../models");

// RETURN ALL EMPLOYEES
const index = (req, res) => {
  db.Employee.find({})
    .then((foundEmployees) => {
      res.json({ employees: foundEmployees });
    })
    .catch((err) => {
      console.log('Error in employees.index:', err);
      res.json({ Error: 'Unable to get your data' });
    });
};

// CREATE A NEW EMPLOYEE IN DB
const create = (req, res) => {
  db.Employee.create(req.body)
    .then((savedEmployee) => {
      res.status(201).json({ employee: savedEmployee });
    })
    .catch((err) => {
      console.log('Error in employees.create:', err);
      res.json({ Error: 'Unable to get data' });
    });

};

// UPDATE EMPLOYEE BY ITS ID
const update = (req, res) => {
  console.log(req.body)
  db.Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedEmployee) => {
      if (err) console.log("Error in employees#update:", err);

      res.json({ employee: updatedEmployee });
    }
  );
};

// REMOVE AN EMPLOYEE BY ITS ID
const destroy = (req, res) => {
  db.Employee.findByIdAndDelete(req.params.id, (err, deletedEmployee) => {
    if (err) console.log("Error in employees#destroy:", err);

    res.json({ employee: deletedEmployee });
  });
};

module.exports = {
  index,
  create,
  update,
  destroy,
};
