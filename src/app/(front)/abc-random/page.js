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

const Alphabetpuzzle16 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(16);

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
                <Link href="/math-game">
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
            <h1 className="instructions-title">123ABC Learning Games</h1>
            <p className="instructions-description">
              123ABC Learning Games offer a dynamic combination of early math and literacy development in a format tailored for young learners. These interactive experiences are thoughtfully designed to foster curiosity, reinforce key concepts, and support early skill acquisition through repetition, structure, and play. By focusing on numbers and letters in tandem, these games align with the developmental stages of preschool and early elementary students who are beginning to build foundational academic knowledge.
            </p>

            <h2 className="instruction-step">Bridging Numerical Awareness and Alphabet Recognition</h2>
            <p className="instructions-description">
              In early education, numbers and letters are often introduced side-by-side — and for good reason. Combining these elements in a unified learning format helps children form cognitive connections across domains. 123ABC Learning Games capitalize on this by integrating basic counting tasks with letter identification, encouraging children to shift seamlessly between numerical and verbal processing. This holistic design allows for a smoother learning curve and a broader understanding of how symbolic systems work.
            </p>

            <h3 className="instruction-step">Engaging the Senses Through Structured Interaction</h3>
            <p className="instructions-description">
              Young learners absorb information best when they can see it, hear it, and engage with it directly. These games provide multisensory experiences that include visual cues, audio reinforcement, and tactile activities. Whether identifying letters by shape or matching numbers with quantity, children are encouraged to learn through active exploration. This sensory layering increases retention, boosts motivation, and ensures that learning remains both impactful and enjoyable.
            </p>

            <h4 className="instruction-step">Supporting Early Confidence in Independent Learning</h4>
            <p className="instructions-description">
              Confidence is essential in early learning. When children feel capable, they become more eager to take on new challenges. 123ABC Learning Games are built with gentle progression and instant feedback to reinforce effort over perfection. This structure nurtures independent engagement by letting learners practice at their own pace, make choices, and experience success through manageable steps. The result is a stronger sense of ownership in their learning journey.
            </p>

            <h5 className="instruction-step">Flexible Application Across Developmental Stages</h5>
            <p className="instructions-description">
              The simplicity of combining numbers and letters makes 123ABC Learning Games adaptable to various learning levels and styles. From early learners just beginning to differentiate symbols to more advanced students practicing fluency, the content can be scaled in difficulty and depth. This versatility allows educators and caregivers to use the same format across different contexts — from home environments to group learning spaces — while still delivering meaningful educational experiences.
            </p>
          </div>
          <div className="game-image-container">
            <Link href="/math-magician">
              <img className='game-image' src='./images/Puzzle1.webp' alt='123abc math magician game - fun number puzzle for kids' />
            </Link>
            <Link href="/slider-game">
              <img className='game-image' src='./images/Puzzle2.webp' alt='123abc slider puzzle - interactive learning game for children' />
            </Link>
            <Link href="/math-game">
              <img className='game-image' src='./images/Puzzle3.webp' alt='123abc letter puzzle - alphabet learning challenge for kids' />
            </Link>
            <Link href="/alphabet-letter">
              <img className='game-image' src='./images/Puzzle5.webp' alt='123abc alphabet letter puzzle - early education games online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Alphabetpuzzle16;


