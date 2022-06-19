// Importing dependancies
const inquirer = require("inquirer");
const fs = require("fs");

// Initial Manager and team name Questions
const introQuestions = [
	{
		type: "input",
		message: "Please enter your team name",
		name: "teamName",
		validate: (answer) => (!answer ? "please enter a name" : true),
	},

	{
		type: "input",
		message: "Please enter managers name:",
		name: "name",
		filter: (answer) => answer.toUpperCase(),
		validate: (answer) => (!answer ? "please enter a name" : true),
	},
	{
		type: "input",
		message: "Please enter id:",
		name: "id",
		validate: (answer) =>
			isNaN(answer) ? "Your ID must be only numbers - please try again" : true,
	},
	{
		type: "input",
		message: "Please enter email:",
		name: "email",
		validate: (answer) => (!answer ? "please enter an email" : true),
	},
	{
		type: "input",
		message: "Please enter office number:",
		name: "officeNumber",
		validate: (answer) => (isNaN(answer) ? "please enter a number" : true),
	},
];

// Main questions aimed at Engineer/Intern team members, with validation steps for each question
const questions = [
	{
		type: "list",
		message: "Please select role:",
		name: "role",
		choices: ["Engineer", "Intern"],
	},
	{
		type: "input",
		message: "Please enter name:",
		name: "name",
		filter: (answer) => answer.toUpperCase(),
		validate: (answer) => (!answer ? "please enter a name" : true),
	},
	{
		type: "input",
		message: "Please enter id:",
		name: "id",
		validate: (answer) =>
			isNaN(answer) ? "Your ID must be only numbers - please try again" : true,
	},
	{
		type: "input",
		message: "Please enter email:",
		name: "email",
		validate: (answer) => (!answer ? "please enter an email" : true),
	},
	{
		type: "input",
		message: "Please enter github username:",
		name: "github",
		// question only displayed if role is engineer
		when: (answer) => answer.role === "Engineer",
		validate: (answer) => (!answer ? "please enter a value" : true),
	},
	{
		type: "input",
		message: "Please enter school:",
		name: "school",
		// question only displayed if role is intern
		when: (answer) => answer.role === "Intern",
		validate: (answer) => (!answer ? "please enter a value" : true),
	},
];

//  Question that either starts the main question loop again for adding another team member or ends application and generates file
const loopingQuestion = [
	{
		name: "nextStep",
		type: "list",
		message: "Would you like to add another team member?",
		choices: ["Yes", "No, my team is complete"],
		default: "true",
	},
];

module.exports = { introQuestions, questions, loopingQuestion };
