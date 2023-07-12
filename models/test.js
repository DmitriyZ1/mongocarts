const Mongoose = require('mongoose');

const Shema = Mongoose.Schema;

const testShema = new Shema({
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    comments: [{
        name: String,
        text: String
    }]
});

const Test = Mongoose.model('Kol', testShema);

module.exports = Test;