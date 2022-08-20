DROP DATABASE firefly;
CREATE DATABASE firefly;

USE firefly;

CREATE TABLE department (
    department_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    depname VARCHAR(30) NOT NULL
);
CREATE TABLE crewrole (
    role_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department (department_id)
);
CREATE TABLE employee (
    emp_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES crewrole (role_id)
);

ALTER TABLE department AUTO_INCREMENT = 201;
ALTER TABLE crewrole AUTO_INCREMENT = 301;
ALTER TABLE employee AUTO_INCREMENT = 101;


-- SELECT * FROM employee;
-- SELECT * FROM employee WHERE id = 107;
-- SELECT * FROM employee WHERE last_name = 'Washburne';