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
  { id: 3, value: 'R' }, { id: 4, value: 'O' },
  { id: 5, value: 'Q' }, { id: 6, value: 'N' },
  { id: 7, value: 'H' }, { id: 8, value: 'O' },
  { id: 9, value: 'O' },
];

const Alphabetpuzzle17 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(17);

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
                <Link href="/unblocked-game">
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
            <h1 className="instructions-title">Math - Quiz Games</h1>
            <p className="instructions-description">
              Math - Quiz Games blend logical thinking with the thrill of fast-paced questioning, making numerical challenges both stimulating and rewarding. These experiences aren't built for memorization alone — they activate problem-solving skills and mental agility, encouraging learners to engage with math in a format that’s immediate, responsive, and rewarding. By transforming equations into questions and solutions into achievements, this format has become a favorite in educational circles and beyond.
            </p>

            <h2 className="instruction-step">Reframing Math as an Active Process</h2>
            <p className="instructions-description">
              Traditional math instruction often focuses on drills and static problem sets. In contrast, math quiz games introduce energy into the equation. Players are invited to apply knowledge in rapid succession, making calculations under pressure, and refining logic on the spot. This real-time application turns abstract principles into practical tasks, helping learners grasp mathematical concepts with speed and confidence. The quiz format doesn’t just teach — it challenges, and in doing so, sharpens the mind.
            </p>

            <h3 className="instruction-step">Adapting to Different Cognitive Styles</h3>
            <p className="instructions-description">
              Not all students learn math the same way. Quiz-based formats cater to a range of thinking styles — from those who excel with quick recall to those who thrive under structured pressure. Visual learners benefit from formatted layouts and visual clues. Auditory learners respond well to spoken prompts or timed announcements. Kinesthetic learners engage more deeply when there's interaction tied to every question. This adaptability is part of what makes quiz games so widely effective.
            </p>

            <h4 className="instruction-step">Encouraging Growth Through Feedback Loops</h4>
            <p className="instructions-description">
              Immediate feedback is a defining feature of math quiz games. Rather than waiting for correction, learners receive real-time validation of their thinking. When an answer is correct, it builds momentum. When it's incorrect, the game offers instant redirection or hints. This loop reinforces knowledge while correcting misconceptions on the spot, making the experience both educational and responsive. It's a system that naturally supports improvement through active participation and repetition.
            </p>

            <h5 className="instruction-step">Motivation Through Competitive Structure</h5>
            <p className="instructions-description">
              The quiz format introduces elements of scoring, timing, and progression — each one adding a layer of excitement and motivation. Whether playing solo or in a group, the competitive element encourages users to push their limits, aim for higher accuracy, and build confidence through performance. For many learners, math transforms from a subject of pressure into one of progress, thanks to the structured yet playful nature of quiz-style games.
            </p>
          </div>

          <div className="game-image-container">
            <Link href="/math-magician">
              <img className='game-image' src='./images/Puzzle1.webp' alt='math - quiz game for kids with fun magical numbers challenge' />
            </Link>
            <Link href="/slider-game">
              <img className='game-image' src='./images/Puzzle2.webp' alt='interactive math - quiz game with sliding number puzzles' />
            </Link>
            <Link href="/math-game">
              <img className='game-image' src='./images/Puzzle3.webp' alt='math - quiz game for children with letter and number mix' />
            </Link>
            <Link href="/alphabet-letter">
              <img className='game-image' src='./images/Puzzle5.webp' alt='educational math - quiz game with alphabet and number learning' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Alphabetpuzzle17;


