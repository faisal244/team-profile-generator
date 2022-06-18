// Importing dependancies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { writeToFile } = require("./utils/utils.js");
const generateHTMLfile = require("./utils/renderHtml.js");

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
const OUTPUT_DIR = path.resolve(__dirname, "./src/dist");
// If not, create directory and file
const outputPath = path.join(OUTPUT_DIR, "team.html");

// initialize function -prepares the application for user interaction and inputs
const init = async () => {
	let inProgress = true;

	// Declaration of empty arrays to hold objects for each team member
	let engineers = [];
	let interns = [];
	let managers = [];

	// Initial question prompts - requesting team name and manager information from the user
	const { teamName, name, id, email, officeNumber } = await inquirer.prompt(
		introQuestions
	);
	// Instantiates a new instance of the Manager class and populates information based on the users inputs
	const manager = new Manager(teamName, name, id, email, officeNumber);
	// Pushes team member object to the managers array
	managers.push(manager);

	while (inProgress) {
		const answers = await inquirer.prompt(questions);

		// Instantiates a new instance of the Engineer class and populates information based on the users inputs
		if (answers.role === "Engineer") {
			const engineer = new Engineer(
				answers.name,
				answers.id,
				answers.email,
				answers.github
			);
			// Pushes team member object to the engineers array
			engineers.push(engineer);

			// Instantiates a new instance of the Engineer class and populates information based on the users inputs
		} else if (answers.role === "Intern") {
			const intern = new Intern(
				answers.name,
				answers.id,
				answers.email,
				answers.school
			);
			// Pushes team member object to the engineers array
			interns.push(intern);
		}

		// Asks the user if they would like to add another employee, which restarts the question loop, or if they are finished inputting team member information
		const addAnotherEmployee = await inquirer.prompt(loopingQuestion);
		if (addAnotherEmployee.nextStep === "No, my team is complete") {
			inProgress = false;
		}
	}

	// Function to generate html which includes all of the users inputs and writes to a file
	generateHTMLfile(teamName, manager, engineers, interns);
	const html = generateHTMLfile(teamName, manager, engineers, interns);
	writeToFile("./src/dist/team.html", html);
};

init();
