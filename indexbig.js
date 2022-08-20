const inquirer = require('inquirer');
const connection = require('./db/connection');
require('console.table');

console.log(`
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                      xxxxxxx         xx                                                                                           │
│                    xxx  .  xxx        xx..                                                                                        │
│                    x##x..     xx       xx..x                                                                                      │
│                     x###....   xxxxxxx  x  xx                                                                                     │
│                      xx####.x   xx   .x.x   xx..                                                                                  │
│                       xxxxx#.... xxxxx...xxx x ..xxxxxx                                                                           │
│                          xxxxxxx.xxx................. xxx                ...... .                                                 │
│      xxxxxx                xxxx.........                xx              ......... .x xx                                           │
│      x##x. xxxxxxxx         x..........    xxxxxxxxxxxxxxxxxxx         ........xxxx.....xxx                                       │
│     x##@@  ....x xxxx     xx.x.....     xxxxxxxxxxxxxxxxxxxxxxxxxx     ......xx         ....xxx                                   │
│     xx#@@.#.x  xxx.. xxx xx.....     xxxxxxx.......         xxxxxxx xxxxxx  x@@@@          .  xxx                                 │
│        @@.###  xxx. x .  xxx.x xxx xxxxx..... .                  xxxxxx  xxxx@@@@@@           xxxx                                │
│          xx.##xxx.  x.  xxxxx xx x##x x.. ... ..                   x   xxxxx xx.@@@@@      xx.x ..xxx                             │
│             xxxxx..xx.######x x xx##xxx.. .........               xx       xxxxxx...  @@@@xx .... ..xx                            │
│              xxxxxxxx.######x xxx####xxx.............            xx.....   x xxxx.xxx @@@@x       ...x                            │
│                        #####x xx######xxxxxx..................xxx ..   ... xxxx...x    @@x         ..x                            │
│             xxx        x####xxxx#######@x#####xxx.............x ...       ..x xxxxx      xx  @@@   xxx                            │
│              xx###xxxxxxxxx xx x#######@@@@@@#########.  ........        xx.x x xxxxxxxxxxx  xxxxxxx                              │
│                #####xxxxxxx xxxxx@xxxxxxxx##@@@@xxxx #.. ... .. ....   xx  xxxx             xx                                    │
│                   ####x....xxx xx@@@xxxxxxxxx@@@@@@xx x....      ....xx   xx x xxxx                                               │
│                           x..xx xx@@@xxxxxxxx..@@.@@@xx#..........xx   xxx  x........x                                            │
│                              xxxxx  @@@xxxxxx....@@@@@x ##xxxxx     xxxx xxx.............xxxxx  ########xxxxx                     │
│                                  xxxx     xx......@@x@@xx##xxxxxxxxxx xxx.....         ................x......xxx                 │
│                                  xx     xxx   ....x@@@@@xxx xxx  xxxxxx..  ..                          . . xx...xx                │
│                                 xxx                 x@@xxxxxxxxxx.................x     ####          x...  xxx...x               │
│             xxxx              xxx                   xx@xxxxxx########x###xxxxxxxxx...     x#############.     xxx...x             │
│           ......            xxx ..                   xx    xxxxxxxxxxxxxxxxxxxx#####....    xxxx@@#@@@@..xx     xxx...            │
│        xx........ xxxx    xxx .......        x.. x xx  xxxxxxxx  xxxxxxx xxx xxxxxxxxx...x   xxxxx@@@@@. xxx      xx ..x          │
│        x  x....xxxxx xxxxxxx ..... ......   ....   xxxx  xx xx.......xxxxxxxxx x  xxxxx...      xxx@@@#. xxxx  xxx  xx..x         │
│        xx##xx.xxx  xxx     xxxxx............xx   xxxxx ........xx xxx...............   ####    xxxxx###..xxxx    xx  xx.xxx       │
│         xx####xxxx.x....       xxxx......xxxxxxxxxxx  x.......x           xxxxxxx xx...############..   ..xxxxx   xx    .xxx      │
│          xxxxxxxx#x.......         xx...xxxxxxx         xxxx                     xxxxxx .### .x ..  ...  .  xxx   xxxxx .. xxx    │
│          xxxxxx@@@@@##.........xxxxxxx xxxxxxxx                                       xxxxxx.. xxx... ...          xxxxxx..  x    │
│             @@xx@@@@@@x........xxxxxxxxxxxx                                                      xxx........         xxxx  ..x    │
│             @@ x@@@@@@xxxxx...   @@@    xxxx                                                         xx.......             x.     │
│               @@@#@@@@xx### x  @@@@      x x                                                            x....x...x        xx      │
│                 @@@xxxx####@#@@@@@      xxxxx                                                             xx..............x       │
│                   @@xxxx##@@@@@@.....xxxxxxxx                                                               xxxx..........        │
│                     xxx@@x #x@@@x.......xxxxx                                                                                     │
│                         @@@@xx@@xx##xxx.xxxxx                                                                                     │
│                            @@@@@xxxx###xx                                                                                         │
│                                     xx                                                                                            │
│                                                                                                                                   │
└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 ________  _                     ___  __             ________                      __                                                     _    
|_   __  |(_)                  .' ..][  |           |_   __  |                    [  |                                                   / |_  
  | |_ \_|__   _ .--.  .---.  _| |_   | |   _   __    | |_ \_| _ .--..--.  _ .--.  | |  .--.   _   __  .---.  _ .--..--.  .---.  _ .--. .| |-' 
  |  _|  [  | [ ./'.\]/ /__\\'-| |-'  | |  [ \ [  ]   |  _| _ [ ..-. .-. |[ '/'.\ \| |/ .'.\ \[ \ [  ]/ /__\\[ ..-. .-. |/ /__\\[ ..-. | | |   
 _| |_    | |  | |    | \__.,  | |    | |   \ '/ /   _| |__/ | | | | | | | | \__/ || || \__. | \ '/ / | \__., | | | | | || \__., | | | | | |,  
|_____|  [___][___]    '.__.' [___]  [___][\_:  /   |________|[___||__||__]| ;.__/[___]'.__.'[\_:  /   '.__.'[___||__||__]'.__.'[___||__]\__/  
                                           \__.'                          [__|                \__.'                                            

 `);

