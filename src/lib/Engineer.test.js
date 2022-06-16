// Engineer Test Cases
const Engineer = require ("../lib/Engineer");

//Mock Data
describe ("Engineer", () => {
  const mockName = "Barry";
  const mockId = "12345678";
  const mockEmail = "test@gmail.com";
  const mockRole = "Engineer";
  const mockGithubUsername = "barrylikescoding123";

  //Instantiation of a new instance of the Engineer class
  const engineer = new Engineer (mockName, mockId, mockEmail, mockRole, mockGithubUsername);

  // - should return an instance of an Engineer
  it ("should be an instance of an Engineer", () => {
    expect (engineer).toBeInstanceOf (Engineer);
  });

  // - should return the expected name
  it ("should return the expected name", () => {
    expect (engineer.getName ()).toEqual (mockName);
  });

  // - should return the expected id
  it ("should return the expected id", () => {
    expect (engineer.getId ()).toEqual (mockId);
  });

  // - should return the expected email
  it ("should return the expected email", () => {
    expect (engineer.getEmail ()).toEqual (mockEmail);
  });

  // - should return the expected github username
  it ("should return the expected github username", () => {
    expect (engineer.getGithubUsername ()).toEqual (mockGithubUsername);
  });

  // - should return the role of Engineer
  it ("should return the role of the Engineer", () => {
    expect (engineer.getRole ()).toEqual (mockRole);
  });

});

