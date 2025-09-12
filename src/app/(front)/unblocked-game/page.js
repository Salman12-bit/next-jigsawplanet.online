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
  { id: 3, value: 'U' }, { id: 4, value: 'O' },
  { id: 5, value: 'Q' }, { id: 6, value: 'N' },
  { id: 7, value: 'U' }, { id: 8, value: 'U' },
  { id: 9, value: 'O' },
];

const Alphabetpuzzle18 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(18);

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
            <h1 className="instructions-title">2048 Unblocked Games</h1>
            <p className="instructions-description">
              2048 unblocked games represent a distinct blend of numerical logic, movement-based strategy, and minimalist design. Unlike many flashy or fast-paced digital distractions, this puzzle format draws players in with calm yet mentally engaging gameplay. It’s a rare example of a casual experience that offers depth without overwhelming the user — a clean interface hiding a surprisingly complex challenge behind its simplicity.
            </p>

            <h2 className="instruction-step">Tactile Thinking in a Digital Format</h2>
            <p className="instructions-description">
              What makes 2048 stand out is its physical-like movement experience. Although it exists in digital space, the way tiles shift across the grid feels almost tangible. Players must anticipate motion, consider direction, and calculate potential combinations several moves ahead. This type of mental mapping mimics spatial thinking, giving the brain a workout that resembles both problem-solving and pattern recognition exercises. It’s logic in motion, constantly shifting, and endlessly replayable.
            </p>

            <h3 className="instruction-step">The Zen of Numeric Merging</h3>
            <p className="instructions-description">
              While the mechanics rely on math, 2048 unblocked games aren’t about solving equations. They’re about synthesis — the act of combining equal values to reach higher ones. This merging process is meditative in its rhythm. Each swipe either creates opportunity or complexity. The game doesn’t punish wrong moves aggressively but instead nudges players to refine their approach, making the experience one of quiet strategy rather than frantic reaction. It rewards planning, pacing, and intuition.
            </p>

            <h4 className="instruction-step">Minimalism With Unexpected Depth</h4>
            <p className="instructions-description">
              With a basic 4x4 grid and only numbered tiles, the aesthetic of 2048 might appear barebones at first. But that simplicity is its greatest strength. Without distractions or unnecessary mechanics, the entire experience is centered on decision-making. Each move impacts the next. There’s no luck, no randomness in outcome — only layers of consequences unfolding from previous choices. This minimalist foundation makes the game elegant and intellectually satisfying for players who prefer depth over distraction.
            </p>

            <h5 className="instruction-step">Why Accessibility Enhances Its Appeal</h5>
            <p className="instructions-description">
              The term “unblocked” isn’t just about technical availability — it also reflects how intuitive and unrestricted the gameplay feels. Anyone can jump in, regardless of age or skill level, and immediately understand the goal. There are no instructions needed, no setup, no learning curve. That ease of access is part of what gives 2048 unblocked games their universal appeal. They strip away barriers, letting players engage with pure, unfiltered logic in its most distilled form.
            </p>
          </div>
          <div className="game-image-container">
            <Link href="/math-magician">
              <img className='game-image' src='./images/Puzzle1.webp' alt='2048 unblocked games - magical number puzzle challenge for kids' />
            </Link>
            <Link href="/slider-game">
              <img className='game-image' src='./images/Puzzle2.webp' alt='2048 unblocked games - interactive sliding number tile game' />
            </Link>
            <Link href="/math-game">
              <img className='game-image' src='./images/Puzzle3.webp' alt='2048 unblocked games - fun mix of numbers and strategy for children' />
            </Link>
            <Link href="/alphabet-letter">
              <img className='game-image' src='./images/Puzzle5.webp' alt='2048 unblocked games - learning numbers and letters through puzzles' />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Alphabetpuzzle18;


