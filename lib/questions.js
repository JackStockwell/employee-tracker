// Inquirer Questions.

// Validation

const validNumber = (answer) => {
    if (answer === !NaN) {
        return "Please enter numerical values only!"
    }

    return true;
}


// Main Menu questions
const mainMenu = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: 
        [
            { value: 'viewDepartments', name: 'View all Departments.'},
            { value: 'viewRoles', name: 'View all Roles.' },
            { value: 'viewEmployees', name:'View all Employees.' },
            { value: 'viewManagers', name:'View all Managers'},
            { value: 'addDepartment', name:'Add a department.' },
            { value: 'addRole', name: 'Add a role.'},
            { value: 'addEmployee', name:'Add an employee.' },
            { value: 'updateRole', name:'Update an employees role.'},
            { value: 'deleteData', name: 'Remove a department/role/employee'},
            { value: 'exit', name: 'Quit'}
        ]
    }
]

// New Department questions
const addDepartment = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'New department name?'
    }
]

// Add Role questions
const addRole = [
    {
        type: 'input',
        name: 'roleName',
        message: 'New role name?'
    },
    {
        type: 'input',
        name: 'roleSalary',
        message: 'The role\'s salary? ',
        validate: validNumber
    },
    {
        type: 'list',
        name: 'roleDepartment',
        message: 'What department do they belong too?',
        // Dynamically created choices.
        choices: [

        ]
    }
]

// Add Employee questions
const addEmployee = [
    {
        type: 'input',
        name: 'empNameFirst',
        message: 'Employee\'s first name?'
    },
    {
        type: 'input',
        name: 'empNameLast',
        message: 'Employee\'s last name?'
    },
    {
        type: 'list',
        name: 'empRole',
        message: 'Employee\'s role?',
        // Dynamically created choices.
        choices: [

        ]
    },
    {
        type: 'list',
        name: 'empManager',
        message: 'Who do they report to? (Manager)',
        // Dynamically created choices.
        choices: [

        ]
    }
]

// Update Employee questions
const updateEmployee = [
    {
        type: 'list',
        name: 'updatedEmployee',
        message: 'Who do you want to update?',
        // Dynamically created choices.
        choices: [

        ]
    },
    {
        type: 'list',
        name: 'newRole',
        message: 'What \'s their new role?',
        // Dynamically created choices.
        choices: [

        ]
    }
]

const deleteData = [
    {
        type: 'list',
        name: 'deleteType',
        message: 'What would you like to remove from the Database?',
        choices: [
            { value: 'department', name:'Department' },
            { value: 'role', name:'Role' },
            { value: 'employee', name:'Employee' }
        ]
    }
]

const deleteDepartment = [
    {
        type: 'list',
        name: 'id',
        message: 'What department would you like to delete?',
        choices: [

        ]
    },
    {
        type: 'confirm',
        name: 'exit',
        message: 'Are you sure you want to delete?'
    }

]

const deleteRole = [
    {
        type: 'list',
        name: 'id',
        message: 'What role would you like to delete?',
        choices: [
            
        ]
    },
    {
        type: 'confirm',
        name: 'exit',
        message: 'Are you sure you want to delete?'
    }

]

const deleteEmployee = [
    {
        type: 'list',
        name: 'id',
        message: 'Who would you like to remove?',
        choices: [
            
        ]
    },
    {
        type: 'confirm',
        name: 'exit',
        message: 'Are you sure you want to delete?'
    }

]

// Exit confirmation.
const exit = [
    {
        type: 'confirm',
        name: 'exit',
        message: 'Are you sure you want to quit?'
    }
]

// Exports for CLI.
module.exports = questions = { 
    mainMenu,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee,
    deleteData,
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    exit
}