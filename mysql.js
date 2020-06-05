var mysql = require("mysql");
var c = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "yhchailixia.12345",
    port: "3306",
    database: "workstatic"
})
c.connect(err => {
    if(err) {
        return console.log(err)
    };
    console.log('nysql connect success')
});
exports.c = c;