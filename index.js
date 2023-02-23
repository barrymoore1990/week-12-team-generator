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
async function startProgram() {
    
    team.push(new Manager("Barry", 1, "b@b.com", 1))

    let htmlDoc = render(team)

    await fs.writeFile(outputPath, htmlDoc, (err) => err && console.error(err));

}

// check last project - might explain inquirer?

// push each new team engineer and intern too
// Once complete, call render(team)

// fs writefile to the output directory / path
// write the render string to file
