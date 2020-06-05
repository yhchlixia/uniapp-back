var conn = require("../mysql");
function userList(req, res) {
    var sql = "SELECT * FROM user";
    conn.c.query(sql, function(err, result) {
        var response = {};
        var data = result
        response.status = 0;
        response.message = '查询成功';
        response.data = data;
        res.send(response);
    })
}
function addUser(params, res) {
    var sql = "INSERT INTO user(user_id,user_nickname,user_name,password,role,user_tel) VALUES(?,?,?,?,?,?)";
    var addParams = [params.id,params.username,params.username,params.password,'admin',params.tel];
    conn.c.query(sql, addParams, function(err, result) {
        var response = {};
        var data = params;
        response.status = 0;
        response.message = '插入成功';
        response.data = data;
        res.send(response);
    })
}
function deleteUser(params, res) {
    var sql = "DELETE FROM user where user_id = ?";
    var deleteParams = [params.id];
    conn.c.query(sql, deleteParams, function(err, result) {
        var response = {};
        response.status = 0;
        response.message = '删除用户成功';
        res.send(response);
    })
}
function updateUser(params, res) {
    var sql = "UPDATE user SET user_nickname = ?,role = ?, user_tel = ? where user_id = ?";
    var updateParams = [params.userNick, params.role, params.tel, params.id];
    conn.c.query(sql, updateParams, function(err, result) {
        var response = {};
        var data = params;
        response.status = 0;
        response.message = '编辑用户成功';
        response.data = data;
        res.send(response);
    })
}
module.exports = {
    userList,
    addUser,
    deleteUser,
    updateUser
}