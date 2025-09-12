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
  { id: 3, value: 'R' }, { id: 4, value: 'Q' },
  { id: 5, value: 'Q' }, { id: 6, value: 'N' },
  { id: 7, value: 'H' }, { id: 8, value: 'R' },
  { id: 9, value: 'R' },
];

const Alphabetpuzzle15 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(15);

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
                <Link href="/abc-random">
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
            <h1 className="instructions-title">1 Grade Games</h1>
            <p className="instructions-description">
              1 grade games serve as a bridge between early learning and independent thinking, offering young learners a playful yet purposeful environment to practice essential skills. These games are designed with age-appropriate challenges that align with first-grade learning goals, from literacy and math to memory, logic, and emotional awareness. More than entertainment, they function as development tools that support curiosity, confidence, and critical thinking.
            </p>

            <h2 className="instruction-step">Encouraging Growth Through Active Exploration</h2>
            <p className="instructions-description">
              At the heart of effective 1 grade games is a balance between guidance and discovery. They give children the space to explore new concepts through interactive formats that don’t feel like formal lessons. Whether recognizing patterns, making choices, or sequencing steps, each moment of gameplay is packed with learning potential. This hands-on interaction makes abstract ideas more accessible, helping children understand through doing — a method that fosters deeper retention and enthusiasm for learning.
            </p>

            <h3 className="instruction-step">Strengthening Foundational Literacy and Numeracy</h3>
            <p className="instructions-description">
              First grade is a critical period for mastering the basics of reading, writing, and arithmetic. Games targeted at this level often feature structured content that reinforces phonics, sight words, counting, and simple equations in a more engaging way than worksheets or repetition drills. These structured formats provide opportunities for reinforcement through visual, auditory, and tactile cues. The result is an immersive experience that helps turn core academic subjects into something learners actively enjoy and internalize.
            </p>

            <h4 className="instruction-step">Building Emotional Intelligence Through Play</h4>
            <p className="instructions-description">
              Emotional and social learning also plays a key role in 1st grade development. Many games designed for this age group incorporate decision-making, turn-taking, empathy, and resilience as part of their structure. These soft skills are often learned indirectly — through character interactions, feedback systems, or even how mistakes are handled during gameplay. Such subtle layers help shape a child’s emotional maturity, giving them tools to manage their feelings, communicate clearly, and navigate social spaces with confidence.
            </p>

            <h5 className="instruction-step">Creating Positive Learning Habits Early On</h5>
            <p className="instructions-description">
              The experiences children have with learning in the first grade often shape their attitude toward education for years to come. Games that make learning feel rewarding — not pressured — contribute to a growth mindset. They encourage persistence, self-direction, and the willingness to try again after failure. This mindset goes far beyond a single subject or skill. It helps children become lifelong learners, equipped to face future academic challenges with curiosity and resilience rather than anxiety or avoidance.
            </p>
          </div>

          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='1st grade games - fun jigsaw puzzle activity for kids' />
            </Link>
            <Link href="/slider-game">
              <img className='game-image' src='./images/Puzzle2.webp' alt='interactive slider puzzle - 1st grade games for learning' />
            </Link>
            <Link href="/letter-puzzle">
              <img className='game-image' src='./images/Puzzle3.webp' alt='letter puzzle challenge - 1st grade games for kids' />
            </Link>
            <Link href="/alphabet-letter">
              <img className='game-image' src='./images/Puzzle5.webp' alt='alphabet letter puzzle - 1st grade educational games online' />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Alphabetpuzzle15;


