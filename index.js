const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('Manager');
const Engineer = require('Engineer');
const Intern = require('Intern');

//Create a function to write html file
function writeToFile(fileName) {
    inquirer.prompt(questions)
       
    .then((data) => {
            fs.writeFile(fileName, genMD(data), (err) =>

                err ? console.error(err) : console.log('An HTML file has been created for your project!')
            )
        }
        );
};
//Create a function to initialize app
function init() {
    writeToFile('index.html');
};
//Function call to initialize app
init();