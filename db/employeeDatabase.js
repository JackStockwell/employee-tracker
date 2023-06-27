const DatabaseParent = require('./database.js');

class Departments extends DatabaseParent {
    constructor(options) {
        super(options);
    }

    getDepartments() {       
        return new Promise((res, rej) => {
            const sql = "SELECT * FROM department;"
            this.db.query(sql, (err, result) => {
                if (err) {
                    rej(err)
                    return
                }
                res(result);
            });
        })
    }
}

class Employees extends DatabaseParent {
    constructor(options) {
        super(options)
    }

    getEmployees() {
        return new Promise((res, rej) => {
            const sql = "SELECT CONCAT('first_name', 'last_name'), FROM employee_db"
            this.db.query(sql, (err, result) => {
                if (err) {
                    rej(err)
                    return
                }
                res(result)
            })
        })
    }
}

module.exports = Database = { 
    Departments,
}