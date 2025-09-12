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
  { id: 3, value: 'I' }, { id: 4, value: 'I' },
  { id: 5, value: 'L' }, { id: 6, value: 'K' },
  { id: 7, value: 'K' }, { id: 8, value: 'I' },
  { id: 9, value: 'M' },
];

const Alphabetpuzzle9 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(9);

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
                <Link href="/slider-game">
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
            <h1 className="instructions-title">Slider Puzzle</h1>
            <p className="instructions-description">
              The slider puzzle is a minimalist masterpiece of design and challenge, where simplicity meets strategy. Built around a grid with movable tiles and a single blank space, it pushes users to think ahead, test patterns, and refine their sense of logic. Far from being a forgotten classic, the slider puzzle has maintained its popularity due to its satisfying complexity and the mental focus it demands. As puzzles go, few manage to offer so much from so little.
            </p>

            <h2 className="instruction-step">Visual Logic and Pattern Thinking</h2>
            <p className="instructions-description">
              At first glance, the mechanics of a slider puzzle might appear mechanical. But behind those sliding squares lies a complex system of logic and visual mapping. To align each piece correctly, the solver must interpret the layout, anticipate how tiles interact, and often take multiple steps backward to move forward. This form of visual logic is powerful — engaging memory, patience, and foresight all at once. The puzzle encourages the brain to work spatially, fostering a mental environment rich in cognitive development and creative problem-solving.
            </p>

            <h3 className="instruction-step">A Puzzle That Rewards Precision</h3>
            <p className="instructions-description">
              Unlike other casual puzzles where guessing might occasionally work, the slider puzzle is unforgiving when approached with randomness. Success comes only through deliberate, careful planning. Each slide must be intentional, and small missteps can unravel progress made over several minutes. That’s what gives the slider puzzle its enduring charm: it refuses shortcuts. Every solution is earned, and every final move is the result of focused thought. It's not about speed — it's about accuracy and method.
            </p>

            <h4 className="instruction-step">Minimal Design, Maximum Challenge</h4>
            <p className="instructions-description">
              The slider puzzle's beauty lies in its visual simplicity. Often made with numbers, letters, or images broken into blocks, the structure is clean and easy to understand. Yet beneath this minimal design is a complex series of interconnected problems. This contrast is what hooks players — the idea that such a basic format can deliver such an intense mental workout. It’s a brilliant reminder that challenge doesn’t require chaos. In fact, the most enduring puzzles are often the ones that strip everything away but the problem itself.
            </p>

            <h5 className="instruction-step">Enduring Appeal Across Generations</h5>
            <p className="instructions-description">
              While trends in entertainment come and go, the slider puzzle remains timeless. It's found in classrooms, puzzle books, mobile apps, and even coffee tables — always ready to test a new generation of thinkers. It appeals to those who enjoy structure, logic, and the quiet satisfaction of solving something piece by piece. That cross-generational appeal makes it more than just a nostalgic object; it’s a living, evolving form of brain training that adapts without needing to change its core design.
            </p>
          </div>

          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='free online slider puzzle puzzle game' />
            </Link>
            <Link href="/jigsawplanet1">
              <img className='game-image' src='./images/Puzzle2.webp' alt='slider puzzle interactive puzzle' />
            </Link>
            <Link href="/letter-puzzle">
              <img className='game-image' src='./images/Puzzle3.webp' alt='free slider puzzle game' />
            </Link>
            <Link href="/alphabet-letter">
              <img className='game-image' src='./images/Puzzle5.webp' alt='play slider puzzle puzzle online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Alphabetpuzzle9;


