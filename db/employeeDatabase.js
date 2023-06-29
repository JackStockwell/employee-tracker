class EmployeeDB {
    constructor(db) {
        this.db = db;
    }

    retrieveDepartment() {    
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

    newDepartment(department) {
        const SQL = 'INSERT INTO department SET ?'
        console.log(department)
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

    retrieveEmployee() {
        const sql = "SELECT CONCAT('first_name', 'last_name') AS Employee FROM employee"
        
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

    retrieveRole() {
        const sql = "SELECT * FROM role"

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
}

module.exports = Database = { 
    EmployeeDB
};