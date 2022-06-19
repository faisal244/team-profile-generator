// Intern Test Cases
const Intern = require("../lib/Intern");

// Mock Data
describe("Intern", () => {
	const mockName = "Garfunkle Oates";
	const mockId = "12345678";
	const mockEmail = "test@gmail.com";
	const mockSchool = "Birmingham";
	const mockRole = "Intern";

	//Instantiation of a new instance of the Intern class
	const intern = new Intern(mockName, mockId, mockEmail, mockSchool, mockRole);

	// - should return an instance of an Intern
	it("should be an instance of an Intern", () => {
		expect(intern).toBeInstanceOf(Intern);
	});

	// - should return the expected name
	it("should return the expected name", () => {
		expect(intern.getName()).toEqual(mockName);
	});

	// - should return the expected id
	it("should return the expected id", () => {
		expect(intern.getId()).toEqual(mockId);
	});

	// - should return the expected email
	it("should return the expected email", () => {
		expect(intern.getEmail()).toEqual(mockEmail);
	});

	// - should return the role of Intern
	it("should return the role of Intern", () => {
		expect(intern.getRole()).toEqual(mockRole);
	});

	// - should return the expected school
	it("should return the interns school", () => {
		expect(intern.getSchool()).toEqual(mockSchool);
	});
});
