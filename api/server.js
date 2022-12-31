const express = require('express');
const usersRouter = require('./users/users-router');
const cors = require('cors');

const server = express();
server.use(cors());

server.use(express.json());

server.use('/api', usersRouter);

server.use('*', (req, res) => {
    res.status(404).send(`Path ${req.originalUrl} not found`);
})

module.exports = server;