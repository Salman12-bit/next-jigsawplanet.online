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
  { id: 1, value: 'E' }, { id: 2, value: 'F' },
  { id: 3, value: 'A' }, { id: 4, value: 'D' },
  { id: 5, value: 'C' }, { id: 6, value: 'A' },
  { id: 7, value: 'A' }, { id: 8, value: 'A' },
  { id: 9, value: 'B' },
];

const Letterpuzzle = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(1);

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
                <Link href="/letter-wooden">
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
            <h1 className="instructions-title">Letter Puzzle – A Simple Game with a Clever Twist</h1>

            <p className="instructions-description">
              A letter puzzle is easy to pick up but tricky enough to stay interesting. You flip a card, see what’s hiding, and try to hold it in your memory. Sometimes you hit the match right away, other times you miss and need to keep track for the next turn. That mix of luck and recall is what keeps the game playful.
            </p>

            <h2 className="instruction-step">How It Works</h2>
            <p className="instructions-description">
              The rules couldn’t be simpler: cards face down, pick two, and see if they line up. When they match, they stay open; when they don’t, back they go. Some rounds shake things up by asking you to match three cards instead of two, or by arranging them in sequence. What starts out easy can quickly turn into a challenge.
            </p>

            <h2 className="instruction-step">Who Jumps In</h2>
            <p className="instructions-description">
              Just about anyone. Kids learn it in minutes, parents use it as a quick group activity, and adults might fit in a round on a break. It doesn’t take hours, but it gives you just enough challenge to keep it satisfying.
            </p>

            <h2 className="instruction-step">What’s Next</h2>
            <p className="instructions-description">
              As you get better, the puzzle grows with you. Larger grids, trickier patterns, and new twists keep things fresh. That’s the charm of this game—it starts off light but can become a real test of memory when you want it to.
            </p>
          </div>

          <div className="game-image-container">
            <Link href="/letter-pictures">
              <img className='game-image' src='./images/Puzzle1.webp' alt='free online letter puzzles puzzle game' />
            </Link>
            <Link href="/letter-wooden">
              <img className='game-image' src='./images/Puzzle2.webp' alt='letter puzzles interactive puzzle' />
            </Link>
            <Link href="/letter-printable">
              <img className='game-image' src='./images/Puzzle3.webp' alt='free letter puzzles game' />
            </Link>
            <Link href="/color-letter">
              <img className='game-image' src='./images/Puzzle5.webp' alt='play letter puzzles puzzle online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Letterpuzzle;


