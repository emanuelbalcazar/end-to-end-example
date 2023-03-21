const mongoose = require('mongoose');
const config = require('../config/config');

const connection = mongoose.connect(config.DATABASE);

mongoose.connection.on('connected', () => {
    console.log('[mongoose] conectado');
});

mongoose.connection.on('error', () => {
    console.log('[mongoose] error');
});

module.exports = connection;