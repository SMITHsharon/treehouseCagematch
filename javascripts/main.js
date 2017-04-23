
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
// * displays a button, <Show Badges>
const writeOutput = () => {

	domString = "";

	// displays information for Player 1
	domString += `<div class="pic row">`;
	domString += `<div class="col-sm-3"></div>`;
	domString += `<div class="col-sm-3">`;
	domString += `<section class="personPanel">`;
	domString += `<img id="profileThumbnail" height="200" width="200" src="${person1.gravatar_url}">`;
	domString += `<section class="points">${getPoints(person1)} points</section>`;
	domString += `</section>`;
	domString += `</div>`; // close ".col-sm-6"

	// displays information for Player 2
	domString += `<div class="col-sm-1"></div>`;
	domString += `<div class="col-sm-3">`;
	domString += `<section class="personPanel">`;
	domString += `<img id="profileThumbnail" height="200" width="200" src="${person2.gravatar_url}">`;
	domString += `<section class="points">${getPoints(person2)} points</section>`;
	domString += `</section>`;
	domString += `</div>`; // close ".col-sm-6"

	domString += `</div>`; // close ".pic row"

	// displays the Winner of the Cage Match
	domString += `<div class="col-sm-3"></div>`;
	domString += `<div class="col-sm-6">`;
	domString += `<div id="winner"><span class="winnerName">${getWinnerName(person1, person2)}</span> wins!!!!</div>`;
	domString += `</div>`;
	domString += `<div class="col-sm-3"></div>`;
	
	// displays a button, <Show Badges>
	domString += `<div class="col-sm-4"></div>`;
	domString += `<div class="col-sm-4">;`;
	domString += `<button id="showBadges" class="btn btn-default btn-lg" type="button">Show Badges!</button>`;
	domString += `</div><div class="col-sm-4"></div>`;

	$("#outputContainer").append(domString);
};


// function returns the total points earned by the given Player
const getPoints = (thisGuy) => {	
	let pointsArray = thisGuy.points;
	return pointsArray.total;
};


// function determines the Winner of the Cage Match
// i.e., Player with the most points
const getWinnerName = (person1, person2) => {

	let pointsArray1 = person1.points;
	let pointsArray2 = person2.points;

	if (pointsArray1.total > pointsArray2.total) {
		return person1.profile_name;
	} else {
		return person2.profile_name;
	}
};


// function returns an array of the Winner's Treehouse badges
const getWinnerBadges = () => {

	let pointsArray1 = person1.points;
	let pointsArray2 = person2.points;

	if (pointsArray1.total > pointsArray2.total) {
		return person1.badges;
	} else {
		return person2.badges;
	}
};


// function writes the Winner's Treehouse badges to the DOM
const showWinnerBadges = (winnerBadges) => {

	let winner = getWinnerName(person1, person2).toUpperCase();

	$("#inputFields").empty(); // clear the DOM of the input fields
	$("#outputContainer").empty(); // clear the DOM outputContainer

	domString = "";

	domString += `<div class="row">`;
	domString += `<div class="col-sm-3"></div>`;
	domString += `<div id="badgeNameHeader" class="col-sm-6">${winner}'s BADGES</div>`;
	domString += `<div class="col-sm-3"></div>`;
	domString += `</div>`;


	domString += `<div class="row">`;
	var colCounter = 0;
	for (let i=0; i<winnerBadges.length; i++) {
		domString += `<div class="col-sm-2">`;
		domString += `<img class="badgeURL thumbnail" height="200" width="200" src="${winnerBadges[i].icon_url}" alt="course badge">`;
		domString += `</div>`;

		colCounter += 1;
			if (colCounter === 6) { /// wraps this row

				domString += `</div>`; // end of row
				domString += `<div class="row">`;
				colCounter = 0;
		} // colCounter <if> 
	} // <for>

	$("#outputContainer").append(domString);
};



// event handler for <Show Badges> button
// calls function that displays the Winner's badges
$("body").on("click", "#showBadges", () => {
	showWinnerBadges(getWinnerBadges());
});



// event handler will read text input string, e.g., "geoffwebb"
// receives back from buildURL the ajax url string
const buildURL = (userInputString) => {
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
		result.forEach( (treehouseData, index) => {
			if (index === 0) {
				person1 = treehouseData;
			} else {
				person2 = treehouseData;
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
// 	})
// 	.catch(function(fileError){
// 		alert("This person does not have a Treehouse account ...");
// 	});
// });


});