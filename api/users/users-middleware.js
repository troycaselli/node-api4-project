const checkValues = (req, res, next) => {
    console.log(req.body);
    const {username, password} = req.body;
    if(!username || !password) {
        next({status: 401, message: 'username and password required'})
    } else {
        next()
    }
}

module.exports = {
    checkValues
}