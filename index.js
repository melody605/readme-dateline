// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const questions = [

    {type: "input",
    name: "title",
    message: "What is your project name?",
    },

    {type: "input",
        name: "description",
        message: "Give a brief description of your project. Why did you build it? What problem does it solve?",

    },

    {
        type:"input",
        name: "installation",
        message:"What commmands should we run for dependencies",
        default: "npm i",

    },

    {
        type:"list",
        name:"license",
        message: "What kind of license does your project use",
        choices:["MIT"]
    },
{ 
        type:"input",
        name: "contributing",
        message:"How does a uer contribute to this project",
},

{
        type:"input",
        message:"What is your email address",
        name: "email",
    },

    {
        type: "list",
        name: "attachment",
        message: "Do you have an attachment?",
        choices: ['Yes', 'No']
    },
    
    {
        type: 'input',
        name: 'attachmentName',
        message: 'Please add file to videos directory and provide the name of the file.',
        when: (answers) => answers.attachment === 'Yes' 
    }
    
];

const generateReadme = function (answers) {
    return `${generateMarkdown(answers)}`

}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writefile("Generated -READ.md")
    err ? console.error(err) : console.log('Success!')
    ;
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
