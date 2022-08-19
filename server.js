const express = require('express');
const app = express();
// const inquirer = require('inquirer');
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
const inquirer = require('inquirer');

// var figlet = require('figlet');
// figlet('Firefly Employement', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });


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




// >> View all departments
//          I am presented with a formatted table showing department names and department ids

// >> View all roles
//          I am presented with the job title, role id, the department that role 
//          belongs to, and the salary for that role

// >> View all employees
//          I am presented with a formatted table showing employee data, including 
//          employee ids, first names, last names, job titles, departments, salaries,
//          and managers that the employees report to

// >> Add a department
//          I am prompted to enter the name of the department and that department 
//          is added to the database

// >> Add a role 
//          I am prompted to enter the name, salary, and department for the role 
//          and that role is added to the database

// >> Add an employee
//          I am prompted to enter the employee’s first name, last name, role, 
//          and manager, and that employee is added to the database

// >> Update an employee role
//          I am prompted to select an employee to update and their new role 
//          and this information is updated in the database