const Cube = require('../models/Cube');

const getAll = () => Cube.find({}).lean();

const getOne = (id) => Cube.findById(id).lean();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficulty,
    });
    // Cube.create()
    return cube.save();
};

const search = (searchedText, from, to) => {

    let result = getAll();

    if (searchedText) {
        result = result.filter(x => x.name.toLowerCase().includes(searchedText.toLowerCase()))
    }

    if (from) {
        result = result.filter(x => x.difficulty >= from);
    }

    if (to) {
        result = result.filter(x => x.difficulty <= to);
    }
    console.log(result);
    return result;
};

const cubeService = {
    create,
    getAll,
    getOne,
    search
};

module.exports = cubeService;