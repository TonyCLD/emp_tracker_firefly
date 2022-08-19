USE firefly;

SELECT
    title AS "Rank",
    role_id AS "Rank ID",
    department.depname AS "Dept. Name",
    salary AS "Salary" 
    FROM crewrole
        JOIN department
        ON crewrole.department_id = department.department_id;
