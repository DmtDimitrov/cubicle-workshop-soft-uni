const express = require('express');
const cubeService = require('../services/cubeService')

const router = express.Router();

const homeView = (req, res) => {
    let cubes = cubeService.getAll();
    res.render('index', { cubes });
};

const about = (req, res) => {
    res.render('about');
}

// const search = (req, res) => {

//     console.log(req.query);

//     res.render('index');
// }

router.get('/', homeView);
router.get('/about', about);
// router.get('/search', search);

module.exports = router;
