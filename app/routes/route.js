const express = require('express');
const router = express.Router();
const Controller = require('../controllers/userController.js');

router.post('/signup', userController.signup);

router.post('/login', userController.login);

module.exports = router;