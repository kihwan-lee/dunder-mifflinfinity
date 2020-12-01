// imports
const router = require("express").Router();
const ctrl = require("../controllers");

// routes
router.get("/", ctrl.sales.index);
router.get("/:id", ctrl.sales.show);
router.post("/", ctrl.sales.create);
router.put("/:id", ctrl.sales.update);
router.delete("/:id", ctrl.sales.destroy);

// exports
module.exports = router;