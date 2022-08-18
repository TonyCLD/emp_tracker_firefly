use firefly;

SELECT
    title AS 'Rank', 
    first_name AS 'First name', last_name AS 'Last name' 
    FROM crewrole
        JOIN employee
        ON crewrole.role_id = employee.role_id;
