// Imports

// const mysql = require('mysql2');
const inquirer = require('inquirer');
const { mainMenu, addDepartment, addRole, addEmployee, updateEmployee } = require('./questions');
const { Departments, Employees } = require('../db/employeeDatabase.js')

class CLI {

    constructor(db) {
        this.db = db
    }

    mainMenu() {
        inquirer
        .prompt(mainMenu)
        .then((response) => {
            const option = {
                viewDepartments: Departments,
                viewEmployees: Employees
            }

            const data = new option[response.option](this.db);
            return data.retrieve();
        })
        .then((data) => console.table(data))

    }

    

    
}

module.exports = CLI;