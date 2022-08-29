const inquirer = require('inquirer');
const fs = require('fs')

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.employeeQuestions = [
        {
            type: 'input',
            message: "Enter name:",
            name: 'name',
        },
        {
            type: 'number',
            message: "Enter employee identification number:",
            name: 'id',
        },
        {
            type: 'input',
            message: "Enter email address:",
            name: 'email',
        },
    ];
    this.getName = () => {

    };
    this.getId = () => {

    };
    this.getEmail = () => {

    };
    this.getRole = () => {

    };
}