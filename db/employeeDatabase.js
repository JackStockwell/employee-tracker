const Database = require('./database.js');

class EmployeeDatabase extends Database {
    constructor(options) {
        super(options)
    }

    options() {
        console.log(this.options)
    }
}

module.exports = EmployeeDatabase;