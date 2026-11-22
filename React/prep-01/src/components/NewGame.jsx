import React, { useEffect, useState } from 'react'

const NewGame = () => {
    const [cards, setCards] = useState(generateGrids());
    const [flippedCards, setFlippedCards] = useState([]);
    const [isLock, setIsLock] = useState(false)


    function handleClick(id) {
        if (cards[id].isFlipped || isLock) {
            return;
        }
        const copycards = [...cards];
        copycards[id].isFlipped = true;
        setCards(copycards);
        setFlippedCards([...flippedCards, id]);
    }

    useEffect(() => {
        if (flippedCards.length === 2) {
            setIsLock(true);

            setTimeout(() => {
                if (cards[flippedCards[0]].number !== cards[flippedCards[1]].number) {
                    setCards((prev) => {
                        const cardsCopy = [...prev];
                        cardsCopy[flippedCards[0]].isFlipped = false;
                        cardsCopy[flippedCards[1]].isFlipped = false;
                        return cardsCopy
                    })
                }
                setIsLock(false);
                setFlippedCards([])
            }, 3000)
        }
    }, [flippedCards])

    console.log(cards, "cards");
    return (
        <div style={{ width: '400px', height: '400px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', height: '100%' }}>
                {cards?.map(({ number, id, isFlipped }) => {
                    return <div onClick={() => { handleClick(id) }} style={{ border: '1px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem' }} key={id}>
                        {isFlipped ? number : '?'}
                    </div>
                })}
            </div>
        </div >
    )
}

function generateGrids() {
    const gridCards = Array.from({ length: 4 }, ((_, index) => index + 1));
    console.log(gridCards);
    const totalCards = [...gridCards, ...gridCards, ...gridCards].sort((el) => el - 0.5);
    const cards = totalCards.map((el, index) => { return { number: el, id: index, isFlipped: false } })
    return cards;
}

generateGrids();

export default NewGame