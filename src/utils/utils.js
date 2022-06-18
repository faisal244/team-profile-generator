// Importing dependancies
const fs = require("fs");
const path = require("path");

// write to file
const writeToFile = (filePath, data) => {
	try {
		fs.writeFileSync(filePath, data);
		console.log("Success! Your team profiles have been generated");
	} catch (error) {
		console.log(error.message);
	}
};

// exporting of the above utility modules for use in other files
module.exports = {
	writeToFile,
};
