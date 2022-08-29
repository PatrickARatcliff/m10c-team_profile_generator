const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('Employee');

class Engineer extends Employee {
    constructor(engineer) {
        this.gitHub = gitHub;
        this.engineerQuestion = [
            {
                type: 'input',
                message: "Enter the engineer's GitHub username:",
                name: 'username',
            },
        ];
        this.getGithub = () => {

        };
        this.getRole = () => {

        };
    };
}

module.exports = Engineer;