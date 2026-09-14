console.log("First");
console.log("Second");
console.log("Third");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// 	.then((response) => response.json())
// 	.then((json) => console.log("Fourth"));
FetchUsersData();
console.log("five");
console.log("Six");

async function FetchUsersData() {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const result = await res.json();
	console.log("fourth");
}
