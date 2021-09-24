const Cube = require('../models/Cube');

const cubeDb = [
     {
        name: 'Mirror Cube',
        description: 'mirror cube',
        imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.jpg',
        difficulty: '4'
      }
];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);
};

const cubeService = {
    create,
    getAll
};

module.exports = cubeService;