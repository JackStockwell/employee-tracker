const { mainMenu } = require("../lib/questions");

class EmployeeDB {
    constructor(db) {
        this.db = db;
    }

    render(data) {
        console.log('\n')
        console.table(data)
        console.log('\n')
    } 

    retrieveDepartments = async () => {    
        const sql = "SELECT * FROM department;"  

        const departments = await new Promise((resolve, reject) => {
            this.db.query(sql, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            });
        })

        this.render(departments)
        this.mainMenu()
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
        const sql = "SELECT CONCAT('first_name', 'last_name') AS Employee FROM employee"
        
        const employees = await new Promise((res, rej) => {
            this.db.query(sql, (err, result) => {
                if (err) {
                    rej(err)
                    return
                }
                res(result)
            })
        })
        this.render(employees)
        this.mainMenu()
    }

    retrieveRoles = async () => {
        const sql = "SELECT title, salary FROM role"

        const roles = await new Promise((res, rej) => {
            this.db.query(sql, (err, result) => {
                if (err) {
                    rej(err)
                    return
                }
                res(result)
            })
        })

        this.render(roles)
        this.mainMenu()
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