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
  { id: 1, value: 'J' }, { id: 2, value: 'L' },
  { id: 3, value: 'U' }, { id: 4, value: 'O' },
  { id: 5, value: 'Q' }, { id: 6, value: 'N' },
  { id: 7, value: 'U' }, { id: 8, value: 'U' },
  { id: 9, value: 'O' },
];

const Puzzle1 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(19);

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
              <h3 className='level-color'>Match The Pairs Level {level}</h3>
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
                <Link href="/">
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
            <h1 className="instructions-title">How to Play 2048 unblocked games</h1>
            <p className="instructions-description">
              <strong>2048 unblocked games</strong> is a sweet twist on the classic 2048 puzzle game—featuring cupcakes instead of numbers! Slide tiles to match identical cupcakes and unlock even more delicious treats as you aim to reach the final cupcake tile. This version is unblocked, so you can play it anytime at school or work!
            </p>
            <h2 className="instruction-step">1. How to Start Playing</h2>
            <ul className="instructions-list">
              <li>Use your arrow keys (or swipe on mobile) to move the tiles.</li>
              <li>When two identical cupcakes touch, they combine into a new one.</li>
              <li>The goal is to reach the final cupcake (usually labeled as 2048) without filling the grid.</li>
            </ul>
            <h3 className="instruction-step">2. Tips to Win</h3>
            <ul className="instructions-list">
              <li>Keep your highest-value cupcakes in one corner.</li>
              <li>Plan ahead and avoid random moves that fill up the board quickly.</li>
              <li>Try to make matches in one direction (left/right or up/down) for better control.</li>
            </ul>
            <h4 className="instruction-step">Conclusion</h4>
            <p className="instructions-description">
              <strong>2048 unblocked games</strong> is a perfect mix of logic and fun. With adorable designs and addictive gameplay, it’s an enjoyable way to sharpen your mind—whether you’re playing during a break or after school. Start sliding, matching, and stacking cupcakes to hit that sweet 2048 goal!
            </p>
          </div>

          <div className="game-image-container">
            <Link href="/math-magician">
              <img className='game-image' src='./images/Puzzle1.webp' alt='2048 unblocked games - magical number puzzle challenge for kids' />
            </Link>
            <Link href="/slider-game">
              <img className='game-image' src='./images/Puzzle2.webp' alt='2048 unblocked games - interactive sliding number tile game' />
            </Link>
            <Link href="/math-game">
              <img className='game-image' src='./images/Puzzle3.webp' alt='2048 unblocked games - fun mix of numbers and strategy for children' />
            </Link>
            <Link href="/alphabet-letter">
              <img className='game-image' src='./images/Puzzle5.webp' alt='2048 unblocked games - learning numbers and letters through puzzles' />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Puzzle1;


