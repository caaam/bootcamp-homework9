// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
	"What is the title of the project?",
    "Describe the application:",
    "List the installation instructions:",
    "Give any important usage information:",
    "Please provide any guidelines for contribution:",
    "List all instructions for testing the application:"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.appendFile(fileName, data, (err) =>
		err ? console.log(err) : console.log(`file write successful at ${fileName} with data ${data}`)
	);
}

// TODO: Create a function to initialize app
function init() {
	console.log("is this thing on?");
	if (fs && inquirer) console.log("packages initialized");
	writeToFile("readme.txt", "testing");
}

// Function call to initialize app
init();
