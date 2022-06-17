const Employee = require("./Employee");

class Manager extends Employee {
	constructor(teamName, name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
		this.role = "Manager";
		this.teamName = teamName;
	}

	getOfficeNumber = () => {
		return this.officeNumber;
	};

	getRole = () => {
		return this.role;
	};

	getTeamName = () => {
		return this.teamName;
	};
}

module.exports = Manager;
