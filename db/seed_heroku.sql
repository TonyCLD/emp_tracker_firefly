USE owpggkyq543hb11k;

CREATE TABLE department (
    department_id INT PRIMARY KEY NOT NULL, 
    depname VARCHAR(30) NOT NULL
);
CREATE TABLE crewrole (
    role_id INT PRIMARY KEY NOT NULL, 
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department (department_id)
);
CREATE TABLE employee (
    emp_id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES crewrole (role_id)
);


INSERT INTO department (department_id, depname) 
    VALUES 
        (201, 'Command'),
        (202, 'Medical'),
        (203, 'Maintenance'),
        (204, 'Civilian');

INSERT INTO crewrole (role_id, title, salary, department_id)  
	VALUES 
        (301,'Captain', 12000.00, 201),
	    (302,'First Lieutenant', 12000.00, 201),
	    (303,'Pilot', 10000.00, 201),	
	    (304,'Soldier', 8000.00, 201),
	    (305,'Doctor', 10000.00, 202),
	    (306,'Chief Engineer', 12000.00, 203),
	    (307,'Passenger', 6000.00, 204),
	    (308,'Psychiatrist', 10000.00, 202);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
	VALUES  
        (101, 'Malcome', 'Reynolds', 301, null),
	    (102,'Zoe', 'Washburne', 302, 101),
	    (103,'Hoban', 'Washburne', 303, 102),
	    (104,'Simon', 'Tam', 305, 101),
	    (105,'Jayne', 'Cobb', 304, 102),
	    (106,'Kaylee', 'Frye', 306, 101),
	    (107,'Inara', 'Serra', 307, null),
	    (108,'River', 'Tam', 307, 104),
	    (109,'Shepherd', 'Book', 308, 104);