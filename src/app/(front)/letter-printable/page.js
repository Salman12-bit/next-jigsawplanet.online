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
  { id: 1, value: 'D' }, { id: 2, value: 'E' },
  { id: 3, value: 'F' }, { id: 4, value: 'F' },
  { id: 5, value: 'E' }, { id: 6, value: 'E' },
  { id: 7, value: 'E' }, { id: 8, value: 'A' },
  { id: 9, value: 'B' },
];

const letterprintable = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(5);

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
                <Link href="/letter-block">
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
            <h1 className="instructions-title">Play ABC Puzzle Online – Free Alphabet Game</h1>

            <h2 className="instruction-step">What is ABC Puzzle Online</h2>
            <p className="instructions-description">
              ABC Puzzle Online is an interactive letter game where players arrange alphabet pieces into the correct sequence. The challenge begins with jumbled tiles, and the goal is to reorganize them from A to Z. It looks easy at first, but the puzzle quickly becomes a test of focus, planning, and logical thinking. Because of its simple rules and rewarding gameplay, it has become a favorite choice for learners, families, and casual gamers.
            </p>

            <h2 className="instruction-step">Why ABC Puzzle is Great for Learning</h2>
            <p className="instructions-description">
              This game is more than just entertainment — it doubles as an educational tool. Children use it to practice alphabet order, strengthen recognition skills, and improve memory through repeated play. Parents and teachers recommend it as a fun way to combine study with playtime, while adults enjoy it as a light mental workout that supports problem-solving, concentration, and patience.
            </p>

            <h2 className="instruction-step">Who Can Enjoy ABC Puzzle?</h2>
            <p className="instructions-description">
              ABC Puzzle Online is designed for everyone. Kids can use it to learn their ABCs in an interactive way, parents find it useful as a safe online learning activity, and seniors appreciate it as a calming game that keeps the mind active. With colorful visuals, simple controls, and cross-device accessibility, it delivers both fun and learning for players of all ages.
            </p>

            <h2 className="instruction-step">How to Play ABC Puzzle Online</h2>
            <ul className="instructions-list">
              <li>Start with scrambled alphabet tiles displayed on the game board.</li>
              <li>Move the tiles one by one into the correct position.</li>
              <li>Arrange the letters step by step until the sequence runs from A to Z.</li>
              <li>Try to complete the puzzle using the fewest moves possible for an extra challenge.</li>
            </ul>

            <h2 className="instruction-step">Play ABC Puzzle Online Now</h2>
            <p className="instructions-description">
              ABC Puzzle Online is the perfect mix of fun and education. It helps kids practice the alphabet, gives adults a refreshing brain exercise, and offers a relaxing activity for anyone who enjoys puzzles. Ready to test your skills? Start playing today and enjoy the challenge of arranging every letter from A to Z!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default letterprintable;


