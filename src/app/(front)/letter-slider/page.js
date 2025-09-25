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
  { id: 1, value: 'J' }, { id: 2, value: 'M' },
  { id: 3, value: 'M' }, { id: 4, value: 'K' },
  { id: 5, value: 'L' }, { id: 6, value: 'H' },
  { id: 7, value: 'H' }, { id: 8, value: 'I' },
  { id: 9, value: 'H' },
];

const puzzleslider = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(8);

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
                <Link href="/abc-puzzle">
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
            <h1 className="instructions-title">Slide Puzzle Solver</h1>
            <p className="instructions-description">
              A slide puzzle solver represents the intersection of logic and automation — a digital or algorithmic system created to find solutions for tile-based rearrangement challenges. Rather than manually shifting pieces one by one, these solvers calculate optimized sequences, revealing the most efficient route from jumbled confusion to a perfectly ordered grid. Often powered by advanced computation, heuristics, and pattern recognition, they are used for both educational insights and complex problem-solving research.
            </p>

            <h2 className="instruction-step">How Algorithms Redefine Puzzle Complexity</h2>
            <p className="instructions-description">
              Slide puzzles, while simple in concept, carry immense depth when analyzed through the lens of computation. Solvers often rely on algorithms like A*, Dijkstra’s, or iterative deepening to parse possible moves and predict outcomes. These systems measure distances, count misplaced tiles, and assess configuration efficiency — all in milliseconds. By doing so, they remove the trial-and-error aspect of solving and instead deliver streamlined, provably optimal paths. The result is a clearer understanding of complexity and structure hidden beneath the surface.
            </p>

            <h3 className="instruction-step">Applications in Cognitive Research and Learning</h3>
            <p className="instructions-description">
              Slide puzzle solvers go beyond casual interest; they are used in research settings to study decision-making, memory modeling, and strategic behavior. Educational platforms use solvers to break down the logic behind puzzle design, giving learners a way to visualize paths and patterns. This clarity transforms problem-solving into a teachable skill. Rather than presenting just the end result, many solvers include step-by-step breakdowns — making them valuable tools in exploring sequential thinking and understanding logical constraints.
            </p>

            <h4 className="instruction-step">Technological Innovation in Classic Formats</h4>
            <p className="instructions-description">
              The rise of artificial intelligence and machine learning has reshaped the way we approach puzzle-solving. A modern slide puzzle solver is no longer just a calculator of moves — it may use predictive modeling, adaptive feedback, and even image recognition. These solvers are integrated into mobile apps, educational tools, and AI labs, reflecting a broader trend of enhancing classic challenges with smart, evolving systems. They showcase how technology can enrich our interaction with even the most analog of formats.
            </p>

            <h5 className="instruction-step">Efficiency Meets Elegance in Problem Resolution</h5>
            <p className="instructions-description">
              One of the most remarkable traits of a well-designed slide puzzle solver is its ability to find beauty in order. Each move calculated is not just about function but about elegance — reducing clutter, minimizing waste, and presenting a clean, clear path forward. This harmony between logic and structure has inspired designers, engineers, and educators alike. It demonstrates how a systematic approach to problem-solving can be not only effective but also aesthetically satisfying in its simplicity and precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default puzzleslider;


