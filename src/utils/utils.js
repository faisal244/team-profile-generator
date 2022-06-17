// write to file
const writeToFile = (filePath, data) => {
	try {
		fs.writeFileSync(filePath, data);
		console.log("SUCCESS");
	} catch (error) {
		console.log(error.message);
	}
};

// exporting of the above utility modules for use in other files
module.exports = {
	writeToFile,
};
