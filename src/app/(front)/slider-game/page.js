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
  { id: 3, value: 'G' }, { id: 4, value: 'G' },
  { id: 5, value: 'L' }, { id: 6, value: 'K' },
  { id: 7, value: 'G' }, { id: 8, value: 'I' },
  { id: 9, value: 'G' },
];

const Alphabetpuzzle10 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(10);

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
                <Link href="/letter-pictures">
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
            <h1 className="instructions-title">Picture to Puzzle</h1>
            <p className="instructions-description">
              Transforming a picture into a puzzle is more than a design choice — it’s a fusion of memory, meaning, and challenge. This concept allows personal or familiar images to be reimagined as interactive experiences, giving new life to everyday visuals. Whether it’s a family photo, a scenic landscape, or a favorite artwork, turning a picture into a puzzle changes how we engage with the image — inviting focus, attention, and reflection piece by piece.
            </p>

            <h2 className="instruction-step">The Emotional Value of Personal Imagery</h2>
            <p className="instructions-description">
              What makes a puzzle truly special isn’t just its shape or difficulty — it’s the story behind the image. When people turn their own photos into puzzles, the result becomes more than just a brain exercise. It transforms into a personal artifact. Every piece carries emotional weight: a remembered face, a familiar setting, a captured moment in time. This emotional connection elevates the puzzle experience, blending nostalgia with the satisfaction of completion.
            </p>

            <h3 className="instruction-step">Visual Complexity in Fragmented Form</h3>
            <p className="instructions-description">
              A photograph may seem straightforward when viewed as a whole, but once divided into small, irregular sections, it becomes a test of perception. Shifting shadows, subtle color gradients, or recurring patterns introduce new challenges when no longer viewed in context. The conversion of a picture to puzzle format amplifies the complexity, turning ordinary details into clues. Each fragment forces the mind to slow down and see what it might have otherwise overlooked in the full image.
            </p>

            <h4 className="instruction-step">Creativity Meets Functionality</h4>
            <p className="instructions-description">
              There’s a quiet artistry in breaking down an image into components that must be reassembled. Designers, artists, and photographers are increasingly embracing this process to add depth to their work. From personalized gifts to branding visuals, picture-to-puzzle transformations allow static images to take on a kinetic form. This approach combines aesthetics with interaction — not only do we see the picture, we rebuild it, piece by piece, with our own hands or through digital tools.
            </p>

            <h5 className="instruction-step">A Unique Intersection of Art and Problem-Solving</h5>
            <p className="instructions-description">
              Converting a picture into a puzzle sits at the crossroads of creativity and logic. It requires thoughtful composition and a strategic breakdown of elements to maintain both artistic integrity and puzzle solvability. The process celebrates both sides of the brain — visual appreciation and methodical planning. As a result, the finished product becomes more than a passive image or a clever challenge. It becomes a balanced experience that satisfies both imagination and intellect.
            </p>
          </div>

          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='free online puzzlee puzzle game' />
            </Link>
            <Link href="/slider-puzzles">
              <img className='game-image' src='./images/Puzzle2.webp' alt='puzzlee interactive puzzle' />
            </Link>
            <Link href="/letter-puzzle">
              <img className='game-image' src='./images/Puzzle3.webp' alt='free puzzlee game' />
            </Link>
            <Link href="/alphabet-letter">
              <img className='game-image' src='./images/Puzzle5.webp' alt='play puzzlee puzzle online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Alphabetpuzzle10;


