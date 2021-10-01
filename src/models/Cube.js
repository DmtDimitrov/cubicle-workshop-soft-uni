const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 100
    },
    imageUrl: {
        type: String,
        required: true,
        // validate: /^https?:\/\//i
        validate: {
            validator:function(value){
                return /^https?:\/\//i.test(value);
            },
            message: 'Image Url is invalid'
        }
    },

});

// cubeSchema.path('imageUrl').validate = function(value){
//     return /^https?:\/\//i.test(value);
// }

module.exports = Cube;