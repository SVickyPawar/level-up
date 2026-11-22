import React, { useState } from 'react';
import BubbleIcon from '../assets/bubble.png';
const getRandomNote = () => (Math.random() < 0.5 ? 'Hello' : 'Hurray');



const NewBubbleGame = () => {

    const [note, setNote] = useState(getRandomNote);
    const [revealed, setRevealed] = useState(false);

    function handleClick() {
        setRevealed(true);
        if (note == 'Hello') {
            setTimeout(() => {
                setRevealed(false),
                    setNote(getRandomNote)
            }, 2000)
        }
    }
    return (
        <div style={{ width: '400px', height: '400px', border: '1px solid gray', textAlign: 'center' }}>

            <h1 >Memory Game</h1>

            <div style={{ width: '300px', height: '300px', margin: '20px auto', border: '1px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button
                    onClick={handleClick}
                    style={{
                        width: '100%', height: '100%', border: 'none', backgroundColor: 'transparent'
                    }}>{revealed ? (
                        note
                    ) : (
                        <img src={BubbleIcon} alt="bubble" />
                    )}</button>
            </div>
        </div>
    )
}

export default NewBubbleGame