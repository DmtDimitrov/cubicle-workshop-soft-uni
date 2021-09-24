const express = require('express');

const cubeController = require('../controllers/cubeController');
const homeController = require('../controllers/homeContoller');

const router = express.Router();

router.use(homeController);
router.use('/cube', cubeController);

module.exports = router;