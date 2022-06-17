// Importing defined questions, functions, methods and utilities

// Importing dependancies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Importing Classes
// const render = require("./src/utils/renderHtml.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Importing Questions
const {
	introQuestions,
	questions,
	loopingQuestion,
} = require("./questions.js");

const { writeToFile } = require("./utils/utils.js");

// Checking to see if the directory and file foor the generated HTML page already exists
const OUTPUT_DIR = path.resolve(__dirname, "output");
// If not, create directory and file
const outputPath = path.join(OUTPUT_DIR, "team.html");

// initialize user interaction
const init = async () => {
	let inProgress = true;
	let team = [];
	const { teamName } = await inquirer.prompt(introQuestions);
	// const questions = introQuestions;
	// prompt the user with Initial manager questions

	// await inquirer.prompt(questions);
	// Declaration of an empty array to hold objects for each team member

	// const { teamName } = await inquirer.prompt(teamBuilderQuestions);
	// const { name, id, email, officeNumber } = await inquirer.prompt(
	// 	managerQuestion
	// );
	// const manager = new Manager({ name, id, email, officeNumber });
	// teamMembers.push(manager);
};

init();
