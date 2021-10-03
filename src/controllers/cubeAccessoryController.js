const router = require('express').Router({ mergeParams: true });

const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');

router.get('/add', async (req, res) => {
    try {
        let cube = await cubeService.getOne(req.params.cubeId);
        let accessories = await accessoryService.getAll();

        res.render('cube/accessory/add', { cube, accessories });
    } catch (error) {
        res.status(400).send(error.message);
    }

});

module.exports = router;