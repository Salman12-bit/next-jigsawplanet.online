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
  { id: 3, value: 'R' }, { id: 4, value: 'O' },
  { id: 5, value: 'Q' }, { id: 6, value: 'N' },
  { id: 7, value: 'H' }, { id: 8, value: 'O' },
  { id: 9, value: 'O' },
];

const Puzzle1 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(17);

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
                <Link href="/unblocked-game">
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
            <h1 className="instructions-title">How to Play Math - Quiz Game</h1>
            <p className="instructions-description">
              A <strong>Math - Quiz Game</strong> is an exciting way for kids to test their math skills through fun challenges. These games feature fast-paced quizzes, interactive puzzles, and score-based rounds to make learning math more engaging and effective.
            </p>
            <h2 className="instruction-step">1. Choose Your Game Mode</h2>
            <ul className="instructions-list">
              <li><strong>Basic Math:</strong> Fliping card and number matching quizzes.</li>
              <li><strong>Timed Challenges:</strong> Solve as many problems as you can before the shuffle the card.</li>
              <li><strong>Puzzle Rounds:</strong> Use logic and numbers to complete game levels.</li>
            </ul>
            <h3 className="instruction-step">2. How to Win</h3>
            <ul className="instructions-list">
              <li>Match three cards quickly and accurately to earn points.</li>
              <li>Use hints when you're stuck to keep progressing.</li>
              <li>Track your cards and try to beat your best time!</li>
            </ul>
            <h4 className="instruction-step">Conclusion</h4>
            <p className="instructions-description">
              With a <strong>Math - Quiz Game</strong>, kids can boost their arithmetic skills while having fun. Whether at home or in the classroom, these games are a smart way to mix play with practice!
            </p>
          </div>
          <div className="game-image-container">
            <Link href="/math-magician">
              <img className='game-image' src='./images/Puzzle1.webp' alt='math - quiz game for kids with fun magical numbers challenge' />
            </Link>
            <Link href="/slider-game">
              <img className='game-image' src='./images/Puzzle2.webp' alt='interactive math - quiz game with sliding number puzzles' />
            </Link>
            <Link href="/math-game">
              <img className='game-image' src='./images/Puzzle3.webp' alt='math - quiz game for children with letter and number mix' />
            </Link>
            <Link href="/alphabet-letter">
              <img className='game-image' src='./images/Puzzle5.webp' alt='educational math - quiz game with alphabet and number learning' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;


