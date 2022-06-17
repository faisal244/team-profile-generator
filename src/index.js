// Importing defined questions, functions, methods and utilities

// Importing dependancies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { writeToFile } = require("./utils/utils.js");
// const render = require("./utils/renderHtml.js");

// Importing Classes
const { name, id, email } = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTMLfile = require("./utils/renderHtml");

// Importing Questions
const {
	introQuestions,
	questions,
	loopingQuestion,
} = require("./questions.js");

// Checking to see if the directory and file foor the generated HTML page already exists
const OUTPUT_DIR = path.resolve(__dirname, "output");
// If not, create directory and file
const outputPath = path.join(OUTPUT_DIR, "team.html");

// initialize user interaction
const init = async () => {
	let inProgress = true;
	// Declaration of empty arrays to hold objects for each team member
	let engineers = [];
	let interns = [];
	let managers = [];

	const { teamName, name, id, email, officeNumber } = await inquirer.prompt(
		introQuestions
	);
	const manager = new Manager(teamName, name, id, email, officeNumber);
	managers.push(manager);

	while (inProgress) {
		const answers = await inquirer.prompt(questions);

		if (answers.role === "Engineer") {
			const engineer = new Engineer(
				answers.name,
				answers.id,
				answers.email,
				answers.github
			);
			engineers.push(engineer);
		} else if (answers.role === "Intern") {
			const intern = new Intern(
				answers.name,
				answers.id,
				answers.email,
				answers.school
			);
			interns.push(intern);
		}

		const addAnotherEmployee = await inquirer.prompt(loopingQuestion);
		if (addAnotherEmployee.nextStep === "No, my team is complete") {
			inProgress = false;
		}
	}

	generateHTMLfile(teamName, manager, engineers, interns);
	const html = generateHTMLfile(teamName, manager, engineers, interns);
	console.log(html);
	// const { teamName } = await inquirer.prompt(teamBuilderQuestions);
	// const { name, id, email, officeNumber } = await inquirer.prompt(
	// 	managerQuestion
	// );
	// const manager = new Manager({ name, id, email, officeNumber });
	// teamMembers.push(manager);
};

init();
