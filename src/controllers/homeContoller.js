const express = require('express');
const cubeService = require('../services/cubeService')

const router = express.Router();

const homeView = (req, res) => {
    let cubes = cubeService.getAll();
    res.render('index', { cubes });
};

router.get('/', homeView);

module.exports = router;
