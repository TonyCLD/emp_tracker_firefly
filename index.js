const inquirer = require('inquirer');
const connection = require('./db/connection');
require('console.table');

console.log('welcome to employer');

function callAllEmployees() {
    const sql = `
        SELECT
        emp_id AS "ID",
        first_name AS "First Name",
        last_name AS "Last Name",
        crewrole.title AS "Rank",
        department.depname AS "Dept. Name", 
        crewrole.salary AS "Salary",
        employee.manager_id AS "Manager"

        FROM employee
            JOIN crewrole
            ON employee.role_id = crewrole.role_id
            JOIN department
            ON department.department_id = crewrole.department_id;
    `;
    connection.query(sql)
        .then((result) => {
            console.table(result[0]);
        })   
};

function callAllRoles() {
    const sql = `
    SELECT
    title AS "Rank",
    role_id AS "Rank ID",
    department.depname AS "Dept. Name",
    salary AS "Salary" 
    FROM crewrole
        JOIN department
        ON crewrole.department_id = department.department_id;
    `;
    connection.query(sql)
        .then((result) => {
            console.table(result[0]);
        })   
};

function callAllRoles() {
    const sql = `
    SELECT
    title AS "Rank",
    role_id AS "Rank ID",
    department.depname AS "Dept. Name",
    salary AS "Salary" 
    FROM crewrole
        JOIN department
        ON crewrole.department_id = department.department_id;
    `;
    connection.query(sql)
        .then((result) => {
            console.table(result[0]);
        })   
};

function callAllEmpByManager() {
    const sql = `
    SELECT
    employee.manager_id AS "Manager",
    first_name AS "First Name",
    last_name AS "Last Name"
  
    FROM employee
        JOIN crewrole
        ON employee.role_id = crewrole.role_id
        JOIN department
        ON department.department_id = crewrole.department_id
        ORDER BY employee.manager_id ASC;
    `;
    connection.query(sql)
        .then((result) => {
            console.table(result[0]);
        })   
};

inquirer
  .prompt([{
    message: "Would you like to view:",
    type: 'list',
    choices: ['Show all departments', 'Show all roles', 'Show all employees', 'Show all employees by manager' ],
    name: 'choice'    
    }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.choice === 'Show all employees') {
        callAllEmployees()
    }  ;  
    if (answers.choice === 'Show all roles') {
        callAllRoles()
    }  ;  
    if (answers.choice === 'Show all departments') {
        callAllDepts()
    }  ;  
    if (answers.choice === 'Show all employees by manager') {
        callAllEmpByManager()
    }  ;  

})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });