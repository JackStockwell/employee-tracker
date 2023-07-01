const { mainMenu } = require("../lib/questions");

class EmployeeDB {
    constructor(db) {
        this.db = db;
    }

    retrieveDepartments = async () => {    
        const sql = "SELECT * FROM department;"  

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
        SELECT employee.id, CONCAT(first_name, ' ', last_name) AS Name, role.title AS Role, role.salary as Salary, department.name as Department, employee.manager_id as Manager
        FROM ((employee
        LEFT join role ON employee.role_id = role.id)
        LEFT join department ON role.department_id = department_id);
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

    retrieveRoles = async () => {
        const sql = `
        SELECT role.id, role.title, role.salary, department.name
        FROM role
        LEFT JOIN department 
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
        return new Promise((resolve, reject) => {
            this.db.query(SQL, {title: role.name, salary: role.salary, department_id: role.id }, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('New role added successfully!')
                }
            })
        })
    }
}

module.exports = Database = { 
    EmployeeDB
};