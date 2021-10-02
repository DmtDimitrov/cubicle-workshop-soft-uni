const express = require('express');

const cubeController = require('../controllers/cubeController');
const homeController = require('../controllers/homeContoller');
const accessoryController = require('../controllers/accessoryController.js');

const router = express.Router();

router.use(homeController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);
router.use('*', (req, res) => {
    res.render('404');
})

module.exports = router;