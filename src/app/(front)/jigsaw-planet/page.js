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
  { id: 1, value: 'A' }, { id: 2, value: 'B' },
  { id: 3, value: 'F' }, { id: 4, value: 'A' },
  { id: 5, value: 'E' }, { id: 6, value: 'E' },
  { id: 7, value: 'B' }, { id: 8, value: 'B' },
  { id: 9, value: 'B' },
];

const Puzzle1 = () => {
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
                <Link href="/jigsawplanet1">
                  <button className="button ms-2">Next Level</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="welcome-container">
        <h1 className="welcome-title">🧩 Welcome to the Puzzle Challenge! 🧩</h1>
        <p className="welcome-text">
          Hey there, all puzzle solvers! 🌟 Every puzzle gives us a new opportunities, and every level give us a chance to unlock your strength.
          This is not just a game, it's your journey that sharpen your mind, unlocks your skills, and enjoy every victory.
        </p>
        <ul className="welcome-list">
          <li>🔍 Every move counts: Take your time to complete every level, explore which solution is best, and watch how every piece falls into place.</li>
          <li>🧠 Sharpen your mind: Solve puzzles to grow your thinking. A puzzle solver can solve piece at a time.</li>
          <li>🎯 Embrace the challenge: Just cheer up yourself, and you can say, "I did it!"</li>
        </ul>
        <p className="welcome-text">
          Keep thinking forward, trust on you, and most of all—enjoy the journey. You’ve got the mind of a champion and every champion knows his strength, and every puzzle gives a victory worth enjoying! Get ready to collect all the pieces together in frame! 🎉
        </p>
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h1 className="instructions-title">How to Play Alphabet Game</h1>
            <p className="instructions-description">This game give a delightful way to challenge your mind, improve cognitive skills, improve your picking power, and enjoy some leisure time. Alphabet come in various forms, with helpful content from traditional paper alphabet to sophisticated digital games. This game guide will walk you through the basic rules of playing different types of alphabet games, offering tips and strategies which is helpful.</p>
            <h2 className="instruction-step">1. Different Types of Alphabet Free:</h2>
            <p className="instructions-description">Each game comes in many varieties, each with unique mechanics and objectives.</p>
            <h3 className="instruction-step">2. First Understand the Rules:</h3>
            <p className="instructions-description">Each game has specific rules and objectives. Read these rules carefully before starting.</p>
            <ul className="instructions-list">
              <li>In this alphabet puzzle game player have 3 chances.</li>
              <li>If three alphabet puzzle game cards are matched to each other. Player wins this game.</li>
              <li>Otherwise, Restart this game again and try to match again three cards.</li>
            </ul>
            <h4 className="instruction-step">3. Set up Your Space:</h4>
            <p className="instructions-description">For a physical alphabet puzzle, ensure you have a comfortable and well-lit workspace. For the digital alphabet, adjust your device's settings to suit your environment and mind.</p>
            <h5 className="tips-title">Tips to Get Success</h5>
            <ul className="instructions-list">
              <li>Practice Regularly: If you play this game more and more, the better result you get.</li>
              <li>Learn from Mistakes: If you make a mistake, don't penic because every person learn from mistakes.</li>
              <li>Challenge Yourself: If you want to upgrade your skill, gradually increase the difficulty level and the thinking process.</li>
            </ul>
            <h6 className="instruction-step">Conclusion:</h6>
            <p className="instructions-description">This give the best opportunities to get your mental and physical strength. By following all the rules of this game,playing this game regularly and using the best method to play this game, you can upgrade your alphabet-solving skills and enjoy the satisfying feeling of cracking even the toughest alphabet puzzle. So, choose your best alphabet puzzle and dive into the fascinating world of alphabet!</p>
          </div>
          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='free online alphabet puzzle game' />
            </Link>
            <Link href="/jigsawplanet1">
              <img className='game-image' src='./images/Puzzle2.webp' alt='alphabet interactive puzzle' />
            </Link>
            <Link href="/jigsawplanet2">
              <img className='game-image' src='./images/Puzzle3.webp' alt='free alphabet game' />
            </Link>
            <Link href="/jigsawplanet3">
              <img className='game-image' src='./images/Puzzle5.webp' alt='play alphabet puzzle online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;


