
$(document).ready(function(){

// geoffwebb
// ellisthomas

let person1 = [];
let person2 = [];


// function writes the output to the DOM
// after parsing the Treehouse JSON data:
// * displays the profile picture for each of the two profiles
// * displays the total number of points for each profile
// * clearly displays the cage match winner (person with most points)
// * displays the winner's treehouse badges
// * uses jquery .animate method to apply animation to the images
const writeOutput = () => {
console.log("writing output");
console.log("person1 :: ", person1);
console.log("person2 :: ", person2);

	domString = "";

	// display profile pics
	domString += `<div class="pic row">`;
	domString += `<div class="col-sm-6">`;
	domString += `<section class="person1Panel">`;
	domString += `<img id="thumbnail" height="200" width="200" src="${person1.gravatar_url}">`;
	domString += `<section class="points">${getPoints(person1)} points</section>`;
	domString += `</section>`;
	domString += `</div>`; // close ".col-sm-6"

	domString += `<div class="col-sm-6">`;
	domString += `<section class="person2Panel">`;
	domString += `<img id="thumbnail" height="200" width="200" src="${person2.gravatar_url}">`;
	domString += `<section class="points">${getPoints(person2)} points</section>`;
	domString += `</section>`;
	domString += `</div>`; // close ".col-sm-6"

	domString += `</div>`; // close ".pic row"


	domString += `<div class="col-sm-4"></div>`;
	domString += `<div class="col-sm-4">`;
	domString += `<div id="winner"><span class="winnerName">${getWinner(person1, person2)}</span> wins!!!!</div>`;
	domString += `</div>`;
	domString += `<div class="col-sm-4"></div>`;
	

	domString += ``;

	$("#outputContainer").append(domString);
};


const getPoints = (thisGuy) => {
	
	let pointsArray = thisGuy.points;
	return pointsArray.total;
};


const getWinner = (person1, person2) => {

	let pointsArray1 = person1.points;
	let pointsArray2 = person2.points;

	if (pointsArray1.total > pointsArray2.total) {
		return person1.profile_name;
	} else {
		return person2.profile_name;
	}
};


const getBadges = (person1, person2) => {

	let pointsArray1 = person1.points;
	let pointsArray2 = person2.points;

	if (pointsArray1.total > pointsArray2.total) {
		return person1.profile_name;
	} else {
		return person2.profile_name;
	}
};


// event handerl will read text input string, e.g., "geoffwebb"
// receives back from buildURL the ajax url string

const buildURL = (userInputString) => {
// console.log("user text input :: ", $("#userInput1").val());
// console.log("user text input :: ", $("#userInput2").val());
// console.log("printing URL :: ", "https://teamtreehouse.com/" + userInputString + ".json");
	return "https://teamtreehouse.com/" + userInputString + ".json";
};


const loadTreeHse1 = (person1URL) => {
	return new Promise ((resolve, reject) => {
		// $.ajax(buildURL($("#userInput1").val()))
		$.ajax("https://teamtreehouse.com/geoffwebb.json")
		.done ((data1) => resolve(data1))
		.fail ((error) => reject(error));
	});
};

const loadTreeHse2 = (person2URL) => {
	return new Promise ((resolve, reject) => {
		// $.ajax(buildURL($("#userInput2").val()))
		$.ajax("https://teamtreehouse.com/ellisthomas.json")
		.done ((data2) => resolve(data2))
		.fail ((error) => reject(error));
	});
};


// event handler for <Start Cage Match> button
$("#go").on("click", () => {

	Promise.all([loadTreeHse1(), loadTreeHse2()])
	.then(function(result){
// console.log("result :: ", result);
		result.forEach( (treehouseData, index) => {
			if (index === 0) {
				person1 = treehouseData;
				// person1.push(treehouseData);
			} else {
				person2 = treehouseData;
				// person2.push(treehouseData);
			}
		});

		writeOutput();
	})
	.catch( (fileError) => {
		alert("This person does not have a Treehouse account ...");
	});
});


// Promise.all([loadTreeHse1(), loadTreeHse2()])
// .then(function(result){
// console.log("result :: ", result);
// 	result.forEach(function(treehouseData, index){
// 		if (index === 0) {
// 			person1.push(treehouseData);
// 		} else {
// 			person2.push(treehouseData);
// 		}
// console.log("person1 :: ", person1);
// console.log("person2 :: ", person2);
// 	})
// 	.catch(function(fileError){
// 		alert("This person does not have a Treehouse account ...");
// 	});
// });



























});