//  first_name, last_name, role_id, manager_id

// function addEmp() {
//     inquirer.prompt([{
//         type: 'input',
//         name: 'employeeName',
//         message: 'Add employee first and last name, role ID and Manager ID',
// }])

// };

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

// const addDepartment = () => {
//     inquirer
//       .prompt([
//         {
//           name: 'newDepartment',
//           type: 'input',
//           message: 'What\'s the new Department\'s name?',
//         }
//       ])
//       .then((answer) => {
//         let sql = `INSERT INTO department (depname) VALUES (?)`;
//           callAllDepts();
//         });
//       };

const promptUser = () => {

inquirer
  .prompt([{
    message: "Would you like to do?",
    type: 'list',
    choices: ['View all departments', 'View all roles', 'View all employees', 'View all employees by manager', 'Exit' ],
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
    // if (answers.choice === 'Add department') {
    //     addDepartment()
    // }  ;  
    // if (answers.choice === 'Add crew role') {
    //   addRole()
    // }  ;
    if (answers.choice === 'Exit') {
      connection.end();
    }  

})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
};

    
promptUser();
    
    // const addRole = () => {
        //   inquirer
        //     .prompt([
            //       {
                //         name: 'newRole',
                //         type: 'input',
                //         message: 'What\'s the new crew title, salary and department ID? Example: (`Pilot`, 10000.00, 201)',
                //       }
                //       ])
                //         .then((answer) => {
                    //           let sql = `INSERT INTO crewrole (title, salary, department_id) VALUES (?)`;
                    //           callAllRoles();
                    //     });
                    // };
                    
                    


                    // const addDepartment = () => {
                    //     inquirer
                    //       .prompt([
                    //         {
                    //           name: 'newDepartment',
                    //           type: 'input',
                    //           message: 'What\'s the new Department\'s name?',
                    //         }
                    //       ])
                    //       connection.query(newDepartment)
                    //       .then((result) => {
                    //           console.table(result[0]);
                    //           callAllDepts();
                    //       })   
                    // };