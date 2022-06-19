// Function to generate Manager Team member profile cards
const generateManagerCard = (manager) => {
	return `<div class="card" style="width: 18rem">
<img
	src="/src/dist/assets/img/engineer-ninja-image.png"
	class="card-img-top"
	alt="Suraj Verma"
/>
<div class="card-body">
	<h5 class="card-title">${manager.getName()}</h5>
	<p class="card-text">ID: ${manager.getId()}</p>
	<p class="card-text">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>  </p>
	<p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
</div>
</div>`;
};

// Function to generate Engineer team member profile cards
const generateEngineerCard = (engineer) => {
	return `<div class="card" style="width: 18rem">
<img
	src="/src/dist/assets/img/engineer-ninja-image.png"
	class="card-img-top"
	alt="engineering-ninja"
/>
<div class="card-body">
	<h5 class="card-title">${engineer.getName()}</h5>
	<p class="card-text">ID: ${engineer.getId()}</p>
	<p class="card-text">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>  </p>
	<p class="card-text">Github Username: <a target="_blank" href="https://www.github.com/${engineer.getGithubUsername()}">${engineer.getGithubUsername()}</a></p>
</div>
</div>`;
};

// Function to generate Intern team member profile cards
const generateInternCard = (intern) => {
	return `<div class="card" style="width: 18rem">
<img
	src="/src/dist/assets/img/engineer-ninja-image.png"
	class="card-img-top"
	alt="engineering-ninja"
/>
<div class="card-body">
	<h5 class="card-title">${intern.getName()}</h5>
	<p class="card-text">ID: ${intern.getId()}</p>
	<p class="card-text">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
	<p class="card-text">School: ${intern.getSchool()}</p>
</div>
</div>`;
};

// Function that takes in the users inputs as parameters, then dynamically generates html for the team profiles page
const generateHTMLfile = (teamName, manager, engineers, interns) => {
	const managerCard = generateManagerCard(manager);
	const engineerCards = engineers.map(generateEngineerCard); //takes each engineer team member object from the engineers array and generates a profile card in the engineer accordian section
	const internCards = interns.map(generateInternCard); //takes each intern team member object from the intern array and generates a profile card in the intern accordian section

	return `<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8" />
	<meta
	name="viewport"
	content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
	/>
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />

	<!--Google Fonts-->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
	href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Poppins:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap"
	rel="stylesheet"
	/>

	<!--  Bootstrap 5 import-->
	<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
	crossorigin="anonymous"
	/>

	<!--  Author Stylesheet-->
	<link rel="stylesheet" href="./assets/css/styles.css" />

	<title>Team Profile Generator | Home</title>
	</head>

	<body>
		<div class="hero-container d-flex flex-column">
		<!--      <img src="/src/dist/assets/img/jumbotron-5.png" class="img-thumbnail" style="width:50px, height:50px" alt="">-->
			<div class="jumbotron jumbotron-fluid">
				<div class="container">
					<h1 class="display-4 text-white">${teamName}</h1>
						<p class="lead text-white">
							Thank you for using this application - Below are your generated profile
							summaries for all your team members.
						</p>
				</div>
			</div>
		</div>

	<!--    Manager Section Begins Here-->
	<div class="accordion" id="accordionExample">
	<div class="accordion-item">
	<h2 class="accordion-header" id="headingOne">
		<button
			class="accordion-button"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#collapseOne"
			aria-expanded="true"
			aria-controls="collapseOne"
		>
			Manager
		</button>
	</h2>

	<div
		id="collapseOne"
		class="accordion-collapse collapse show"
		aria-labelledby="headingOne"
		data-bs-parent="#accordionExample"
	>
		<!--          Manager Container Styling Classes -->
		<div
			class="accordion-body d-flex flex-row flex-wrap justify-content-center"
		>
			<!--            Manager Card 1-->
				${managerCard}
		</div>
	</div>
	</div>

	<!--      Engineer Section Begins Here-->
	<div class="accordion-item">
	<h2 class="accordion-header" id="headingTwo">
		<button
			class="accordion-button collapsed"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#collapseTwo"
			aria-expanded="false"
			aria-controls="collapseTwo"
		>
			Engineers
		</button>
	</h2>

	<div
		id="collapseTwo"
		class="accordion-collapse collapse"
		aria-labelledby="headingTwo"
		data-bs-parent="#accordionExample"
	>
		<!--          Engineer Container Styling Classes -->
		<div
			class="accordion-body d-flex flex-row flex-wrap justify-content-center"
		>
			<!--            Engineer Card 1-->
				
			${engineerCards.join("")}
		</div>
	</div>
	</div>

	<!--          Interns Card Container Begins Here-->

	<div class="accordion-item">
	<h2 class="accordion-header" id="headingThree">
		<button
			class="accordion-button collapsed"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#collapseThree"
			aria-expanded="false"
			aria-controls="collapseThree"
		>
			Interns
		</button>
	</h2>
	<div
		id="collapseThree"
		class="accordion-collapse collapse"
		aria-labelledby="headingThree"
		data-bs-parent="#accordionExample"
	>
		<!--          Intern Container Styling Classes -->
		<div
			class="accordion-body d-flex flex-row flex-wrap justify-content-center"
		>
			<!--            Intern Card 1-->
			${internCards.join("")}
			</div>
		</div>
	</div>
	</div>
	</div>

	<!--Bootstrap Script-->
	<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
	crossorigin="anonymous"
	></script>

	<!--jQuery Script-->
	<script
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
	integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
	crossorigin="anonymous"
	referrerpolicy="no-referrer"
	></script>
	</body>
</html>
`;
};
// export of the generateHTML function
module.exports = generateHTMLfile;
