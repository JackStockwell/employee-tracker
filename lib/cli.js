// Imports

// const mysql = require('mysql2');
const inquirer = require('inquirer');
const { mainMenu, addDepartment, addRole, addEmployee, updateEmployee } = require('./questions');
const { EmployeeDB, Departments, Employees, Roles } = require('../db/employeeDatabase.js')

class CLI extends EmployeeDB{

    constructor(db) {
        super(db)
    }

    render(data) {
        console.log('\n')
        console.table(data)
        console.log('\n')
    }

    viewDepartments = async () => {
        const depList = await this.retrieveDepartments();
        this.render(depList);
        this.mainMenu();
    }

    viewRoles = async () => {
        const roleList = await this.retrieveRoles();
        this.render(roleList);
        this.mainMenu();
    }

    viewEmployees = async () => {
        const empList = await this.retrieveEmployees();
        this.render(empList);
        this.mainMenu();
    }

    promptAddDepartments() {

        inquirer
            .prompt(addDepartment)
            .then((response) => {
                this.addDepartment(response)
                .then((result) => {
                    console.log('\x1b[32m%s\x1b[0m', result)
                    this.mainMenu();
                })
            })
            .catch((err) => {
                throw new Error(err)
            })
    }

    promptAddRoles = async () => {
        // Retrieves a the list of departments.
        const list = await this.retrieveDepartments();
        
        // Dynamicall retrieves a list from the database to render as choice.
        // Loops through the list
        list.forEach((role) => {
            // Creates a choice object to be used by inquirer
            const choice = {value: role.id, name: role.name}
            // Pushed into the choices array to be presented.
            addRole[2].choices.push(choice)
        })
        // Inquirer prompt
        inquirer
            .prompt(addRole)
            .then((response) => {
                // Takes the values recieved by inquirer, creates an object
                const newRole = {
                    name: response.roleName,
                    salary: response.roleSalary,
                    id: response.roleDepartment
                }// Object is parsed into the addRole func, which inserts it into the database.
                this.addRole(newRole)
                    .then(
                        this.mainMenu()
                    );
            })
    }

    promptAddEmployees = async () => {
        
    }


    mainMenu() {
        inquirer
        .prompt(mainMenu)
        .then((response) => {
            console.log(response.option)

            switch(response.option) {
                case 'viewDepartments':
                    this.viewDepartments();
                    break;
                case 'viewRoles':
                    this.viewRoles();
                    break;
                case 'viewEmployees':
                    this.viewEmployees();
                    break;
                case 'addDepartment':
                    this.promptAddDepartments();
                    break;
                case 'addRole':
                    this.promptAddRoles();
                    break;
                case 'addEmployee':
                    this.promptAddEmployees();
                    break;
                
            }
        })
    }
 
}

module.exports = CLI;