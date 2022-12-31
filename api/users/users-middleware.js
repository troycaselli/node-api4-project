const checkValues = (req, res, next) => {
    console.log(req.body);
    // const {username, password} = req.body;
    const username = req.body.username.trim()
    const password = req.body.password.trim()
    console.log(username, password)
    if(!username || !password) {
        next({status: 401, message: 'username and password required'})
    } else {
        req.username = username
        req.password = password
        next()
    }
}

module.exports = {
    checkValues
}