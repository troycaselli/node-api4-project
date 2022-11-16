const express = require('express');
const usersRouter = require('./users/users-router');

const server = express();

server.use(express.json());

server.use('/api', usersRouter);

server.use('*', (req, res) => {
    res.status(200).send('Welcome to an irrelevent path!');
})

module.exports = server;