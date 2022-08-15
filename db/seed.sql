INSERT INTO department (id, depname) 
    VALUES 
        (201, 'Command'),
        (202, 'Medical'),
        (203, 'Maintenance'),
        (204, 'Civilian');

INSERT INTO crewrole (id, title, salary, department_id)  
	VALUES 
        (301, 'Captain', 12000.00, 201),
	    (302, 'First Lieutenant', 12000.00, 201),
	    (303, 'Pilot', 10000.00, 201),	
	    (305, 'Soldier', 8000.00, 201),
	    (304, 'Doctor', 10000.00, 202),
	    (306, 'Chief Engineer', 12000.00, 203),
	    (307, 'Passenger', 6000.00, 204),
	    (308, 'Psychiatrists', 10000.00, 202);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
	VALUES  
        (101, 'Malcome', 'Reynolds', 301, null),
	    (102, 'Zoe', 'Washburne', 302, 101),
	    (103, 'Hoban', 'Washburne', 303, 102),
	    (104, 'Simon', 'Tam', 304, 101),
	    (105, 'Jayne', 'Cobb', 305, 102),
	    (106, 'Kaylee', 'Frye', 306, 101),
	    (107, 'Inara', 'Serra', 307, null),
	    (108, 'River', 'Tam', 307, 104),
	    (109, 'Shepherd', 'Book', 307, 104);