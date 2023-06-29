// Imports

// const mysql = require('mysql2');
const inquirer = require('inquirer');
const { mainMenu, addDepartment, addRole, addEmployee, updateEmployee } = require('./questions');
const { EmployeeDB, Departments, Employees, Roles } = require('../db/employeeDatabase.js')

class CLI extends EmployeeDB{

    constructor(db) {
        super(db)
    }

    promptAddDepartments() {

        inquirer
            .prompt(addDepartment)
            .then((response) => {
                this.newDepartment(response)
                .then((data) => {
                    console.ta(data)
                })
            })

    }

    promptAddRoles() {
        console.log("Roles")
    }


    mainMenu() {
        inquirer
        .prompt(mainMenu)
        .then((response) => {
            console.log(response.option)

            switch(response.option) {
                case 'addDepartment':
                    this.promptAddDepartments()
                    break;
                case 'addRole':
                    this.promptAddRoles()
                    break;
                
            }
        })
    }
 
}

module.exports = CLI;