const express = require('express');

const cubeService = require('../services/cubeService');

const router = express.Router();

const createCubeView = async (req, res) => {

    res.render('create');
};

const createCube = async (req, res) => {
    
    let { name, description, imageUrl, difficulty } = req.body;
    try {
        await cubeService.create(name, description, imageUrl, difficulty);
        res.redirect('/');
    } catch (error) {
        // res.status(400).json({message: error.message});
        res.status(400).send(error.message);
    }
    
};

const cubeDetails = async (req, res) => {
    try {
        let cube = await cubeService.getOne(req.params.cubeId);
        res.render('details', { ...cube });
    } catch (error) {
        
    }
};

router.get('/create', createCubeView);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);

module.exports = router;
