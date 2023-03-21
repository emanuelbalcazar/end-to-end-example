const express = require('express');
const app = express();
const config = require('./config/config');

require('./database/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((error, req, res, next) => {
    console.log('error', error);
    return res.status(500).send('Algo se rompio!');
});

const users = require('./routes/users');
app.use(users);

const PORT = config.PORT;

const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});

server.on('error', error => {
    console.log('error al iniciar el servidor', error);
});