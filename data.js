const express = require('express');
const router = express.Router();
const mysql=require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "*****",
    database: "simpleangular",
    multipleStatements: true
})
con.connect(console.log("connecting to mysql"))




module.exports.con = con;
module.exports.router = router;
