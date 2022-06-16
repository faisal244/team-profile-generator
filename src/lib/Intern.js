const Employee = require ("./Employee");

class Intern extends Employee {
  constructor (name, id, email, role, school) {
    super (name, id, email);
    this.school = school;
    this.role = "Intern";
  }

  //Function to get school
  getSchool = () => {
    return this.school;
  };

//Function to get the employees role
  getRole = () => {
    return this.role;
  };

};


module.exports = Intern;
