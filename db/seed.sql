use employees

INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES 
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Johnny', 1, NULL),
('Brad', 'Chad', 2, 1),
('Beckie', 'Rob', 3, NULL),
('Kevin', 'Sid', 4, 3),
('Casy', 'Sarah', 5, NULL),
('Mathew', 'Brown', 6, 5),
('Steve', 'Jeff', 7, NULL),
('Tom', 'Jerry', 8, 7);