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
  { id: 1, value: 'F' }, { id: 2, value: 'C' },
  { id: 3, value: 'F' }, { id: 4, value: 'D' },
  { id: 5, value: 'E' }, { id: 6, value: 'E' },
  { id: 7, value: 'C' }, { id: 8, value: 'F' },
  { id: 9, value: 'B' },
];

const letterblock = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(6);

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
      backgroundSize: "cover",
      backgroundPosition: "center",
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
                <Link href="color-letter">
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
            <h1 className="instructions-title">Play ABC Game – Fun Alphabet Learning</h1>

            <h2 className="instruction-step">What is the ABC Game?</h2>
            <p className="instructions-description">
              The ABC Game is an engaging way for children to discover the alphabet while building early literacy skills. Instead of seeing letters as static symbols, kids interact with them in playful and meaningful ways. Whether practiced at home, in the classroom, or online, this game turns learning into an exciting adventure that helps children connect language with fun.
            </p>

            <h2 className="instruction-step">Boosting Confidence Through Play</h2>
            <p className="instructions-description">
              As kids complete small challenges — such as matching letters, sliding tiles, or recognizing sounds — they enjoy moments of achievement. These successes build confidence and create a positive relationship with language learning. Over time, children develop stronger self-assurance, which makes future reading and writing activities less intimidating and more enjoyable.
            </p>

            <h2 className="instruction-step">Adapting to Every Child’s Learning Journey</h2>
            <p className="instructions-description">
              Every child learns differently, and the ABC Game adapts to that reality. Beginners may focus on simple letter recognition, while more advanced players explore phonics, spelling, or vocabulary. This flexibility ensures that the game grows with the child, offering both early exposure to the alphabet and reinforcement of existing knowledge in a fun, interactive way.
            </p>

            <h2 className="instruction-step">How to Play the ABC Game</h2>
            <ul className="instructions-list">
              <li>Start with a board or grid of shuffled alphabet tiles.</li>
              <li>Move or match the tiles to place them in the correct order from A to Z.</li>
              <li>Follow the prompts to complete levels step by step.</li>
              <li>Try to finish the puzzle with fewer moves for an extra challenge.</li>
            </ul>

            <h2 className="instruction-step">Start Playing the ABC Game Today</h2>
            <p className="instructions-description">
              The ABC Game is more than a puzzle — it’s a fun way to build language skills, boost confidence, and keep the brain active. Kids love it as a playful learning tool, while parents and teachers value its educational benefits. Ready to give it a try? Play the ABC Game online now and enjoy the perfect mix of fun and learning!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default letterblock;


