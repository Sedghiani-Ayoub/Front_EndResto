const express = require('express');

const { getRecipies } = require('../controllers/recipieControllers');

const router = express.Router();



router.get("/recipies",getRecipies);

module.exports = router

