const db = require("../models");


const auth = (req, res) => {
  db.Employee.findOne({email: req.body.email, password: req.body.password})
    .then((foundEmployee) => {
      res.json({employee: foundEmployee });
    })
    .catch((err) => {
      console.log('Error in employees.show:', err);
      res.json({Error: 'Unable to get data'});
    });
};

module.exports = {
  auth
}