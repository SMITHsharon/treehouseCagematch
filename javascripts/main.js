
$(document).ready(function(){

// geoffwebb
// ellisthomas

let person1 = [];
let person2 = [];


// event handler for <Start Cage Match>
$("#go").on("click", function(){
// console.log("clicked");
	Promise.all([loadTreeHse1(), loadTreeHse2()])
	.then(function(result){
// console.log("result :: ", result);
		result.forEach(function(treehouseData, index){
			if (index === 0) {
				person1.push(treehouseData);
			} else {
				person2.push(treehouseData);
			}
console.log("person1 :: ", person1);
console.log("person2 :: ", person2);
		})
		.catch(function(fileError){
			alert("This person does not have a Treehouse account ...");
		});
	});
});


// event handerl will read text input string, e.g., "geoffwebb"
// receives back from buildURL the ajax url string

const buildURL = (userInputString) => {
console.log("user text input :: ", $("#userInput1").val());
console.log("user text input :: ", $("#userInput2").val());
console.log("printing URL :: ", "https://teamtreehouse.com/" + userInputString + ".json");
	return "https://teamtreehouse.com/" + userInputString + ".json";
};


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