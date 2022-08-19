USE firefly;

SELECT
    department.department_id AS "ID",
    department.depname AS "Department",
    first_name AS "First Name",
    last_name AS "Last Name"
  
    FROM employee
        JOIN crewrole
        ON employee.role_id = crewrole.role_id
        JOIN department
        ON department.department_id = crewrole.department_id
        ORDER BY department.department_id ASC;




    --  >> view employees by department