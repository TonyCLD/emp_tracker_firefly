USE firefly;

SELECT
    department.department_id AS "ID",
    department.depname AS "Department",
    crewrole.salary AS "Salaries"

SELECT 
    CASE 
        WHEN GROUPING(department.department_id)=1
            THEN 'SubTotal'
  
    FROM employee
        JOIN crewrole
        ON employee.role_id = crewrole.role_id
        JOIN department
        ON department.department_id = crewrole.department_id
        SELECT SUM(`salary`) AS `Dept. Salary total` FROM `firefly`;
        ORDER BY department.department_id ASC;




    --  >>  view the total utilized budget of a department—in other words, the 
    --      combined salaries of all employees in that department


