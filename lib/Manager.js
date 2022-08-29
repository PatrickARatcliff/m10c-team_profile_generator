const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('Employee');

class Manager extends Employee {
    constructor (manager) {
        this.officeNumber = officeNumber;
        this.managerQuestion = [
            {
                type: 'input',
                message: "Enter the manager's office number:",
                name: 'office',
            },
        ];
        this.getRole = () => {
    
        };
    }
}

module.exports = Manager;
