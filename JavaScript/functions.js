function check() {
	var one = 1;
	let two = 2;
	console.log("inside function", one, two);
}
// check();
// console.log(one);

function checkParams(param1, param2, ...rem) {
	console.log(param1, "param1");
	console.log(param2, "param2");
	console.log(rem, "rem");
}

// checkParams("Vivek", "Pawar", "Junior Software Engineer", "Remote", "Dabadu");

function testParams(num) {
	num += 2;
	console.log(num);
}

let num = 2;

// testParams(num);

// console.log(num);

// console.log("01" > 1);

// console.log(" " === false); // Triple equal always checks data types
// console.log(0 === false);
// console.log("" == false); // type coercion happens here
// console.log(0 == false);

function sayHello() {
	if (true) {
		var name = "vivek";
		let sirname = "pawar";
	}
	console.log(sirname);
}
sayHello();
