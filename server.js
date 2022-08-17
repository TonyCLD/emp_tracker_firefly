const express = require('express');
const app = express();
const inquirer = require('inquirer');
const mysql = require('mysql');
const PORT = process.env.PORT || 3333;
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'pass',
//     // database: 'firefly'
// });

// Create Connection
app.listen('3333', () => {
    console.log (`I'm listening on ${PORT}`);
});
const api_routes = require('./routes/api_routes');
app.use('/api', api_routes);

// routes are important and create doors to your application and page. 
// this is the root route. 


// const path = require('path');


// app.get('/insert', (request, response) => {
//     db.query(
//         'INSERT INTO role (id INT PRIMARY KEY, title VARCHAR(30), salary DECIMAL) VALUES (301, "Captain", 12000.00)', (err, result) => {
//             if (err) {
//                 console.log(err);
//             }
//             response.send(result);
//         }
//     );

// });

// Connecting
// db.connect((err) => {
//     if(err){
//         throw err;
//     }
//     console.log('MySql connected')
// });



// Create Database Firefly
// app.get('/createdb', (request, response) => {   
//     let sql = 'CREATE DATABASE firefly';
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         response.send('database created ...');
//     });
// });

// // Create table
// app.get('/createpoststable', (request, response) => {
//     let sql = 'CREATE TABLE employees(id int AUTO_INCREMENT, title VARCHAR(20), role VARCHAR(50), PRIMARY KEY (id) )';
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         response.send('Employee Table created ...');
//     });
// });
 
