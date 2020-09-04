const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let DB_config = {
    host: "localhost",
    user: "root",
    password: "Bhagya@1218",
    database: "covid"
};

let adduser = async (input) => {
    const connection = mysql.createConnection(DB_config);
    await connection.connectAsync();

    let sql = "insert into register (username,email,mobile,new_password,con_password) values(?,?,?,?,?)";
    let result = await connection.queryAsync(sql, [
        input.username,
        input.email,
        input.mobile,
        input.new_password,
        input.con_password
    ]);

    await connection.endAsync();
}

module.exports = { adduser };