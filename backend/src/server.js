const express = require('express');
const app = express();
const config = require('./config/config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = require('./routes/users');
app.use(users);

const PORT = config.PORT;

const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});

server.on('error', error => {
    console.log('error al iniciar el servidor', error);
});