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
  { id: 1, value: 'A' }, { id: 2, value: 'A' },
  { id: 3, value: 'F' }, { id: 4, value: 'A' },
  { id: 5, value: 'E' }, { id: 6, value: 'E' },
  { id: 7, value: 'A' }, { id: 8, value: 'A' },
  { id: 9, value: 'B' },
];

const Puzzle1 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(2);

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
                <Link href="/jigsawplanet2">
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
            <h1 className="instructions-title">How to Play Free alphabet slider Game</h1>
            <p className="instructions-description">Free alphabet slider games are a delightful way to challenge your mind, improve cognitive skills, improve your picking power, and enjoy some leisure time. Alphabet slider come in various forms, with unique content from traditional paper alphabet slider to sophisticated digital games. The alphabet slider guide will walk you through the basic principles of playing different types of alphabet slider games, offering tips and strategies to enhance your experience.</p>
            <h2 className="instruction-step">1. Different Types of alphabet slider Free:</h2>
            <p className="instructions-description">This game come in many varieties like pieces puzzle, card in one frame and match card, each with unique mechanics and objectives that entertain users.</p>
            <h3 className="instruction-step">2. Understand the Game Rules:</h3>
            <p className="instructions-description">Each alphabet slider puzzles has specific rules and objectives. Read the game rules carefully before starting this game.</p>
            <ul className="instructions-list">
              <li>In this game player play three times with different cards</li>
              <li>If 3 alphabet slider puzzle game cards are matched to each other.</li>
              <li>Player wins this game.</li>
              <li>Otherwise, Restart the alphabet slider game again and try to match again 3 cards.</li>
            </ul>
            <h4 className="instruction-step">3. Set up Your Space:</h4>
            <p className="instructions-description">For play this game physically, ensure you have a comfortable area and well-lit workspace. For digital alphabet slider, adjust your device's settings that is suitable for your environment and mind.</p>
            <h5 className="tips-title">Tips for Success</h5>
            <ul className="instructions-list">
              <li>Practice Regularly: If you play free alphabet slider game more and more, the better result you get.</li>
              <li>Learn from Mistakes: If you make a mistake don't be penic because every person learn from mistakes and get Success.</li>
              <li>Challenge Yourself: If you want to upgrade yous skill gradually increase the difficulty level and the thinking process.</li>
            </ul>
            <h6 className="instruction-step">Conclusion:</h6>
            <p className="instructions-description">Free alphabet slider give the best opportunities to get your mental and physical strength. By following all the rules of free alphabet slider game,playing this game regularly and using the best method to play free alphabet slider, you can upgrade your alphabet-solving skills and enjoy the satisfying feeling of cracking even the toughest alphabet puzzle. So, choose your best alphabet puzzle and dive into the fascinating world of alphabet!</p>
          </div>
          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='free online alphabet slider puzzle game' />
            </Link>
            <Link href="/jigsawplanet1">
              <img className='game-image' src='./images/Puzzle2.webp' alt='alphabet slider interactive puzzle' />
            </Link>
            <Link href="/jigsawplanet2">
              <img className='game-image' src='./images/Puzzle3.webp' alt='free alphabet slider game' />
            </Link>
            <Link href="/jigsawplanet3">
              <img className='game-image' src='./images/Puzzle5.webp' alt='play alphabet slider puzzle online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;


