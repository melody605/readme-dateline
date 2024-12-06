// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project name?",
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project. Why did you build it? What problem does it solve?",
    },
    {
        type: "input",
        name: "installation",
        message: "What commands should we run for dependencies?",
        default: "npm i",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license does your project use?",
        choices: ["MIT", "Eclipse Public License 2.0", "Mozilla Public License 2.0"],
    },
    {
        type: "input",
        name: "contributing",
        message: "How does a user contribute to this project?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// Function to generate the README content
const generateReadme = function (answers) {
    return `${generateMarkdown(answers)}`;
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {     
    inquirer.prompt(questions).then((answers) => {
        const readmePageContent = generateReadme(answers);
        writeToFile("generatedREADME.md", readmePageContent);
    });
}

// Function call to initialize app
init();
