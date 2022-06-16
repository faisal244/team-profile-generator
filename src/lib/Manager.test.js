// Manager Test Cases
const Manager = require ("../lib/Manager");

//Mock Data
describe ("Manager", () => {
  const mockName = "Simon Hall";
  const mockId = "12345678";
  const mockEmail = "test@gmail.com";
  const mockRole = "Manager";
  const mockOfficeNumber = "07701214321";

  //Instantiation of a new instance of the Manager class
  const manager = new Manager (mockName, mockId, mockEmail, mockRole, mockOfficeNumber);

  // - should return an instance of a Manager
  it ("should be an instance of a Manager", () => {
    expect (manager).toBeInstanceOf (Manager);
  });

  // - should return the expected name
  it ("should return the expected name", () => {
    expect (manager.getName ()).toEqual (mockName);
  });

  // - should return the expected id
  it ("should return the expected id", () => {
    expect (manager.getId ()).toEqual (mockId);
  });

  // - should return the expected email
  it ("should return the expected email", () => {
    expect (manager.getEmail ()).toEqual (mockEmail);
  });

  // should return the expected office number
  it ("should return the expected office number", () => {
    expect (manager.getOfficeNumber ()).toEqual (mockOfficeNumber);
  });

  // should return the role of Manager
  it ("should return the role of Manager", () => {
    expect (manager.getRole ()).toEqual (mockRole);
  });

});
