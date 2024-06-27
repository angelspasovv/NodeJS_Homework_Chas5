function welcome(req, res) {
    res.end("Welcome to my page!");
}

function handleUser(req, res, username) {
    const usernamePattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])[A-Za-z\d]{3,}/;
    if (usernamePattern.test(username)) {
        res.end(`Hello, ${username}! Nice to meet you.`);
    }
    else if (username.length < 3) {
        res.end("Your username needs to be atleast 3 charachters long!")
    } else {
        res.end("This is not a valid username format! Your username must contain atleast one uppercase, one lowercase and one digit.");
    }
}

function handleNotFound(req, res) {
    res.end("Error 404! Not found!");
}

module.exports = {
    welcome,
    handleUser,
    handleNotFound,
}
