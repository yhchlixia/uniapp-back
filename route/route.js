var appRoute = require("../server/server");
var url = require("url");
var user = require("../controller/user");
var login = require("../controller/login");
appRoute.app.get('/', function(req, res) {
    res.send('hello world');
})
appRoute.app.get('/user', function(req, res) {
    user.userList(req, res);
})
appRoute.app.get('/addUser', function(req, res) {
    var params = url.parse(req.url, true).query;
    user.addUser(params, res);
})
appRoute.app.get('/deleteUser', function(req, res) {
    var params = url.parse(req.url, true).query;
    user.deleteUser(params, res);
})
appRoute.app.get('/updateUser', function(req, res) {
    var params = url.parse(req.url, true).query;
    user.updateUser(params, res);
})
appRoute.app.get('/login', function(req, res) {
    var params = url.parse(req.url, true).query;
    login.login(req, res, params);
})
appRoute.app.get('/sendCheck', function(req, res) {
    var params = url.parse(req.url, true).query;
    login.sendCheck(req, res, params);
})
exports.route = appRoute;