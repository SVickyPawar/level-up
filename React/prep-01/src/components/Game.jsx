import React, { useState, useEffect } from 'react';


const Game = () => {
	const [cards, setCards] = useState(generateGrid());
	const [flippedCards, setFlippedCards] = useState([]);
	const [isLocked, setIsLocked] = useState(false);
	console.log(cards, "cards");
	const handleClick = (id) => {
		if (cards[id].isFlipped || isLocked) {
			return
		}
		const copyCards = [...cards];
		copyCards[id].isFlipped = true;
		setCards(copyCards)
		setFlippedCards([...flippedCards, id]);
	}

	useEffect(() => {
		if (flippedCards.length === 2) {
			setIsLocked(true);
			setTimeout(() => {
				setIsLocked(false);
				setFlippedCards([])
			}, 3000)
		}
	}, [flippedCards])
	return (
		<div style={{ width: '300px', height: '300px', border: '1px solid red' }}>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', height: '100%', }}>
				{cards.map(({ id, number, isFlipped }) => (
					<div key={id} onClick={() => { handleClick(id) }} style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{isFlipped ? number : '?'}</div>
				))}
			</div>
		</div>
	)
}

const generateGrid = () => {
	const grid = Array.from({ length: 3 }, ((_, index) => index + 1))

	const gridCards = [...grid, ...grid, ...grid].sort(() => Math.random() - 0.5);
	return gridCards.map((el, index) => { return { id: index, number: el, isFlipped: false } });

}
export default Game