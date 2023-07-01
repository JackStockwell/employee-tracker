const { mainMenu } = require("../lib/questions");

class EmployeeDB {
    constructor(db) {
        this.db = db;
    }

    retrieveDepartments = async () => {    
        const sql = "SELECT department.id, department.name FROM department;"  

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
        const SQL = 'INSERT INTO department SET ?'

        return new Promise((resolve, reject) => {
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
        const SQL = `
        INSERT INTO employee SET ? 
        `
        const {empNameFirst, empNameLast, empRole, empManager} = employee
        
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
                    return
                }
                res(result)
            })
        })
    }

    addRole(role) {
        const SQL = 'INSERT INTO role SET ?'

        const {roleName, roleSalary, roleDepartment} = role;

        return new Promise((resolve, reject) => {
            this.db.query(SQL, {title: roleName, salary: roleSalary, department_id: roleDepartment }, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('New role added to the database!')
                }
            })
        })
    }

    updateEmployeeRole(update) {
        console.log(update)

        const { newRole, updatedEmployee} = update

        const SQL = `UPDATE employee SET employee.role_id=${newRole} WHERE employee.id=${updatedEmployee}`
        
        return new Promise((resolve, reject) => {
            this.db.query(`UPDATE employee SET employee.role_id=? WHERE employee.id=?`, [newRole, updatedEmployee], (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve("Update successful!")
            })
        })

    }

}

module.exports = EmployeeDB;