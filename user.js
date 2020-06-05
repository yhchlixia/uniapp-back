var conn = require("./mysql");
function userList() {
    conn.connection.query("SELECT * FROM user", function(err, data) {
        if(err) {
            console.log(err);
            return;
        }
        var users = data
    })
    // return users;
}

exports.userList = userList;