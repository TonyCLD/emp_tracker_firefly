USE firefly;

INSERT INTO department (depname) 
    VALUES 
        ('Command'),
        ('Medical'),
        ('Maintenance'),
        ('Civilian');

INSERT INTO crewrole (title, salary, department_id)  
	VALUES 
        ('Captain', 12000.00, 201),
	    ('First Lieutenant', 12000.00, 201),
	    ('Pilot', 10000.00, 201),	
	    ('Soldier', 8000.00, 201),
	    ('Doctor', 10000.00, 202),
	    ('Chief Engineer', 12000.00, 203),
	    ('Passenger', 6000.00, 204),
	    ('Psychiatrist', 10000.00, 202);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES  
        ('Malcome', 'Reynolds', 301, null),
	    ('Zoe', 'Washburne', 302, 101),
	    ('Hoban', 'Washburne', 303, 102),
	    ('Simon', 'Tam', 305, 101),
	    ('Jayne', 'Cobb', 304, 102),
	    ('Kaylee', 'Frye', 306, 101),
	    ('Inara', 'Serra', 307, null),
	    ('River', 'Tam', 307, 104),
	    ('Shepherd', 'Book', 308, 104);