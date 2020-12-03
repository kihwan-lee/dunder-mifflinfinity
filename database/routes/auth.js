// imports
const router = require("express").Router();
const ctrl = require("../controllers");

// routes
router.post("/login", ctrl.auth.auth);


// exports
module.exports = router;