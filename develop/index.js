// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
// Table of Contents, License, and Questions
const questions = [
	{
		type: 'input',
		message: "What is the title of the project?",
		name: 'title'
	},
	{
		type: 'input',
		message: "Describe the application:",
		name: 'description'
	},
	{
		type: 'input',
		message: "List the installation instructions:",
		name: 'installInstructions'
	},
	{
		type: 'input',
		message: "Give any important usage information:",
		name: 'usageInfo'
	},
	{
		type: 'list',
		message: "Select a license for the project",
		name: 'license',
		choices: [
			'MIT',
			'Apache',
			'none'
		]
	},
	{
		type: 'input',
		message: "Please provide any guidelines for contribution:",
		name: 'contributionGuidelines'
	},
	{
		type: 'input',
		message: "List all instructions for testing the application:",
		name: 'testInstructions'
	},
	{
		type: 'input',
		message: "List any other questions:",
		name: "questions"
	}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.appendFile(fileName, data, (err) =>
		err ? console.log(err) : console.log(`file write successful at ${fileName} with data ${data}`)
	);
}

// TODO: Create a function to initialize app
function init() {
	if (fs && inquirer) console.log("packages initialized");
	inquirer.prompt(questions)
	.then((response) => {
		console.log(response);
		writeToFile("readme.md", generateMarkdown(response));
	});
	// writeToFile("readme.md", "random");
}

// Function call to initialize app
init();
