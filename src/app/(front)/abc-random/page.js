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
            <h1 className="instructions-title">How to Play 123abc Learning Games</h1>

            <p className="instructions-description">
              <strong>123abc</strong> games are fun, educational activities designed for young children to explore numbers, letters, and basic problem-solving. These learning games help early learners build foundational skills in a playful and engaging way.
            </p>

            <h2 className="instruction-step">1. Types of 123abc Games</h2>
            <ul className="instructions-list">
              <li><strong>Number Games:</strong> Learn counting, basic math, and number recognition.</li>
              <li><strong>Alphabet Games:</strong> Practice identifying letters, phonics, and early reading.</li>
              <li><strong>Matching Games:</strong> Match letters, numbers, or shapes to boost memory and logic.</li>
              <li><strong>Interactive Play:</strong> Use colors, sounds, and patterns for hands-on learning fun.</li>
            </ul>

            <h3 className="instruction-step">2. Easy and Fun to Play</h3>
            <ul className="instructions-list">
              <li>Each 123abc game includes clear, child-friendly instructions.</li>
              <li>Play using a tablet, smartphone, or printed activity sheet.</li>
              <li>Earn stars, solve puzzles, and unlock new challenges!</li>
            </ul>

            <h4 className="tips-title">Tips for Learning Success</h4>
            <ul className="instructions-list">
              <li>Choose games that fit your child’s learning level and pace.</li>
              <li>Use short play sessions to keep your child focused and happy.</li>
              <li>Encourage your child with praise and rewards as they learn.</li>
            </ul>

            <h5 className="instruction-step">Conclusion</h5>
            <p className="instructions-description">
              <strong>123abc</strong> games make learning fun and exciting for kids. With a mix of alphabet and number activities, these games support early learning and help young minds grow through play. Get started with 123abc today and watch your child enjoy learning like never before!
            </p>
          </div>
          <div className="game-image-container">
            <Link href="/math-magician">
              <img className='game-image' src='./images/Puzzle1.webp' alt='123abc math magician game - fun number puzzle for kids' />
            </Link>
            <Link href="/slider-game">
              <img className='game-image' src='./images/Puzzle2.webp' alt='123abc slider puzzle - interactive learning game for children' />
            </Link>
            <Link href="/letter-puzzle">
              <img className='game-image' src='./images/Puzzle3.webp' alt='123abc letter puzzle - alphabet learning challenge for kids' />
            </Link>
            <Link href="/alphabet-letter">
              <img className='game-image' src='./images/Puzzle5.webp' alt='123abc alphabet letter puzzle - early education games online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;


