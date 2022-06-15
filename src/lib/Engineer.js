const Employee = require ("./Employee");

//Add a class for the Engineer that inherits properties from the Employee Class
class Engineer extends Employee {
  constructor (name, id, email, githubUsername) {
    super (name, id, email);

    this.githubUsername = githubUsername;
    this.role = "Engineer";
  }

  getGithubUsername = () => {
    return this.githubUsername;
  };

  getRole = () => {
    return this.role;
  };
}


module.exports = Engineer;
