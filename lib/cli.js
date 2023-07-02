// Imports

const inquirer = require('inquirer');
const { mainMenu, addDepartment, addRole, addEmployee, updateEmployee, deleteData, deleteDepartment, deleteRole, deleteEmployee, exit } = require('./questions');
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

    // Retrieves the managers from the Database then renders them in table form.
    viewManagers = async () => {
        const mangList = await this.retrieveManagers();
        this.render(mangList);
        this.mainMenu();
    }

    // Gets the deparments, returns an array.
    departmentChoices = async () => {
        // Retrieves a the list of departments.
        const departments = await this.retrieveDepartments();

        // Loops through the departments and creates an array to be used for the inquirer choices.
        const depChoicesArr = await departments.map((department) => {
            return {value: department.id, name: department.name}
        });
        console.log(depChoicesArr)
        return depChoicesArr;
    }

    // Gets the roles, returns an array.
    roleChoices = async () => {
        // Retrieves the current roles from the Database.
        const roleList = await this.retrieveRoles();

        // Loops through the roles and creates an array to be used for the inquirer choices.
        const roleChoicesArr = await roleList.map((role) => {
            return {value: role.id, name: role.title};
        });

        return roleChoicesArr;
    }

    // Gets the employees, returns an array.
    employeeChoices = async () => {
        // Retrieves the current employees from the Database.
        const empList = await this.retrieveEmployees();
        // Loops through the employees and creates an array to be used for the inquirer choices.
        const empChoicesArr = await empList.map((employee) => {
            return {value: employee.id, name:employee.Name};
        });

        return empChoicesArr;
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

        // Get's the latest departments as an array.
        const depChoicesArr = await this.departmentChoices()
        
        // The array is then used as the choices for inquirer
        addRole[2].choices = depChoicesArr

        // Inquirer prompt
        inquirer
            .prompt(addRole)
            // Takes the values recieved by inquirer.
            .then((response) => {
                // Object is parsed into the addRole func, which inserts it into the database.
                console.log(response)
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

        // Retrieves the current roles from the Database as an array.
        const roleChoicesArr = await this.roleChoices();
        // Retrieves the current employees from the Database as an array.
        const empChoicesArr = await this.employeeChoices();

        // The arrays are then used as the choices for inquirer
        addEmployee[2].choices = roleChoicesArr;
        addEmployee[3].choices = empChoicesArr;

        // Prompts the addemployee questions, with the new array choices.
        inquirer
            .prompt(addEmployee)
            .then((response) => {
                this.updateToManager(response)
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

        // Retrieves the current employees from the Database as an array.
        const empChoicesArr = await this.employeeChoices();
        // Retrieves the current roles from the Database as an array.
        const roleChoicesArr = await this.roleChoices();

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

    promptDeleteType = async (table, question) => {

        // Empty array
        let choicesArr = []

        // Switch case to populate the array with correct choices depending on what the user selects. Turns the questions into the corresponding questions.
        switch(table) {
            case 'department':
                choicesArr = await this.departmentChoices();
                question = deleteDepartment;           
                break;
            case 'role':
                choicesArr = await this.roleChoices();
                question = deleteRole;
                break;
            case 'employee':
                choicesArr = await this.employeeChoices();
                question = deleteEmployee;
                break;
        }
        
        // The array is then used as the choices for inquirer, it is used on the parsed questions from the first switch case.
        question[0].choices = choicesArr;

        // Inquirer prompt
        inquirer
        .prompt(question)
        .then((response) => {
            // Checks to see if the exit is true or not, will return to main if false.
            if (response.exit) {
                // Parses the table used, and the response into the delete func.
                this.delete(table, response)
                .then((result) => {
                    this.printBackToMain(result)  
                })
            } else {
                return this.mainMenu();
            }
        })
    }

    // Prompts what the user would like to delete first.
    promptDelete = async () => {
        inquirer
            .prompt(deleteData)
            .then((response) => {
                this.promptDeleteType(response.deleteType)
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
                case 'viewManagers':
                    this.viewManagers();
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
                case 'deleteData':
                    this.promptDelete();
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

// Export for index.js
module.exports = CLI;