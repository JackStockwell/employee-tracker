// Imports

const inquirer = require('inquirer');
const { mainMenu, addDepartment, addRole, addEmployee, updateEmployee } = require('./questions');
const { Departments } = require('../db/employeeDatabase.js')

class CLI {
    constructor() {

    }

    // Function to connect to the database.
    run() {
        inquirer
            .prompt(mainMenu)
            .then((response) => {
                console.log(response)
                const option = {
                    viewDepartments: Departments,
                }

                const search = new option[response.option]();

                return console.table(search.getDepartments())
                // LOOKUP TABLE
                // TAKE RESPONSE => RUN CLASS
            })
    }

    
}

module.exports = CLI;