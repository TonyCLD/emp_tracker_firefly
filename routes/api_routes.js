const emp_router = require('express').Router();
const db = require('../db/connection');
// const fs = require('fs');
const path = require ('path');
const connection = require('../db/connection');
// const uuid = require ('uuid').v4;
// const mysql = require('mysql2');
const db_path = path.join(__dirname, '../db/emp.json');



connection.query('SELECT * FROM employee', (err, data) => {
    if (err) return console.log(err);

    console.log(data);
});

function getFireflyData() {
    return fs.promises.readFile(db_path, 'utf8')
    .then(data => JSON.parse(data));
};

// emp_router.get('/test', (request, response) => {
//     response.json({
//         name: 'tony',
//         age: 57
//     });
// });


module.exports = emp_router;