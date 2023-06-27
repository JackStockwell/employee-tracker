// Imports

const inquirer = require('inquirer');
const { mainMenu, addDepartment, addRole, addEmployee, updateEmployee } = require('./questions');
const { Department } = require('../db/employeeDatabase.js')

class CLI {
    constructor() {

    }

    // Function to connect to the database.
    connect() {
        const credentials = {
            host: 'localhost',
            user: 'root',
            password: 'Fireball1',
            database: 'employee_db'
        };
    
        const db = new Database(credentials);
    
        db.connect();
    }

    run() {
        inquirer
            .prompt(mainMenu)
            .then((response) => {

                const option = {
                    viewDatabase: Department,
                }

                const search = new option[response.option]();

                
                // LOOKUP TABLE
                // TAKE RESPONSE => RUN CLASS
            })
    }

    
}

module.exports = CLI;