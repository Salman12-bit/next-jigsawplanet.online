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
  { id: 1, value: 'D' }, { id: 2, value: 'D' },
  { id: 3, value: 'F' }, { id: 4, value: 'D' },
  { id: 5, value: 'E' }, { id: 6, value: 'E' },
  { id: 7, value: 'D' }, { id: 8, value: 'A' },
  { id: 9, value: 'B' },
];

const Puzzle1 = () => {
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
                <Link href="jigsawplanet3/">
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
            <h1 className="instructions-title">How to Play abc puzzle online Game</h1>
            <p className="instructions-description">Abc puzzle online games are a delightful way to challenge your mind, improve cognitive skills, improve your picking power, and enjoy some leisure time. Abc puzzle online come in various forms, with unique content from traditional paper abc puzzle online to sophisticated digital games. The abc puzzle online guide will walk you through the basic principles of playing different types of abc puzzle online games, offering tips and strategies to enhance your experience.</p>
            <h2 className="instruction-step">1. Different Types of abc puzzle online Free:</h2>
            <p className="instructions-description">Abc puzzle online games come in many varieties, each with unique mechanics and objectives.</p>
            <h3 className="instruction-step">2. Understand the Rules:</h3>
            <p className="instructions-description">Each abc puzzle online puzzles has specific rules and objectives. Read the instructions carefully before starting.</p>
            <ul className="instructions-list">
              <li>In this game players have 3 chances.</li>
              <li>If 3 abc puzzle online puzzle game cards are matched to each other.</li>
              <li>Player wins this game.</li>
              <li>Otherwise, Restart the abc puzzle online game again and try to match again 3 cards.</li>
            </ul>
            <h4 className="instruction-step">3. Set up Your Space:</h4>
            <p className="instructions-description">For physical jigsaw puzzle, ensure you have a comfortable and well-lit workspace. For digital abc puzzle online, adjust your device's brightness and volume settings to suit your environment and mind.</p>
            <h5 className="tips-title">Tips for Success</h5>
            <ul className="instructions-list">
              <li>Stay Calm: Abc puzzle online puzzle games should be enjoyable; take breaks if you feel frustrated.</li>
              <li>Practice Regularly: The more you play, the better you get.</li>
              <li>Learn from Mistakes: Analyze what went wrong and try different approaches.</li>
              <li>Challenge Yourself: Gradually increase the difficulty level to keep improving your skills and thinking process.</li>
            </ul>
            <h6 className="instruction-step">Conclusion:</h6>
            <p className="instructions-description">Abc puzzle online games offer endless opportunities to test your mental acuity, relax, and have fun. By understanding the rules, using effective strategies, and practicing regularly, you can enhance your abc puzzle online-solving skills and enjoy the satisfying feeling of cracking even the toughest abc puzzle online. So, choose your game, set up your space, and dive into the fascinating world of abc puzzle online!</p>
          </div>
          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='free online abc puzzle online puzzle game' />
            </Link>
            <Link href="/jigsawplanet1">
              <img className='game-image' src='./images/Puzzle2.webp' alt='abc puzzle online interactive puzzle' />
            </Link>
            <Link href="/jigsawplanet2">
              <img className='game-image' src='./images/Puzzle3.webp' alt='free abc puzzle online game' />
            </Link>
            <Link href="/jigsawplanet3">
              <img className='game-image' src='./images/Puzzle5.webp' alt='play abc puzzle online puzzle online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;


