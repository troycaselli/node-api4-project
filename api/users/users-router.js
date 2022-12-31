const express = require('express');
const Users = require('./users-model');
const {checkValues} = require('./users-middleware');

const router = express();

router.get('/users', (req, res) => {
    const users = Users.getUsers();
    res.status(200).json(users);
});

router.post('/register', checkValues, (req, res) => {
    const response = Users.createUser(req.body);
    res.status(201).json(response);
})

router.post('/login', checkValues, (req, res, next) => {
    const {username, password} = req.body;
    // if(!username || !password) {
    //     next({status: 401, message: 'username and password required'})
    // }
    const info = Users.loginUser(username, password);
    if(info) {
        res.status(200).json({message: `Welcome, ${username}!`});
    } else {
        next({status: 401, message: 'Invalid username and/or password'});
    }
})

router.use((error, req, res, next) => { // eslint-disable-line
    const {status, message} = error;
  res.status(status || 500).json({message} || {message: 'fatal error'});
});

module.exports = router;