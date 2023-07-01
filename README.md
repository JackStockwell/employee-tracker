# Employee Tracker

![Github top language](https://img.shields.io/github/languages/top/JackStockwell/employee-tracker)
[![Link to node Js version download](https://img.shields.io/badge/node-v16.18.0-green)](https://nodejs.org/download/release/latest-v16.x/) 
[![Inquirer Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FJackStockwell%2Femployee-tracker%2Fmain%2Fpackage.json&query=%24.dependencies.inquirer&label=inquirer)](https://www.npmjs.com/package/inquirer/v/8.2.4)
[![My SQL](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FJackStockwell%2Femployee-tracker%2Fmain%2Fpackage.json&query=%24.dependencies.mysql&label=mySQL)
](https://www.npmjs.com/package/mysql)
[![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FJackStockwell%2Femployee-tracker%2Fmain%2Fpackage.json&query=%24.dependencies.dotenv&label=dotenv)](https://www.npmjs.com/package/dotenv)

## Description

Track your employees across your business!

The Employee tracker is a an application built to keep tracker of your employees, their roles within the company, salary and more!

It is built using Inquirer & MySQL NPM modules as well as using a MySQL database, this is where data is saved so it is quick and easy to access as well as being secure. The application allows continous addition too, with the ability to add new roles, departments and employees.

A reason for making this project is this will be my first time using mySQL in a project, which greatly increases my ability to store and manipulate content to what I require. It also continutes my continued use of Classes.

I learnt a great deal on mySQL and to dynamically create inquirer prompt choices. I did struggle with retrieving employees and having the manager's name appear in the table, this was solved by creating an alias of the employees table then joining the alias to the original and referencing that way. 


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation 

I would recommend watching my full guide [here]() for a more streamlined experience. If not, see below.

### Written Tutorial

You will require [node.js v16.18.0](https://nodejs.org/download/release/latest-v16.x/) in order for this to work.

You will also need to install mySQL. Installation guide from the official [website](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/windows-install-archive.html)

Once done, continue below.

To run the application, you will need to first clone it to your local client, once cloned open the code is VS Code and open your terminal. 

### NPM

Place the following commands into you CLI.

```sh
npm init -y
```

```sh
npm i inquirer@8.2.4
```

```sh
npm i mysql2
```

```sh
npm i dotenv
```

You now have the necessary npms needed to run the application.

You will now need to set-up your .env file. There is an example file in the directory. Enter the neccessarydetails in order to use mySQL.
 
```dosini
# .env, repo example
DB_NAME='<insert db name>'
DB_USER=''
DB_PASSWORD=''
```

```dosini
# .env, private (example)
DB_NAME='employee'
DB_USER='root'
DB_PASSWORD='<your password>'
```

Once you have configured your .env file, you are now ready to start the application.

### mySQL

You will first need to seed the application with mySQL.

```sh
mysql -u root -p
```

After entering the command, you will be prompted with placing your password, type your password then follow the bellow.


```sh
source db/schema.sql
```

This will initialise the database with the tables needed.

```sh
source db/seeds.sql
```

This will populate the sql database with a placeholder employee.

### Running the application

The below will run the application!

```sh
npm run start
```

You're free to navigate the menus, call upon the above to start the application anytime.

## License



## Credits

[Stack overflow on creating table alias](https://stackoverflow.com/questions/3263935/multiple-alias-names-for-a-table) - Used to create an alias of employee table to join it to itself.

