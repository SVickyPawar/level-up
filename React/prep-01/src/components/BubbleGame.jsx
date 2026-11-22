import { useState } from 'react';

const getRandomMessage = () => (Math.random() < 0.5 ? 'Hello' : 'Boom');

export function BubbleGame() {
    const [message, setMessage] = useState(getRandomMessage);
    const [revealed, setRevealed] = useState(false);

    const handleClick = () => {
        setRevealed(true);

        if (message === 'Hello') {
            setTimeout(() => {
                setRevealed(false);
                setMessage(getRandomMessage());
            }, 2000);
        }
    };

    const isBoom = revealed && message === 'Boom';

    return (
        <div
            style={{
                width: '300px',
                height: '300px',
                margin: '40px auto',
                borderRadius: '20px',
                backgroundColor: isBoom ? 'red' : '#f5f5f5',
                transition: 'background-color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '1px solid red'
            }}
        >
            <div
                style={{
                    // position: 'relative',
                    width: '180px',
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid black'
                }}
            >
                {/* Hidden message */}
                <h2
                    style={{
                        // position: 'absolute',
                        margin: 0,
                        fontSize: '28px',
                        fontWeight: 'bold',
                        border: '2px solid gray'
                    }}
                >
                    {revealed && message}
                </h2>

                {/* Balloon */}
                <button
                    onClick={handleClick}
                    disabled={revealed}
                    style={{
                        position: 'absolute',
                        border: 'none',
                        background: 'transparent',
                        padding: 0,
                        cursor: revealed ? 'default' : 'pointer',
                        transition: 'transform 0.5s ease',
                        transform: revealed ? 'translateX(70px)' : 'translateX(0)',
                        border: '2px solid tomato'
                    }}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='120'
                        height='120'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path d='M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1' />
                        <path d='M12 6a2 2 0 0 1 2 2' />
                        <path d='M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0' />
                    </svg>
                </button>
            </div>
        </div>
    );
}
