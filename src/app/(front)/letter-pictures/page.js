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
  { id: 1, value: 'J' }, { id: 2, value: 'I' },
  { id: 3, value: 'I' }, { id: 4, value: 'K' },
  { id: 5, value: 'L' }, { id: 6, value: 'C' },
  { id: 7, value: 'K' }, { id: 8, value: 'I' },
  { id: 9, value: 'H' },
];

const letterpicture = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(3);

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
                <Link href="/letter-missing">
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
            <h1 className="instructions-title">Letter I Pictures – Match, Learn, and Win</h1>

            <p className="instructions-description">
              Letter I Pictures is a simple but engaging puzzle game built around memory and focus.
              The cards are face down, each hiding an letter connected to the image like D for Dog.
              Flip one, check what’s there, and try to hold it in your memory for later.
              The challenge is straightforward: find three matching “I” picture cards, and you win the round.
            </p>

            <h2 className="instruction-step">How to Play</h2>
            <p className="instructions-description">
              Lay out the cards face down and give them a quick shuffle so nothing feels predictable.
              On your turn, flip over three cards—if they all show the same picture for the letter I,
              you’ve got a win. If not, they flip back, and it’s your job to remember where they were
              for the next try. The trick is to stay sharp, because every flip gives you a new clue.
            </p>

            <h2 className="instruction-step">Who Can Play</h2>
            <p className="instructions-description">
            This game works for all ages. Younger players playfully learn letters and images, families 
            can enjoy it together as a group activity, and adults often use it as a quick brain warm-up.
            The rules are easy to understand, so no one gets left behind.

            </p>

            <h2 className="instruction-step">Next Challenge</h2>
            <p className="instructions-description">
              Once you master the basics, you can try bigger layouts with more Letter I Pictures
              hidden across the board. Larger grids mean more cards to remember, trickier matches,
              and longer rounds. It keeps the challenge fresh while giving your memory a proper workout.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};


export default letterpicture;


