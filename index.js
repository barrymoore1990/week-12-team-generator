const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
let team = [];

startProgram()



function manager() {
    return inquirer
    .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: 'What is the managers name?',
        },
        {
          type: 'input',
          name: 'managerId',
          message: 'What is their employee ID?',
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: 'What is their email?',
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: 'What is their office number?',
        },
    ])
}

function menu() {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Add one of the following staff members, or finish building your team:',
            choices: ['Engineer', 'Intern', 'Finish'],
        }
    ])
}



function complete() {

}




// push each new team engineer and intern too


async function startProgram() {
    
    let managerReturn = await manager();
    console.log(managerReturn.managerName);
    let menuReturn = await menu();
    console.log(menuReturn);
    
    
  


    team.push(new Manager(managerReturn))

    let htmlDoc = render(team)

    fs.writeFile(outputPath, htmlDoc, (err) => err && console.error(err));

    
}