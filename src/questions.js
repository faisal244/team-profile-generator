const inquirer = require("inquirer");
const fs = require("fs");

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
		when: (answer) => answer.role === "Engineer", // only displays question if role is engineer
		validate: (answer) => (!answer ? "please enter a value" : true),
	},
	{
		type: "input",
		message: "Please enter school:",
		name: "school",
		when: (answer) => answer.role === "Intern", // only displays question if role is intern
		validate: (answer) => (!answer ? "please enter a value" : true),
	},
];

// .then((answers) => {
//   if (answers.role === "Manager") {
//     const manager = new Manager(
// answers.name,
// answers.id,
// answers.email,
// answers.officeNumber
//     );
//     team.push(manager);
//     loopingQuestion();
//   } else if (answers.role === "Engineer") {
//     const engineer = new Engineer(
//       answers.name,
//       answers.id,
//       answers.email,
//       answers.github
//     );
//     team.push(engineer);
//     loopingQuestion();
//   } else if (answers.role === "Intern") {
//     const intern = new Intern(
//       answers.name,
//       answers.id,
//       answers.email,
//       answers.school
//     );
//     team.push(intern);
//     loopingQuestion();
//   }
// });

const loopingQuestion = [
	{
		name: "nextStep",
		type: "list",
		message: "Would you like to add another team member?",
		choices: ["Yes", "No, my team is complete"],
		default: "true",
	},
];

// .then((answer) => {
// 	if (answer.nextStep) {
// 		questions(); // runs employee question loop if true
// 	} else {
// 		const html = render(team);
// 		fs.writeFileSync("./output/team.html", html);
// 		console.log("Your team profiles have been generated");
// 	}
// });

module.exports = { introQuestions, questions, loopingQuestion };
