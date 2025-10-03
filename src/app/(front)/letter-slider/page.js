"use client"

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import './puzzle.css';
import Link from 'next/link'
import Card from '@/app/Card/page';

const containerStyle1 = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
};

const Board1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-gap: 8px;
  justify-content: center; 
`;

const initialCards = [
  { id: 1, value: 'J' }, { id: 2, value: 'M' },
  { id: 3, value: 'M' }, { id: 4, value: 'K' },
  { id: 5, value: 'L' }, { id: 6, value: 'H' },
  { id: 7, value: 'H' }, { id: 8, value: 'I' },
  { id: 9, value: 'H' },
];

const puzzleslider = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(8);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const initializeGame = useCallback(() => {
    setCards(shuffle([...initialCards]));
    setFlippedCards([]);
    setMatchedCards([]);
    setAttempts(0);
    setMessage('Attempts left: 3');
  }, []);

  useEffect(() => {
    initializeGame();
  }, [level, initializeGame]);

  const handleCardClick = (id, value) => {
    if (flippedCards.length < 3 && !flippedCards.some(card => card.id === id)) {
      setFlippedCards(prev => [...prev, { id, value }]);

      if (flippedCards.length === 2) {
        setAttempts(prev => prev + 1);

        const [firstCard, secondCard] = flippedCards;

        if (firstCard.value === value && secondCard.value === value) {
          setMatchedCards(prev => [...prev, firstCard.id, secondCard.id, id]);
          setFlippedCards([]);
          if (matchedCards.length + 3 === initialCards.length) {
            setMessage('You won this game!');
            setTimeout(() => {
              setLevel(prev => prev + 1);
            }, 1000);
          }
        } else {
          setTimeout(() => {
            setFlippedCards([]);
          }, 1000);
        }

        if (attempts >= 2) {
          setTimeout(() => {
            setMessage('Game over! Restarting...');
            setTimeout(initializeGame, 2000);
          }, 1000);
        } else {
          setMessage(`Attempts left: ${2 - attempts}`);
        }
      }
    }
  };

  const hasMatchedThree = () => {
    const valueCount = matchedCards.reduce((count, cardId) => {
      const card = cards.find(card => card.id === cardId);
      if (card) {
        count[card.value] = (count[card.value] || 0) + 1;
      }
      return count;
    }, {});
    return Object.values(valueCount).some(count => count === 3);
  };

  return (
    <div className='text-conainer' style={{
      padding: "20px"
    }}>
      <div className='planet-container'>
        <div className='row'>
          <div className="upper-container" style={containerStyle1}>
            <div className="game-container">
              <p className='level-color'>Match The Pairs Level {level}</p>
              <div>
                <Board1 className='game-board'>
                  {cards.map(card => (
                    <Card
                      key={card.id}
                      id={card.id}
                      value={card.value}
                      isFlipped={flippedCards.some(flippedCard => flippedCard.id === card.id) || matchedCards.includes(card.id)}
                      handleClick={handleCardClick}
                    />
                  ))}
                </Board1>
              </div>
              <div className="message">{message}</div>
              <button className="button" onClick={initializeGame}>Restart Game</button>
              {hasMatchedThree() && (
                <Link href="/abc-puzzle">
                  <button className="button ms-2">Next Level</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h1 className="instructions-title">Letter Puzzle for Kids – Flip, Match, and Learn</h1>
            <p className="instructions-description">
              Letter Puzzle for Kids is all about flipping cards and finding letters.
              The letters are hidden, so you never know what you’ll get when you turn one over.
              Sometimes it’s the exact one you were looking for. Other times… nope, not yet.
              Bit by bit, though, the pieces come together, and the puzzle starts to make sense.
            </p>

            <h2 className="instruction-step">How to Play</h2>
            <p className="instructions-description">
              Spread the cards out on the screen and mix them up.
              Pick one and flip it over to see the letter hiding there.
              If it matches the spot you need, leave it open.
              If it doesn’t, turn it back and try to remember where it was.
              Keep flipping, keep checking.
              Little by little, the letters line up, and the puzzle takes shape.
            </p>

            <h2 className="instruction-step">Why It’s Fun</h2>
            <p className="instructions-description">
              The game is fun because you never know what’s under the next card. Some matches are easy, some make you think for a moment. Kids enjoy spotting letters and figuring out where they go. Adults can enjoy the memory part too. Watching the puzzle fill up slowly makes finishing it feel satisfying without it being rushed.
            </p>

            <h2 className="instruction-step">Next Challenge</h2>
            <p className="instructions-description">
              When the first puzzles feel easy, try bigger ones with more cards. You can make it a little faster or use trickier layouts. Miss a card? That’s fine, keep going. Each new puzzle feels different, and finishing it is always rewarding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default puzzleslider;


