// EmployeeDB Class, all functions are use from this class.

class EmployeeDB {
    // Imports the DB SQL connection from the Index page.
    constructor(db) {
        this.db = db;
    }

    // Retrieves the departments from the Database. 
    retrieveDepartments = async () => {    
        const sql = "SELECT department.id, department.name FROM department;"  

        // Returns the infomation collected from the DB.
        return new Promise((resolve, reject) => {
            this.db.query(sql, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            });
        })
    }

    addDepartment(department) {
        // SQL string to insert the new department.
        const SQL = 'INSERT INTO department SET ?'

        return new Promise((resolve, reject) => {
            // Uses the infomation from the user to insert into the database.
            this.db.query(SQL, {name: department.departmentName}, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('New department added successfully!')
                }
            })
        })
    }

    retrieveEmployees = async () => {
        // Fetches the neccessary employee data from the DB, including their roles and departments. Also displays the name of their manager.
        const sql = `
        SELECT 	
            employee.id, 
            CONCAT(employee.first_name, ' ', employee.last_name) AS Name, 
            role.title AS Title, 
            role.salary as Salary, 
            department.name as Department,
            CONCAT(m.first_name, ' ', m.last_name) as Manager
        FROM employee
            INNER join role ON employee.role_id = role.id
            INNER join department ON role.department_id = department.id
            LEFT JOIN employee m ON employee.manager_id = m.id;
        `
        return new Promise((res, rej) => {
            this.db.query(sql, (err, result) => {
                if (err) {
                    rej(err)
                }
                res(result)
            })
        })
    }

    addEmployee(employee) {

        // SQL String for inserting the new employee
        const SQL = `
        INSERT INTO employee SET ? 
        `
        // Deconstruct the object
        const {empNameFirst, empNameLast, empRole, empManager} = employee
        
        // New promise, adds the new employee with the paramaters parsed.
        return new Promise((res, rej) => {
            this.db.query(SQL, {first_name:empNameFirst, last_name:empNameLast, role_id:empRole, manager_id:empManager}, (err, result) => {
                if (err) {
                    rej(err)
                }
                res(`'${empNameFirst} ${empNameLast}' has been added to the Database!`)
            })
        })

        
    }

    retrieveRoles = async () => {
        // Retrieves the neccessary role data to display to the user. Also retrieves the department from the department table.
        const sql = `
        SELECT role.id, role.title, role.salary, department.name
        FROM role
        INNER JOIN department 
        ON role.department_id = department.id;
        `

        return new Promise((res, rej) => {
            this.db.query(sql, (err, result) => {
                if (err) {
                    rej(err)
                }
                res(result)
            })
        })
    }

    // Adds an additional role to the data base, with the parsed params.
    addRole(role) {
        // SQL Insert string
        const SQL = 'INSERT INTO role SET ?'

        const {roleName, roleSalary, roleDepartment} = role;

        return new Promise((resolve, reject) => {
            // Sets the new role with the title, salary and department id as stated by the user.
            this.db.query(SQL, {title: roleName, salary: roleSalary, department_id: roleDepartment }, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('New role added to the database!')
                }
            })
        })
    }

    // Updates an employees record with their new role.
    updateEmployeeRole(employee) {

        const { newRole, updatedEmployee} = employee
        // SQL string that sets the role of the corresponding ID where it matches the Employee ID.
        const SQL = `
        UPDATE employee SET employee.role_id=${newRole} WHERE employee.id=${updatedEmployee}
        `
        
        return new Promise((resolve, reject) => {
            this.db.query(`UPDATE employee SET employee.role_id=? WHERE employee.id=?`, [newRole, updatedEmployee], (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve("Update successful!")
            })
        })

        

    }
    // Updates an employee to be marked as a manager.
    updateToManager(manager) {
        const SQL = `
        UPDATE employee SET employee.is_manager=1 WHERE employee.id=?
        `
        // Finds the employee who matches with the ID and sets their 'is_manager' to true(1).
        this.db.query(SQL, [manager.empManager], (err, result) => {
            if (err) {
                console.log(err)
            }
        })
    }

    // Used to retrieve managers from the Database.
    retrieveManagers = async () => {
        const SQL = `
        SELECT 	
            employee.id, 
            CONCAT(employee.first_name, ' ', employee.last_name) AS Name, 
            role.title AS Title, 
            role.salary as Salary, 
            department.name as Department
        FROM employee
            INNER join role ON employee.role_id = role.id
            INNER join department ON role.department_id = department.id
        WHERE employee.is_manager=1
        `
        // Returns the data from the DB.
        return new Promise((res, rej) => {
            this.db.query(SQL, (err, result) => {
                if (err) {
                    rej(err)
                }
                res(result)
            })
        })
    }

    delete(table) {

        console.log(table)


        const SQL = `
        DELETE from ?
        WHERE 
        
        `
    }

}

// Module Exports
module.exports = EmployeeDB;