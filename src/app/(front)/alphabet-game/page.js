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

const Alphabetpuzzle14 = () => {
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
                <Link href="/math-magician">
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
            <h1 className="instructions-title">Alphabet Game Online</h1>
            <p className="instructions-description">
              Alphabet Game Online reflects the modern shift in educational experiences — a seamless combination of digital interaction and foundational language learning. These games go beyond basic entertainment, serving as tools that subtly build early literacy while engaging users with intuitive, colorful, and responsive design. The digital environment provides endless possibilities for repetition, reinforcement, and positive association with letters, making it a popular choice among both educators and parents.
            </p>

            <h2 className="instruction-step">Letter Learning in a Digital Language</h2>
            <p className="instructions-description">
              In today’s tech-integrated world, children are growing up surrounded by screens. Alphabet-based games online tap into this digital familiarity, introducing letters and phonetic principles in a way that feels natural rather than forced. The design of these games tends to focus on quick recognition, responsive feedback, and bite-sized engagement — a format that aligns perfectly with the learning styles of young users. Rather than relying on repetition alone, they offer dynamic, visual strategies to build understanding.
            </p>

            <h3 className="instruction-step">Engagement Through Interactive Elements</h3>
            <p className="instructions-description">
              One reason Alphabet Game Online formats have gained traction is their immersive nature. With animations, sound effects, and touch-based controls, the experience becomes multi-sensory. This interactivity creates a feedback loop where the learner is constantly responding and adjusting — a more effective method for absorbing new information. Unlike static worksheets or paper drills, the online format reacts in real-time, reinforcing right answers and gently correcting mistakes, helping users stay motivated and curious throughout their session.
            </p>

            <h4 className="instruction-step">Supporting Different Learning Styles</h4>
            <p className="instructions-description">
              No two learners approach language the same way. Alphabet-based online games accommodate this beautifully by offering variations in pace, visual emphasis, and audio cues. For visual learners, colorful cues make recognition easier. For auditory learners, spoken prompts enhance letter-sound association. Kinesthetic users benefit from dragging, tapping, or clicking elements — building understanding through action. This variety ensures a more inclusive learning process that supports diverse educational needs.
            </p>

            <h5 className="instruction-step">Progress That Encourages Independence</h5>
            <p className="instructions-description">
              One of the often-overlooked strengths of Alphabet Game Online formats is how they promote self-guided learning. Children can move at their own speed, revisit challenges, and gradually build mastery without external pressure. This independent progress helps them develop confidence in their abilities while giving parents and educators insight into skill growth. The format encourages both perseverance and autonomy — two traits that are just as important as letter knowledge itself in a child’s educational journey.
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


export default Alphabetpuzzle14;


