// Employee Test Cases
const Employee = require("../lib/Employee");

// Mock Data
describe("Employee", () => {
	const mockName = "Bob Loblaw";
	const mockId = "12345678";
	const mockEmail = "test@gmail.com";

	//Instantiation of a new instance of the Employee class
	const employee = new Employee(mockName, mockId, mockEmail);

	// - should return an instance of an Employee
	it("should be an instance of an Employee", () => {
		expect(employee).toBeInstanceOf(Employee);
	});

	// - should return the expected name
	it("should return the expected name", () => {
		expect(employee.getName()).toEqual(mockName);
	});

	// - should return the expected id
	it("should return the expected id", () => {
		expect(employee.getId()).toEqual(mockId);
	});

	// - should return the expected email
	it("should return the expected email", () => {
		expect(employee.getEmail()).toEqual(mockEmail);
	});
});
