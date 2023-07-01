INSERT INTO department (name)
VALUES  ("North"),
        ("East"),
        ("South"),
        ("West");

INSERT into role (title, salary, department_id)
VALUES  ("Manager", "50000", 1);

INSERT into employee (first_name, last_name, role_id, manager_id, is_manager)
VALUES  ("Testy", "Testingson", 1, null, 1);