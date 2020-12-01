const db = require("../models");

const index = (req, res) => {
  db.Employee.find({})
  .then((foundEmployees) => {
    res.json({employees: foundEmployees });
  });

  console.log('underneath database query');

};

const show = (req, res) => {
  db.Employee.findById(req.params.id)
    .then((foundEmployees) => {
      res.json({employees: foundEmployees });
    })
    .catch((err) => {
      console.log('Error in employees.show:', err);
      res.json({Error: 'Unable to get data'});
    });
};

const create = (req, res) => {
  db.Employee.create(req.body)
    .then((savedEmployee) => {
      res.json({ employee: savedEmployee });
    })
    .catch((err) => {
      console.log('Error in employees.show:', err);
      res.json({Error: 'Unable to get data'});
    });
};



const update = (req, res) => {
  db.Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedEmployee) => {
      if (err) console.log("Error in employees#update:", err);

      res.send("Incomplete employees#update controller function");
    }
  );
};

const destroy = (req, res) => {
  db.Employee.findByIdAndDelete(req.params.id, (err, deletedEmployee) => {
    if (err) console.log("Error in employees#destroy:", err);

    res.send("Incomplete employees#destroy controller function");
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
