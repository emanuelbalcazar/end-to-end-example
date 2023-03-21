const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, required: true, max: 100 },
    age: { type: Number, required: true }
});

const User = mongoose.model('user', schema);

module.exports = User;