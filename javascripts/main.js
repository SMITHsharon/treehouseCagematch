
// add case of a tie
// add button <click a badge> 

$(document).ready(function(){


let person1 = [];
let person2 = [];


// function writes the output to the DOM
// after parsing the Treehouse JSON data:
// * displays the profile picture for each of the specified profiles
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

	domString += `<span class="clickAnimationPrompt">Click Winner Name ... </span>`;
	let thisWinner = getWinnerName(person1, person2);
	if (thisWinner === "tie") {
		domString += `<div id="winner"><span class="winnerName">It's a Tie!</span></div>`;
	} else {
		domString += `<div id="winner"><span class="winnerName">${thisWinner}</span><span class="wins"> wins!!!!</span></div>`;
	}
	domString += `</div>`;
	domString += `<div class="col-sm-3"></div>`;
	
	// displays a button, <Show Badges>
	domString += `<div class="col-sm-4"></div>`;
	domString += `<div class="col-sm-4">;`;
	domString += `<button id="showBadges" class="btn btn-default btn-lg widget" type="button">Show Badges!</button>`;
	domString += `</div><div class="col-sm-4"></div>`;

	$("#outputContainer").append(domString);
};


// function returns the Total Points earned by the given Player
	const getPoints = (thisGuy) => {	
		let pointsArray = thisGuy.points;
		return pointsArray.total;
	};


// function determines the Winner of the Cage Match
// i.e., Player with the most points
// returns that person's Profile Name
	const getWinnerName = (person1, person2) => {

		let pointsArray1 = person1.points;
		let pointsArray2 = person2.points;

		if (pointsArray1.total > pointsArray2.total) {
			return person1.profile_name;
		} else 
		if (pointsArray2.total > pointsArray1.total) {
			return person2.profile_name;
		} else {
			return "tie";
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


// function writes the Winner's Treehouse Badges to the DOM
// laid out in Bootstraps row/column grid structure, six badges per row
const showWinnerBadges = (winnerBadges) => {

	let winner = getWinnerName(person1, person2).toUpperCase();

	$("#inputFields").empty(); // clear the DOM of the input fields
	$("#outputContainer").empty(); // clear the DOM outputContainer

	domString = "";

	domString += `<div class="row">`;
	domString += `<div class="col-sm-3">`;
	domString += `<span class="clickAnimationPrompt">Click on Winner's Name or Random Badges </span>`;
	domString += `</div>`;
	domString += `<div id="badgeNameHeader" class="col-sm-6">${winner}'s BADGES</div>`;
	domString += `<div class="col-sm-3"></div>`;
	domString += `</div>`;


	domString += `<div class="row">`;
	var colCounter = 0;
	for (let i=0; i<winnerBadges.length; i++) {
		domString += `<div class="col-sm-2">`;

		// assign different class names to the badges, for use in the animation event handlers
		if (i%6 === 0) {
			domString += `<img class="badgeURL thumbnail badgeImage1" height="190" width="190" src="${winnerBadges[i].icon_url}" alt="course badge">`;
		} else if (i%5 === 1) {
			domString += `<img class="badgeURL thumbnail badgeImage2" height="190" width="190" src="${winnerBadges[i].icon_url}" alt="course badge">`;
		} else if (i%5 === 2) {
			domString += `<img class="badgeURL thumbnail badgeImage3" height="190" width="190" src="${winnerBadges[i].icon_url}" alt="course badge">`;
		} else if (i%5 === 3) {
			domString += `<img class="badgeURL thumbnail badgeImage4" height="190" width="190" src="${winnerBadges[i].icon_url}" alt="course badge">`;
		} else if (i%5 === 4) {
			domString += `<img class="badgeURL thumbnail badgeImage5" height="190" width="190" src="${winnerBadges[i].icon_url}" alt="course badge">`;
		} else {
			domString += `<img class="badgeURL thumbnail badgeImage6" height="190" width="190" src="${winnerBadges[i].icon_url}" alt="course badge">`;
		}
		
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


//****************************************************
// event handler for <Show Badges> button
// calls function that displays the Winner's badges
//****************************************************
	$("body").on("click", "#showBadges", () => {
		showWinnerBadges(getWinnerBadges());
	});


//****************************************************
// ANIMATIONS CODE
//****************************************************
	$("body").on("click", ".winnerName", () => {
		$(".winnerName").animate({
	    	fontSize: "40px",
		}, 1500 );
	});
	// how to chain these two functions?
	$("body").on("click", ".winnerName", () => {
		$(".wins").animate({
	    	fontSize: "40px",
		}, 1500 );
	});


	$("body").on("click", "#badgeNameHeader", () => {
	  $("#badgeNameHeader").animate({
	    fontSize: "25px",
	  }, 1500 );
	});


	$("body").on("click", ".badgeImage3", () => {
	  $( ".badgeImage2" ).animate({
	    opacity: 0.10,
	    right: "+=75",
	    height: "toggle"
	  }, 2500, () => {
	    // Animation complete.
	  });
	});


	$("body").on("click", ".badgeImage5", () => {
	  $( ".badgeImage4" ).animate({
	    opacity: 0.25,
	    right: "+=50",
	    width: "toggle"
	  }, 5000, () => {
	    // Animation complete.
	  });
	});


	$("body").on("click", ".badgeImage1", () => {
	  $( ".badgeImage6" ).animate({
	    opacity: 0.40,
	    right: "+=15",
	    height: "toggle"
	  }, 5000, () => {
	    // Animation complete.
	  });
	});


	$("body").on("click", ".badgeURL", () => {
	  $( ".badgeURL" ).animate({
	    borderBottomWidth: "6px",
	    borderRightWidth: "3px"
	  }, 1500 );
	});


// trying to rotate badges
// but not working ???
	// .rotate() DEMO
	// $(function() {
	$("body").on("click", ".badgeImage1", () => {
	    $(this).rotate();
	});


	$("body").on("click", ".badgeImage2", () => {
	    $(this).rotate({ count:4, duration:0.6, easing:'ease-out' });
	});


	$("body").on("click", ".badgeImage3", () => {
	    $(this).rotate({ endDeg:180, persist:true });
		  },  ()  => {
		    $(this).rotate({ endDeg:360 });
	});


	$("body").on("click", ".badgeImage4", () => {
	    $(this).rotate({ endDeg:180, persist:true });
		  },  ()  => {
		    $(this).rotate({ endDeg:-360, duration:0.8, easing:'ease-in' });
	});


	$("body").on("click", ".badgeImage6", () => {
	    $(this)
	      .css({ position:'relative', left:0 })
	      .rotate({ count:2, easing:'ease-in', animate:{ left:120 } })
	      .fadeTo(400, 0.1)
	      .fadeTo(300, 1)
	      .delay(200)
	      .rotate({ endDeg:-360, count:3, easing:'ease-out', animate:{ left:0 } });
	});


	$("badgeImage5").toggle(function() {
	    $(this).rotate({ count:99999, forceJS:true });
	  },  ()  => {
	    $(this).stop();
	  });


// const rotation = () => {
//    $(".badgeImage").rotate({
//       angle:0, 
//       animateTo:360, 
//       callback: rotation,
//       easing:   (x,t,b,c,d) => { // t: current time, b: begInnIng value, c: change In value, d: duration
//           return c*(t/d)+b;
//       }
//    });
// };
// rotation();



//****************************************************
// event handler will read text input string, e.g., "geoffwebb"
// receives back from buildURL the ajax url string
//****************************************************
	const buildURL = (userInputString) => {
		return "https://teamtreehouse.com/" + userInputString + ".json";
	};

//****************************************************
// Promises code to get and load the Treehouse <json> files
//****************************************************
	const loadTreeHse1 = (person1URL) => {
		return new Promise ((resolve, reject) => {
			$.ajax(buildURL($("#userInput1").val()))
			// $.ajax("https://teamtreehouse.com/geoffwebb.json")
			.done ((data1) => resolve(data1))
			.fail ((error) => reject(error));
		});
	};

	const loadTreeHse2 = (person2URL) => {
		return new Promise ((resolve, reject) => {
			$.ajax(buildURL($("#userInput2").val()))
			// $.ajax("https://teamtreehouse.com/ellisthomas.json")
			.done ((data2) => resolve(data2))
			.fail ((error) => reject(error));
		});
	};


	$("#go").on("click", () => {

		Promise.all([loadTreeHse1(), loadTreeHse2()])
		.then( (result) => 
		{
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
