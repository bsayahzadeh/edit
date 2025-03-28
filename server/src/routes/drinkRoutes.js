const express = require('express');
const router = express.Router();
const { getAllDrinks } = require('../controllers/drinkController');

router.get('/', getAllDrinks);

module.exports = router;
