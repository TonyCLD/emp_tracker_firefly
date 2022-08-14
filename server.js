const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
// this route is so we can pull in the page of routes in the route folder. 
const api_routes = require('./routes/api_routes');
// routes are important and create doors to your application and page. 
// this is the root route. 
app.use('/api', api_routes);

// const { response } = require('express');
const mysql = require('mysql');
const path = require('path');

app.get('/', (request, response) => {
    response.send('works!');
});


// Create Connection
app.listen('3333', () => {
    console.log (`I'm listening on ${PORT}`);
});

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'pass',
//     database: 'firefly'
// });

// // Connecting
// db.connect((err)=> {
//     if(err){
//         throw err;
//     }
//     console.log('MySql connected')
// });

// // Create Database Firefly
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
 
