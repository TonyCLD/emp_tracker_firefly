INSERT INTO department ('id', 'name') 
    VALUES ('201', 'Command'),
    VALUES ('202', 'Medical'),
    VALUES ('203', 'Maintenance'),
    VALUES ('204', 'Civilian');

INSERT INTO role ('id', 'title', 'salary', 'department_id')  
	VALUES ('301', 'Captain', '12000.00', '201'),
	VALUES ('302', 'First Lieutenant', '12000.00', '201'),
	VALUES ('303', 'Pilot', '10000.00', '201'),	
	VALUES ('305', 'Soldier', '8000.00', '201'),
	VALUES ('304', 'Doctor', '10000.00', '202'),
	VALUES ('306', 'Chief Engineer', '12000.00', '203'),
	VALUES ('307', 'Passenger', '6000.00', '204')
	VALUES ('308', 'Psychiatrists', '10000.00', '202');

INSERT INTO employee ('id', 'first_name', 'last_name', 'role_id', 'manager_id')
	VALUES ('101', 'Malcome', 'Reynolds', '301', 'null'),
	VALUES ('102', 'Zoe', 'Washburne', '302', '101'),
	VALUES ('103', 'Hoban', 'Washburne', '303', '102'),
	VALUES ('104', 'Simon', 'Tam', '304', '101'),
	VALUES ('105', 'Jayne', 'Cobb', '305', '102'),
	VALUES ('106', 'Kaylee', 'Frye', '306', '101'),
	VALUES ('107', 'Inara', 'Serra', '307', 'null'),
	VALUES ('108', 'River', 'Tam', '307', '104'),
	VALUES ('109', 'Shepherd', 'Book', '307', '104');