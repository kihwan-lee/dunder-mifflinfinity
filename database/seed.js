const db = require("./models");
const data = require("./employeeData.json");
// const data = require("./salesData.json");
// const data = require("./branches.json");

db.Employee.deleteMany({}, (err, deletedEmployees) => {
  db.Employee.create(data.employees, (err, seededEmployees) => {
    if (err) console.log(err);

    console.log(data.employees.length, "employees created successfully");

    process.exit();
  });
});

// db.Branch.deleteMany({}, (err, deletedBranches) => {
//   db.Branch.create(data.branches, (err, seededBranches) => {
//     if (err) console.log(err);

//     console.log(data.branches.length, "branches created successfully");

//     process.exit();
//   });
// });

// db.Sale.deleteMany({}, (err, deletedSales) => {
//   db.Sale.create(data.sales, (err, seededSales) => {
//     if (err) console.log(err);

//     console.log(data.sales.length, "sales created successfully");

//     process.exit();
//   });
// });
