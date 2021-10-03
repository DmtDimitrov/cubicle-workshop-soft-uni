const express = require('express');
const { cubes } = require('../models/Cube.js');
const cubeService = require('../services/cubeService')

const router = express.Router();

const homeView = async (req, res) => {
    let cubes = await cubeService.getAll();
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
