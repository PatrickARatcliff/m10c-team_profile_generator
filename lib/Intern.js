const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email)

        this.school = school;

        this.getSchool = () => {
            return this.school;
        };
        this.getRole = () => {
            return "intern"
        };
    }
}

internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Enter name:",
            name: 'name',
            validate: nameInput => { nameInput ? true : console.log("Enter a name"), false }
        },
        {
            type: 'number',
            message: "Enter employee identification number:",
            name: 'id',
            validate: idInput => { idInput ? true : console.log("Enter an id number"), false || typeof idInput === 'number' ? true : console.log("id must be a number"), false }
        },
        {
            type: 'input',
            message: "Enter email address:",
            name: 'email',
            validate: emailInput => { emailInput ? true : console.log("Enter an email address"), false || emailInput === 'anystring@anystring.anystring' ? true : console.log("Enter a valid email address"), false }
        },
        {
            type: 'input',
            message: "Enter the intern's school:",
            name: 'school',
            validate: schoolInput => { schoolInput ? true : console.log("Enter a school name"), false }
        },
    ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.office);
            //push new intern to team array
            team.push(intern);
        })
};

module.exports = Intern;
module.exports = internQuestions();
