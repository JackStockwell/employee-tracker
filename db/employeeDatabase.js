class EmployeeDB {
    constructor(db) {
        this.db = db;
    }
}

class Departments extends EmployeeDB {
    constructor(db) {
        super(db);
    }

    retrieve() {    
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
}

class Employees extends EmployeeDB {
    constructor(db) {
        super(db);
    }

    retrieve() {
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
    Employees 
};