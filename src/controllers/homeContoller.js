const express = require('express');
const { cubes } = require('../models/Cube.js');
const cubeService = require('../services/cubeService')
const Cube = require('../models/Cube.js');
const router = express.Router();

const homeView = async (req, res) => {
    let cubes = await cubeService.getAll();

    ////////////////////////////////////////////////
    //// add static method in models. not used!
    let test = await Cube.findByName('Speed Cube');
    console.log(test);
    ///////////////////////////////////////////////

    res.render('index', { cubes });
};

const about = (req, res) => {
    res.render('about');
}

const search = async (req, res) => {

    // console.log(req.query);

    let { search, from, to } = req.query;

    // let search = req.query.search;
    // let from = req.query.from

    let cubes = await cubeService.search(search, from, to);

    res.render('index', {
        cubes,
        title: 'SEARCH',
        search,
        from,
        to
    });
}

router.get('/', homeView);
router.get('/about', about);
router.get('/search', search);

module.exports = router;
