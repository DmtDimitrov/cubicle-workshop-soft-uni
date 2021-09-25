const uniqid = require('uniqid');

class Cube {

    static #cubes = [
        {
            id: '2kjfpb4sktz133oo',
            name: 'Mirror Cube',
            description: 'mirror cube',
            imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.jpg',
            difficulty: '4'
        },
        {
            id: '1kjfpb4sktz133oo',
            name: 'Rubic Cube',
            description: 'Standard Rubic Cube',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeuS_1ZPeKGL0PfeomD_vvU1kCZaAGcEePA&usqp=CAU',
            difficulty: '1'
          }
    ];

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }
    static get cubes() {
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.#cubes.push(cube);
    }
}

module.exports = Cube;