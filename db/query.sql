use firefly;

SELECT
    title, 
    first_name, last_name 
    FROM crewrole
        JOIN employee
        ON crewrole.role_id = employee.role_id;
