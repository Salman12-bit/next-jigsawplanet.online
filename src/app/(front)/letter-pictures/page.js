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
  { id: 1, value: 'J' }, { id: 2, value: 'I' },
  { id: 3, value: 'K' }, { id: 4, value: 'K' },
  { id: 5, value: 'L' }, { id: 6, value: 'K' },
  { id: 7, value: 'K' }, { id: 8, value: 'I' },
  { id: 9, value: 'H' },
];

const Puzzle1 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(11);

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
            <h1 className="instructions-title">How to Play Bingo Slide Cards</h1>
            <p className="instructions-description">
              Bingo slide cards are a fun and engaging way to challenge your mind, sharpen your thinking, and enjoy some quality leisure time. Whether you’re playing with traditional paper bingo slide cards or a digital version, this game is perfect for boosting your focus and decision-making skills. In this guide, you’ll learn everything you need to know about how to play bingo slide cards, including different types, basic rules, setup tips, and strategies for success.
            </p>
            <h2 className="instruction-step">1. Types of Free Bingo Slide Cards</h2>
            <p className="instructions-description">
              There are several variations of bingo slide cards available—some are classic and simple, while others are more modern and interactive. You can find printable versions or enjoy digital formats with sound and animation features.
            </p>

            <h3 className="instruction-step">2. Understand the Rules</h3>
            <p className="instructions-description">
              Every bingo slide cards game has its own unique rules, but the goal remains the same: match the correct cards to win. Make sure to read the instructions before starting.
            </p>

            <ul className="instructions-list">
              <li>Each player gets 3 chances to win.</li>
              <li>The goal is to match 3 bingo slide cards that align with each other.</li>
              <li>If all 3 cards match correctly, the player wins the game.</li>
              <li>If not, restart the bingo slide cards game and try again.</li>
            </ul>

            <h4 className="instruction-step">3. Set Up Your Space</h4>
            <p className="instructions-description">
              For a better gaming experience, set up your play area properly. If you’re using physical bingo slide cards, play in a bright and comfy space. For digital versions, adjust your device's brightness and volume for clear visibility and audio feedback.
            </p>

            <h5 className="tips-title">Tips for Success</h5>
            <ul className="instructions-list">
              <li><strong>Stay Calm:</strong> Keep the game fun and stress-free. Take breaks if needed.</li>
              <li><strong>Practice Often:</strong> The more you play bingo slide cards, the better your skills become.</li>
              <li><strong>Learn from Mistakes:</strong> Don’t be afraid to lose—each round helps you improve.</li>
              <li><strong>Challenge Yourself:</strong> Try higher difficulty levels to push your abilities further.</li>
            </ul>

            <h6 className="instruction-step">Conclusion</h6>
            <p className="instructions-description">
              Bingo slide cards games are an enjoyable way to train your brain, relax, and have a good time. Whether you're a beginner or a seasoned player, mastering the rules and using smart strategies can help you succeed. So pick your favorite bingo slide cards game, get ready, and enjoy the challenge!
            </p>
          </div>

          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='free online bingo slide cards puzzle game' />
            </Link>
            <Link href="/slider-game">
              <img className='game-image' src='./images/Puzzle2.webp' alt='bingo slide cards interactive puzzle' />
            </Link>
            <Link href="/letter-puzzle">
              <img className='game-image' src='./images/Puzzle3.webp' alt='free bingo slide cards game' />
            </Link>
            <Link href="/alphabet-letter">
              <img className='game-image' src='./images/Puzzle5.webp' alt='play bingo slide cards puzzle online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;


