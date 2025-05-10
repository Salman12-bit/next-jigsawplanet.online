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
  { id: 3, value: 'R' }, { id: 4, value: 'Q' },
  { id: 5, value: 'Q' }, { id: 6, value: 'N' },
  { id: 7, value: 'H' }, { id: 8, value: 'R' },
  { id: 9, value: 'R' },
];

const Puzzle1 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(16);

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
            <h1 className="instructions-title">How to Play 1st Grade Games</h1>

            <p className="instructions-description">
              1st grade games are fun, educational activities that help young learners practice reading, math, problem-solving, and more. These games are designed to match the skills of first graders while keeping them engaged and excited to learn.
            </p>

            <h2 className="instruction-step">1. Types of 1st Grade Games</h2>
            <ul className="instructions-list">
              <li><strong>Math Games:</strong> Practice addition, subtraction, and counting.</li>
              <li><strong>Reading Games:</strong> Build vocabulary, spelling, and phonics skills.</li>
              <li><strong>Puzzle Games:</strong> Solve simple logic puzzles and matching games.</li>
              <li><strong>Interactive Games:</strong> Use colors, shapes, and patterns to learn new things.</li>
            </ul>

            <h3 className="instruction-step">2. Easy to Play</h3>
            <ul className="instructions-list">
              <li>Follow simple instructions provided in each game.</li>
              <li>Use a tablet, computer, or printable sheet to play.</li>
              <li>Earn points, complete levels, or solve challenges!</li>
            </ul>

            <h4 className="tips-title">Tips for Success</h4>
            <ul className="instructions-list">
              <li>Play games that match your child’s current skill level.</li>
              <li>Use short sessions to keep focus and make learning fun.</li>
              <li>Celebrate small wins to build confidence and joy in learning.</li>
            </ul>

            <h5 className="instruction-step">Conclusion</h5>
            <p className="instructions-description">
              1st grade games are a great way to learn while having fun. With a mix of reading, math, and creative play, kids build important skills in an exciting and interactive way.
            </p>
          </div>
          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='1st grade games - fun jigsaw puzzle activity for kids' />
            </Link>
            <Link href="/slider-game">
              <img className='game-image' src='./images/Puzzle2.webp' alt='interactive slider puzzle - 1st grade games for learning' />
            </Link>
            <Link href="/letter-puzzle">
              <img className='game-image' src='./images/Puzzle3.webp' alt='letter puzzle challenge - 1st grade games for kids' />
            </Link>
            <Link href="/alphabet-letter">
              <img className='game-image' src='./images/Puzzle5.webp' alt='alphabet letter puzzle - 1st grade educational games online' />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Puzzle1;


