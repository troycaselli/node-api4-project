module.exports = {
    getUsers,
    createUser,
    loginUser
}
let idCount = 7;

const users = [
    {username: 'Sneezy', password: 'dwarf1', id: '1'},
    {username: 'Bashful', password: 'dwarf2', id: '2'},
    {username: 'Sleepy', password: 'dwarf3', id: '3'},
    {username: 'Happy', password: 'dwarf4', id: '4'},
    {username: 'Grumpy', password: 'dwarf5', id: '5'},
    {username: 'Doc', password: 'dwarf6', id: '6'},
    {username: 'Dopey', password: 'dwarf7', id: '7'},
]

function getUsers() {
    return users;
}

function createUser(newUser) {
    newUser.id = ++idCount;
    users.push(newUser);
    return newUser;
}

function loginUser(username, password) {
    for(let i = 0; i < users.length; i++) {
        if(
            users[i].username === username 
            && users[i].password === password
        ) {
            return true;
        }
    }
    return false;
}