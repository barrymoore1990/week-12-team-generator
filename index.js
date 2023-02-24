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
let menuReturn = ""

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

function engineer() {
    return inquirer
    .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: 'What is the engineers name?',
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineers ID?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers email?',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is the engineers Github username?',
        },
    ])
}

function intern() {
    return inquirer
    .prompt([
        {
          type: 'input',
          name: 'internName',
          message: 'What is the interns name?',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the interns ID?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns email?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the interns school?',
        },
    ])
}






// push each new team engineer and intern too


async function startProgram() {
    
    let managerReturn = await manager();
    menuReturn = await menu();
    console.log(menuReturn.menu);
    team.push(new Manager(managerReturn.managerName, managerReturn.managerId, managerReturn.managerEmail, managerReturn.managerOfficeNumber))

    if (menuReturn.menu === "Engineer") {
        let engineerReturn = await engineer();
        console.log(engineerReturn);
        team.push(new Engineer(engineerReturn.engineerName, engineerReturn.engineerId, engineerReturn.engineerEmail, engineerReturn.githubUsername))
        menuReturn = await menu();
    } 
    if (menuReturn.menu === "Intern") {
        let internReturn = await intern();
        console.log(internReturn);
        team.push(new Intern(internReturn.internName, internReturn.internId, internReturn.internEmail, internReturn.internSchool))
        menuReturn = await menu();
    }

    
    
    
  



    let htmlDoc = render(team)

    fs.writeFile(outputPath, htmlDoc, (err) => err && console.error(err));

    
}