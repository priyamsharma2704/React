import { useState } from "react";

interface Card {}

function shuffle(array: Card[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const MemoryGame = ({ images }: MemoryGameProps) => {
    return (
        <div>
            <div className="grid">
                {cards.map((card, idx) => (
                    <div
                        onClick={() => {
                            handleClick(card);
                        }}
                        key={idx}
                        className="image-container"
                    >
                        {(card.isFlipped || card.isMatch) && (
                            <img src={card.url} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemoryGame;
