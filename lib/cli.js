// Imports

const inquirer = require('inquirer');
const { mainMenu, addDepartment, addRole, addEmployee, updateEmployee } = require('./questions');
const Database = require('../db/employeeDatabase.js')

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
                
            })
    }

    
}

module.exports = CLI;