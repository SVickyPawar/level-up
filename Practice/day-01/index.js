// UTC time always prefer to avoid time mismatch around the globe
//It always gives in number and measured from 1st Jan 1970 to till now
console.log("Javascript Date and Time");
const now = new Date();

console.log(now, "now");

console.log(Date.now());

const getTime = now.getTime();

console.log(getTime, "getTime");

const getDate = now.getDate();

console.log(getDate, "getDate");

console.log(document.body, "docuuuu");

function printName() {
	let name = "Vivek";
	console.log(name);
}

printName();

function greet() {
	console.log("Hello");
}

const result = greet();

console.log(result);
