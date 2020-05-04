//inquirer for ask user questions and store answers
const inquirer = require("inquirer");

//get the generatemarkdown function from generatemarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");

//file system to create and write file
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "Your project title?",
        name: "projectName"
    }, {
        type: "input",
        message: "A short description of your project.",
        name: "projectDescription"
    }, {
        type: "input",
        message: "How to install it?",
        name: "projectInstallation"
    }, {
        type: "input",
        message: "What open source packages used for this project?",
        name: "credit"
    }, {
        type: "input",
        message: "What are the key features?",
        name: "features"
    }, {
        type: "input",
        message: "Project repository link.",
        name: "githubLink"
    }, {
        type: "input",
        message: "Your GitHub user name?",
        name: "githubID"
    }, {
        type: "list",
        message: "Chose your license.",
        name: "license",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
    }, {
        type: "input",
        message: "Name of this file?",
        name: "fileName"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) throw error;
        console.log("Complete");
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then(response => writeToFile(response.fileName + ".md", generateMarkdown(response)));
}

init();