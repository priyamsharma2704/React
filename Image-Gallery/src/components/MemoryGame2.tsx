import { useState } from "react";

interface Card {
    id: number;
    url: string;
    isFlipped: boolean;
    isMatch: boolean;
}

interface MemoryGameProps {
    images: string[];
}

function shuffle(array: Card[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const MemoryGame = ({ images }: MemoryGameProps) => {
    const [cards, setCards] = useState<Card[]>(() => {
        const duplicateImages = [...images, ...images];
        const shuffledImages = shuffle(duplicateImages);
        return shuffledImages.map((img, idx) => {
            return {
                id: idx,
                url: img,
                isFlipped: false,
                isMatch: false,
            };
        });
    });

    function handleClick(clickedCard: Card) {
        if (clickedCard.isFlipped || clickedCard.isMatch) return;

        setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards[clickedCard.id].isFlipped = true;

            const filteredCards = newCards.filter((card, idx) => {
                return card.isFlipped && !card.isMatch;
            });

            if (filteredCards.length == 2)
                handleCardMatch(filteredCards[0], filteredCards[1]);

            return newCards;
        });
    }

    function handleCardMatch(card1: Card, card2: Card) {
        const match = card1.url == card2.url;

        setTimeout(() => {
            setCards((prevCards) => {
                const newCards = [...prevCards];
                if (match) {
                    card1.isMatch = true;
                    card2.isMatch = true;
                } else {
                    card1.isFlipped = false;
                    card2.isFlipped = false;
                }
                return newCards;
            });
        }, 800);
    }

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
