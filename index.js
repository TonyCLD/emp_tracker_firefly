const inquirer = require('inquirer');
const connection = require('./db/connection');
require('console.table');

console.log(`
┌──────────────────────────────────────────────┐ '||''''|                     .|'; '||'                                              
│  @@@  nn@...    ...    xnnn@nn.              │  ||  .    ''                 ||    ||                                               
│   @#@@@...--.............#xxnnn@n            │  ||''|    ||  '||''| .|''|, '||'   ||  '||  ||'                                     
|     ##....#.--....-.........x....@           │  ||       ||   ||    ||..||  ||    ||   '|..||                                      
│  @@@@...x##@@---------  .... ...             │ .||.     .||. .||.   .|...  .||.  .||.      ||                                      
│      ... #-@@@nn-----nnnx@.n                 │                                          ,  |'                                      
│         ##-@@@@@n--nnn@@@@.n      n          │                                           ''                                        
│          n---@@@@@@n@@--...@@----nn..        │ '||''''|                    '||'                                              ||    
│    x-- .n------- x@@x--   @@@@@@@@n....      │  ||   .                      ||                                               ||    
│ @@ nnnn.----.....###x--x#@@@ xxx@xn.....     │  ||'''|  '||),,(|,  '||''|,  ||  .|''|, '||  ||' '||),,(|,  .|''|, '||''|,  ''||''  
│  @@###nnn--..           ###xxx##@@n   ...    │  ||       || || ||   ||  ||  ||  ||  ||  '|..||   || || ||  ||..||  ||  ||    ||    
│   @@@@x#nn-...          @@@@@@-@-@@@@  ..    │ .||....| .||    ||.  ||..|' .||. '|..|'      ||  .||    ||. '|...  .||  ||.   |..' 
│      @@@#####.               @@@-----##...   │                      ||                   ,  |'                                     
│          ##n                       @-----.   │                     .||                    ''                                       
└──────────────────────────────────────────────┘

 `);

//  first_name, last_name, role_id, manager_id

function addEmp() {
    inquirer.prompt([{
        type: 'input',
        name: 'employeeName',
        message: 'Add employee first and last name, role ID and Manager ID',
}])

};

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
            promptUser();
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
            promptUser();
        })   
};

function callAllDepts() {
    const sql = `
    SELECT department_id AS "ID", depname AS "Dept. Name" FROM department;
    `;
    connection.query(sql)
        .then((result) => {
            console.table(result[0]);
            promptUser();
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
            promptUser();
        })   
};

const promptUser = () => {

inquirer
  .prompt([{
    message: "Would you like to do?",
    type: 'list',
    choices: ['View all departments', 'View all roles', 'View all employees', 'View all employees by manager', 'Add department' ],
    name: 'choice'    
    }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.choice === 'View all employees') {
        callAllEmployees()
    }  ;  
    if (answers.choice === 'View all roles') {
        callAllRoles()
    }  ;  
    if (answers.choice === 'View all departments') {
        callAllDepts()
    }  ;  
    if (answers.choice === 'View all employees by manager') {
        callAllEmpByManager()
    }  ;  
    if (answers.choice === 'Add department') {
        addDepartment()
    }  ;  

})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
};

const addDepartment = () => {
    inquirer
      .prompt([
        {
          name: 'newDepartment',
          type: 'input',
          message: 'What\'s the new Department\'s name?',
        }
      ])
      .then((answer) => {
        let sql = `INSERT INTO department (depname) VALUES (?)`;
          callAllDepts();
        });
      };

promptUser();