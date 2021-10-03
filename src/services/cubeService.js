const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory.js');

const getAll = () => Cube.find({}).lean();

const getOne = (id) => Cube.findById(id).populate('accessories').lean();

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

const attachAccessory = async (cubeId, accessoryId) => {
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    // cube.accessories.push({_id:accessory._id});
    return cube.save();
};

const cubeService = {
    create,
    getAll,
    getOne,
    search,
    attachAccessory
};

module.exports = cubeService;