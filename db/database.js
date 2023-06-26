const mysql = require('mysql');

class Database {
    constructor (options) {
        this.options = options,
        this.db = null
    }

    connect() {

        if (this.options) {

        const { host, user, password, database } = this.options
        
        this.db = mysql.createConnection (
            {
                host: host,
                user: user,
                password: password,
                database: database
            },
            console.log("Connected to employee_db"))
        } else {
            throw new Error ("There was an error connection to the database, please ensure credentials are correct!")
        }
    }
}

module.exports = Database;