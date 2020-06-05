var conn = require("../mysql");
const server = require("../server/server")
const SMSClient = require("@alicloud/sms-sdk")
const random = require('string-random')
const accessKeyId = "your accessKeyId"
const secretAccessKey = "your secretAccessKey"

server.app.use(server.cookieParser());
server.app.use(server.session({
    secret: '123456',
    name: 'name',
    cookie: {maxAge: 60000},
    resave: false,
    saveUninitialized: true
}))

function login(req, res, params) {
    console.log(req);
    // console.log(res.redirect(req.session.telCheck))
    var sql = "SELECT * FROM user where user_name = ?";
    var queryParams = [params.username]
    conn.c.query(sql, queryParams, function(req, result) {
        var response = {};
        console.log(result);
        if(result[0]) {
            console.log(params.password);
            var data = result[0];
            if(data.password === params.password) {
                var response = {};
                response.data = data;
                response.status = 0;
                response.message = "登陆成功";
                res.send(response)
                return;
            }
            response.data = null;
            response.status = 2;
            response.message = "密码错误";
            res.send(response)
            return;
        } else {
            response.data = null;
            response.status = 1;
            response.message = "用户名不存在";
            res.send(response)
            return;
        }
    })
}

function sendCheck(req, res, params) {
    let smsClient = new SMSClient({accessKeyId, secretAccessKey})
    const param = {
        code: random(6)
    }
    smsClient.sendSMS({
        PhoneNumbers: params.tel,
        SignName: '启奥秀秀',
        TemplateCode: '',
        TemplateParam: JSON.stringify(param)
    }).then(res => {
        let {
            Code
        } = res;
        if (Code === 'OK') {
            req.session.telCheck = param.code;
        }
    },
    err => {
        console.log(err);
    })
}

module.exports = {
    login,
    sendCheck
}