const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('Employee');

class Intern extends Employee {
    constructor(intern) {
        this.school = school;
        this.internQuestion = [
            {
                type: 'input',
                message: "Enter the intern's school:",
                name: 'school',
            },
        ];
        this.getSchool = () => {

        };
        this.getRole = () => {

        };
    }
}