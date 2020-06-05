var express = require("express");
var app = express();
var cookieParser = require("cookie-parser")
var session = require("express-session")
function start(appRoute) {
    var server = appRoute.listen(8888, function() {
        var host = server.address().address;
        var port = server.address().port;
        console.log("Server running http://%s:%s", host, port);
    })
}
module.exports = {
    start,
    app,
    cookieParser,
    session
}
