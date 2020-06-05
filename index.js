var server = require("./server/server");
var router = require("./route/route");

server.start(router.route.app)