const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"lawal_db"
})

module.exports =db;