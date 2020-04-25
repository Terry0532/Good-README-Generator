const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
        message: "GitHub profile link.",
        name: "githubLink"
    }, {
        type: "list",
        message: "Chose your license.",
        name: "license",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
    }
];

function writeToFile(fileName, data) {
}

function init() {
    inquirer
        .prompt(questions)
        .then(response => console.log(generateMarkdown(response)));
}

init();