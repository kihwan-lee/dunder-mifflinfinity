// imports
const router = require("express").Router();
const ctrl = require("../controllers");

// routes
router.get("/", ctrl.employees.index);
// router.get("/:id", ctrl.employees.show);
router.post("/", ctrl.employees.create);
router.put("/:id", ctrl.employees.update);
router.delete("/:id", ctrl.employees.destroy);

// exports
module.exports = router;
