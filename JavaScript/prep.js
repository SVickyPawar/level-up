const array = [1, 2, 3, 4, 5];

const newArr = array.slice(1, 3);

const grid = Array.from(({ length: 3 }, (_, index) => index));

const cards = Array.from({ length: 6 }, (_, index) => index + 1);
const gridCards = [...cards, ...cards].sort(() => Math.random() - 0.5);
console.log(gridCards);
