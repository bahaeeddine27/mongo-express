const express = require("express");
const router = express();

const userCtrl = require("../controllers/userController.js");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;