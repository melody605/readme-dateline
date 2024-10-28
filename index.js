// TODO: Include packages needed for this application

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
    }
{ type:"input",
    name: "contributing",
    message:"How does a uer contribute to this project",
},
{type:"input",
    message:"What is your email address",
    name: "email",
},
];

}

}



    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writefile("Generated -READ.md")
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
