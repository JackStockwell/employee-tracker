// Imports

const inquirer = require('inquirer');
const { mainMenu, addDepartment, addRole, addEmployee, updateEmployee, exit } = require('./questions');
const EmployeeDB = require('../db/employeeDatabase.js');


class CLI extends EmployeeDB {

    // Imports the database. Allowing continued access.
    constructor(db) {
        super(db)
    }

    // Renders parsed data into a table.
    render(data) {
        console.log('\n')
        console.table(data)
        console.log('\n')
    }

    // Retrieves the departments from the Database then renders them in table form.
    viewDepartments = async () => {
        const depList = await this.retrieveDepartments();
        this.render(depList);
        this.mainMenu();
    }

    // Retrieves the roles from the Database then renders them in table form.
    viewRoles = async () => {
        const roleList = await this.retrieveRoles();
        this.render(roleList);
        this.mainMenu();
    }

    // Retrieves the employees from the Database then renders them in table form.
    viewEmployees = async () => {
        const empList = await this.retrieveEmployees();
        this.render(empList);
        this.mainMenu();
    }

    // Used to print the result of the promise's then re-prompts the main menu.
    printBackToMain(result) {
        console.log('\x1b[32m%s\x1b[0m', result)
        this.mainMenu()
    }

    // Prompt handling for adding a new department
    promptAddDepartments() {
        // Inquirer prompt
        inquirer
            .prompt(addDepartment)
            .then((response) => {
                // Takes the department response name, inserts it into the database.
                this.addDepartment(response)
                // Logs the the result, 
                .then((result) => {
                    this.printBackToMain(result)
                })
            })
            // Error handle
            .catch((err) => {
                throw new Error(err)
            })
    }

    // Prompt handling for adding a new role
    promptAddRoles = async () => {

        // Retrieves a the list of departments.
        const departments = await this.retrieveDepartments();
        
        // Loops through the departments and creates an array to be used for the inquirer choices.
        const depChoicesArr = departments.map((department) => {
            return {value: department.id, name: department.name}
        })
        
        // The array is then used as the choices for inquirer
        addRole[2].choices = depChoicesArr

        // Inquirer prompt
        inquirer
            .prompt(addRole)
            // Takes the values recieved by inquirer.
            .then((response) => {
                // Object is parsed into the addRole func, which inserts it into the database.
                this.addRole(response)
                    .then((result) => {
                        this.printBackToMain(result);
                    });
            })
            .catch((err) => {
                throw new Error(err)
            })
    }

    // Prompt handling for adding a new employee.
    promptAddEmployees = async () => {

        // Retrieves the current roles from the Database.
        const roleList = await this.retrieveRoles();

        // Loops through the roles and creates an array to be used for the inquirer choices.
        const roleChoicesArr = roleList.map((role) => {
            return {value: role.id, name: role.title};
        });

        // Retrieves the current employees from the Database.
        const empList = await this.retrieveEmployees();
        // Loops through the employees and creates an array to be used for the inquirer choices.
        const empChoicesArr = empList.map((employee) => {
            return {value: employee.id, name:employee.Name};
        });
        
        // The arrays are then used as the choices for inquirer
        addEmployee[2].choices = roleChoicesArr;
        addEmployee[3].choices = empChoicesArr;

        // Prompts the addemployee questions, with the new array choices.
        inquirer
            .prompt(addEmployee)
            .then((response) => {
                this.addEmployee(response)
                .then((result) => {
                    this.printBackToMain(result);
                })
            })
            .catch((err) => {
                throw new Error(err)
            })
    }

    // Prompt handling for updating an employee.
    promptUpdateEmployee = async () => {

        // Retrieves the current employees from the Database.
        const empList = await this.retrieveEmployees();
        // Loops through the employees and creates an array to be used for the inquirer choices.
        const empChoicesArr = empList.map((employee) => {
            return {value: employee.id, name:employee.Name};
        });

        // Retrieves the current roles from the Database.
        const roleList = await this.retrieveRoles();
        console.log(roleList)
        // Loops through the roles and creates an array to be used for the inquirer choices.
        const roleChoicesArr = roleList.map((role) => {
            return {value: role.id, name: role.title};
        });

        // The arrays are then used as the choices for inquirer
        updateEmployee[0].choices = empChoicesArr;
        updateEmployee[1].choices = roleChoicesArr;
        

        // Prompts the updateEmployee questions, with the new array choices.
        inquirer
            .prompt(updateEmployee)
            .then((response) => {
                this.updateEmployeeRole(response)
                .then((result) => {
                    this.printBackToMain(result);
                })
            })
            .catch((err) => {
                throw new Error(err)
            })
    }

    // Prompt handling for quiting the application
    quit() {
        // Prompts exit questions
        inquirer
            .prompt(exit)
            .then((response) => {
                // If statement to check if true or not. Closes the process if true.
                if (response.exit) {
                    process.exit()
                }
                this.mainMenu()
            })
    }

    // Main menu prompt, run on upstart and referenced throughout.
    mainMenu() {
        inquirer
        .prompt(mainMenu)
        .then((response) => {

            // Switch case to take you to the next prompt.
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
                case 'updateRole':
                    this.promptUpdateEmployee();
                    break;
                case 'exit':
                    this.quit()
                    break;

            }
        })
        
        // Error handling
        .catch((err) => {
            throw new Error(err)
        })
    }
 
}

module.exports = CLI;