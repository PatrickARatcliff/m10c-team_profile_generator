const inquirer = require('inquirer');
const fs = require('fs')

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        this.getName = () => {
            return this.name;
        };
        this.getId = () => {
            return this.name;
        };
        this.getEmail = () => {
            return this.name;
        };
        this.getRole = () => {
            return "employee";
        };
    }
}

module.exports = Employee;