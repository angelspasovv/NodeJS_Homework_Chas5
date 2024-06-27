const http = require("http");
const url = require("url");

const {
    welcome,
    handleUser,
    handleNotFound,
} = require("./handler.js");

const userServer = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/welcome") {
        welcome(req, res);
    } else if (parsedUrl.pathname === "/user") {
        handleUser(req, res, parsedUrl.query.username)
    } else {
        handleNotFound(req, res);
    }


});

userServer.listen(10000, () => {
    console.log("Server started at port 10000!");
  });
