const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    database: 'firefly',
    user: 'root',
    password: 'pass'
});

module.exports = connection;