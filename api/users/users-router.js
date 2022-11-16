const express = require('express');
const Users = require('./users-model');

const router = express();

router.get('/users', (req, res) => {
    const users = Users.getUsers();
    res.status(200).json(users);
});

router.post('/register', (req, res) => {
    const response = Users.createUser(req.body);
    res.status(201).json(response);
})

router.post('/login', (req, res) => {
    
})

router.use((error, req, res, next) => {
    const {status, message} = error;
  res.status(status || 500).json({message} || {message: 'fatal error'});
});

module.exports = router;