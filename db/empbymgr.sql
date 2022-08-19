USE firefly;

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




    --  >> view employees by manager