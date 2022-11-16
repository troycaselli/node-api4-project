const express = require('express');
const Users = require('./users-model');

const router = express();

router.get('/', (req, res) => {
    const users = Users.getUsers();
    res.status(200).json(users);
});

router.use((error, req, res, next) => {
    const {status, message} = error;
  res.status(status || 500).json({message} || {message: 'fatal error'});
});

module.exports = router;