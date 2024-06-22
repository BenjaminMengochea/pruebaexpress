const mysql = require ("promise-mysql");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createconnection({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
})

const getconnection = ()=> connection;

module.exports ={
    getconnection
}