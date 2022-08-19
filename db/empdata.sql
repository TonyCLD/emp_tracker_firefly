USE firefly;

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




    --  >> View all employees
    --       I am presented with a formatted table showing employee data, including 
    --       employee ids, first names, last names, job titles, departments, salaries,
    --       and managers that the employees report to