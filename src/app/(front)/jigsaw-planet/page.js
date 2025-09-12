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

const Alphabetpuzzle1 = () => {
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
          Hey there, all puzzle solvers! Each puzzle provides a new opportunity, and each
          level gives us a chance to improve our skills. This is not just amusement; it's a
          journey that sharpens your mind, opens your abilities, and lets you enjoy every
          victory.
        </p>
        <p className="welcome-text">
          Keep thinking forward, trust in yourself, and most of all, enjoy the journey.
          You’ve got the mind of a champion, and every champion knows their strength. Every
          puzzle is a victory worth celebrating! Get ready to collect all the pieces together
          into one frame! 🎉
        </p>
      </div>

      <div className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h2 className="instructions-title">How to Play the Alphabet Game</h2>
            <p className="instructions-description">
              This game gives a delightful way to challenge your mind, improve cognitive
              skills, strengthen focus, and enjoy some leisure time. Alphabet puzzles come in
              many forms, from traditional paper games to advanced digital versions. This
              guide walks you through the rules, tips, and strategies to help you get started.
            </p>

            <h3 className="instruction-step">1. Alphabet Matching Game Rules</h3>
            <p className="instructions-description">
              Each game has specific rules and objectives. Read these carefully before you
              start playing.
            </p>
            <ul className="instructions-list">
              <li>Players have 3 chances per game.</li>
              <li>If three alphabet cards match, the player wins.</li>
              <li>If not, restart the game and try again.</li>
            </ul>

            <h3 className="instruction-step">2. Set Up Your Space</h3>
            <p className="instructions-description">
              For physical puzzles, use a comfortable and well-lit space. For digital games,
              adjust your device settings so you can stay focused and relaxed.
            </p>

            <h3 className="tips-title">Alphabet Puzzle Tips</h3>
            <ul className="instructions-list">
              <li><strong>Practice Regularly:</strong> The more you play, the better you get.</li>
              <li><strong>Learn from Mistakes:</strong> Don’t panic—mistakes help you improve.</li>
              <li><strong>Challenge Yourself:</strong> Increase difficulty gradually to boost your skills.</li>
            </ul>

            <h3 className="instruction-step">Conclusion</h3>
            <p className="instructions-description">
              Alphabet puzzles are a great way to boost mental sharpness and focus. By
              following the rules, practicing often, and applying the best strategies, you’ll
              improve your skills and enjoy the satisfying feeling of solving even the
              toughest puzzles. Choose your favorite alphabet challenge and dive into the
              world of letters today!
            </p>
          </div>

          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className="game-image" src="./images/Puzzle1.webp" alt="free online alphabet puzzle game" />
            </Link>
            <Link href="/jigsawplanet1">
              <img className="game-image" src="./images/Puzzle2.webp" alt="alphabet interactive puzzle" />
            </Link>
            <Link href="/jigsawplanet2">
              <img className="game-image" src="./images/Puzzle3.webp" alt="free alphabet game" />
            </Link>
            <Link href="/jigsawplanet3">
              <img className="game-image" src="./images/Puzzle5.webp" alt="play alphabet puzzle online" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};


export default Alphabetpuzzle1;


