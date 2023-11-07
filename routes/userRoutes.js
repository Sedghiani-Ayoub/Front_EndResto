const express = require('express');
const { signup, login } = require('../controllers/userControllers');

const User = require('../models/userModel')

const router = express.Router();

router.post('/users/signup', signup)
router.post('/users/login', login)

module.exports = router;

