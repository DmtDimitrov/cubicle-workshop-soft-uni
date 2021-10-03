const router = require('express').Router({ mergeParams: true });

const cubeService = require('../services/cubeService.js')

router.get('/add', async (req, res) => {
    try {
        let cube = await cubeService.getOne(req.params.cubeId);

        res.render('cube/accessory/add', { ...cube });
    } catch (error) {
        res.status(400).send(error.message);
    }

});

module.exports = router;