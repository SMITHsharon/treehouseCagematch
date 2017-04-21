
$(document).ready(function(){

let person1 = [];
let person2 = [];

const loadTreeHse1 = () => {
	return new Promise ((resolve, reject) => {
		$.ajax("https://teamtreehouse.com/geoffwebb.json")
		.done ((data1) => resolve(data1))
		.fail ((error) => reject(error));
	});
};

const loadTreeHse2 = () => {
	return new Promise ((resolve, reject) => {
		$.ajax("https://teamtreehouse.com/ellisthomas.json")
		.done ((data2) => resolve(data2))
		.fail ((error) => reject(error));
	});
};

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
	});
});



























});