const Database = require('./database.js');

class EmployeeDatabase extends Database {
    constructor(options) {
        super(options)
    }

    getDepartments() {
        return new Promise((res, rej) => {
            this.db.query('SELECT')
        })
    }
}

module.exports = EmployeeDatabase;