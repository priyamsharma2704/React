import { useState } from "react";
interface MemoryGameProps {
    images: string[];
}

interface Card {
    id: number;
    url: string;
    isFlipped: boolean;
    isMatch: boolean;
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
        return shuffledImages.map((img: string, idx: number) => {
            return {
                id: idx,
                url: img,
                isFlipped: false,
                isMatch: false,
            };
        });
    });

    const handleClick = (card: Card) => {
        console.log("clicked");
        if (card.isFlipped || card.isMatch) return;

        setCards((prevCards: Card[]) => {
            const newCards = [...prevCards];
            newCards[card.id].isFlipped = true;

            const flippedCards = newCards.filter(
                (c) => c.isFlipped && !c.isMatch
            );

            if (flippedCards.length === 2) {
                handleMatch(flippedCards[0], flippedCards[1]);
            }

            return newCards;
        });
    };

    function handleMatch(card1: Card, card2: Card) {
        const match = card1.url === card2.url;

        setTimeout(() => {
            setCards((prevCards: Card[]) => {
                const newCards = [...prevCards];

                if (match) {
                    newCards[card1.id].isMatch = true;
                    newCards[card2.id].isMatch = true;
                } else {
                    newCards[card1.id].isFlipped = false;
                    newCards[card2.id].isFlipped = false;
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
