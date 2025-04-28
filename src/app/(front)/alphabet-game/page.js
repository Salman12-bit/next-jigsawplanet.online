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
  { id: 3, value: 'L' }, { id: 4, value: 'K' },
  { id: 5, value: 'N' }, { id: 6, value: 'N' },
  { id: 7, value: 'H' }, { id: 8, value: 'N' },
  { id: 9, value: 'N' },
];

const Puzzle1 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(14);

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
            <h1 className="instructions-title">How to Play Alphabet Games Online</h1>

            <p className="instructions-description">
              Alphabet games online are fun and educational activities where you play with letters to complete different challenges. These games help you learn letters, improve spelling, and get better at recognizing words. This guide will show you how to play alphabet games online, including the types of games, basic rules, and tips for success.
            </p>

            <h2 className="instruction-step">1. Types of Alphabet Games Online</h2>
            <p className="instructions-description">
              Alphabet games online come in many forms:
              <ul>
                <li><strong>Letter Matching:</strong> Find and match the same letters.</li>
                <li><strong>Alphabet Puzzles:</strong> Put the letters in the correct order to complete the alphabet.</li>
                <li><strong>Word Building:</strong> Use letters to create simple words.</li>
                <li><strong>Letter Coloring:</strong> Color spaces that match certain letters to create a picture.</li>
              </ul>
              All these games make learning letters easy and fun!
            </p>

            <h3 className="instruction-step">2. Understand the Rules</h3>
            <p className="instructions-description">
              The rules are simple:
            </p>
            <ul className="instructions-list">
              <li>Follow the game’s instructions carefully.</li>
              <li>Match or use the right letter to move forward.</li>
              <li>Complete the tasks to finish the game.</li>
              <li>Take your time and have fun learning.</li>
            </ul>

            <h4 className="instruction-step">3. Set Up Your Game Space</h4>
            <p className="instructions-description">
              Before you start:
              <ul>
                <li>Find a quiet spot with good lighting.</li>
                <li>Use a device like a tablet, phone, or computer with a clear screen.</li>
                <li>Make sure your internet is working well.</li>
                <li>Be ready to have fun while learning letters!</li>
              </ul>
              A good setup helps you stay focused and enjoy the game more.
            </p>

            <h5 className="tips-title">Tips for Success</h5>
            <ul className="instructions-list">
              <li><strong>Pay Attention:</strong> Look carefully at each letter and follow directions.</li>
              <li><strong>Take Your Time:</strong> Don't rush. It's okay to go slow and get it right.</li>
              <li><strong>Practice Often:</strong> The more you play, the better you will get at recognizing letters.</li>
              <li><strong>Stay Positive:</strong> Every time you play, you are getting better!</li>
              <li><strong>Challenge Yourself:</strong> Try harder levels when you feel ready.</li>
            </ul>

            <h6 className="instruction-step">Conclusion</h6>
            <p className="instructions-description">
              Alphabet games online are a fun way to learn and play at the same time. Whether you are matching letters, building words, or solving puzzles, every game helps you grow your skills. Start playing alphabet games online today and become a letter expert!
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


