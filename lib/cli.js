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
                this.addDepartment(response)
                .then((data) => {
                    console.table(data)
                })
            })

    }

    promptAddRoles = async () => {

        const list = await this.retrieveDepartment();

        list.forEach((role) => {
            const choice = {value: role.id, name: role.name}
            addRole[2].choices.push(choice)
        })

        inquirer
            .prompt(addRole)
            .then((response) => {
                const newRole = {
                    name: response.roleName,
                    salary: response.roleSalary,
                    id: response.roleDepartment
                }
                this.addRole(newRole)
                    .then((roles)  => {
                        console.log('\n', roles, '\n')
                        this.mainMenu()
                })
            })
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
                case 'addEmployee':
                    this.promptAddRoles()
                    break;
                
            }
        })
    }
 
}

module.exports = CLI;