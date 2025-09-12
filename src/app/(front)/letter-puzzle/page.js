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
  { id: 1, value: 'E' }, { id: 2, value: 'F' },
  { id: 3, value: 'H' }, { id: 4, value: 'D' },
  { id: 5, value: 'C' }, { id: 6, value: 'H' },
  { id: 7, value: 'H' }, { id: 8, value: 'H' },
  { id: 9, value: 'B' },
];

const Alphabetpuzzle7 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(7);

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
                <Link href="/alphabet-letter">
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
            <h1 className="instructions-title">Letter Puzzles</h1>
            <p className="instructions-description">
              Letter puzzles are a fascinating blend of logic, literacy, and hands-on discovery. Rather than simply memorizing the alphabet, learners get the chance to physically or visually interact with letters — forming patterns, recognizing shapes, and strengthening language comprehension in a creative way. These puzzles have evolved into one of the most compelling tools in modern learning, used to encourage focus, language development, and problem-solving through active play.
            </p>

            <h2 className="instruction-step">A New Era of Alphabet Engagement</h2>
            <p className="instructions-description">
              Gone are the days when alphabet learning relied solely on flashcards or singalongs. Today’s learners thrive on interaction and exploration — and letter puzzles meet that demand with innovation. These puzzles invite users to recognize, compare, and organize letters in various formats, turning passive recognition into an active experience. Each puzzle challenges the user to think critically while still enjoying the process of play, giving a new sense of purpose to familiar characters like A, B, and C.
            </p>

            <h3 className="instruction-step">Why Hands-on Learning Still Wins</h3>
            <p className="instructions-description">
              In an increasingly digital world, tactile learning remains one of the most effective ways to build lasting connections. Letter puzzles allow learners to touch, rotate, and reposition — engaging muscles, eyes, and minds all at once. This multi-sensory interaction makes abstract concepts more concrete. It’s not just about knowing what a letter looks like, but understanding where it fits, how it compares to others, and how it can be used to form meaning.
            </p>

            <h4 className="instruction-step">Trending Now: Smart Puzzles That Grow With You</h4>
            <p className="instructions-description">
              One of the most exciting trends in letter-based learning is the shift toward adaptive puzzle design. From customizable board formats to puzzles that evolve with difficulty, smart puzzle systems are becoming more widely used in both classrooms and homes. These intelligent formats allow learners to start with basic letter recognition and progress toward spelling, word building, and even storytelling. They grow as the learner grows — a feature that parents and educators find invaluable.
            </p>

            <h5 className="instruction-step">Deep Benefits Beyond the Alphabet</h5>
            <p className="instructions-description">
              Letter puzzles do more than teach letter names. They sharpen essential life skills such as persistence, spatial awareness, and sequencing. Each time a learner makes a decision, repositions a piece, or solves a challenge, they’re practicing patience and cognitive flexibility. These soft skills are critical in daily life, forming the backbone of everything from reading and writing to analytical thinking. The humble puzzle, in this sense, becomes a gateway to intellectual development.
            </p>

            <h6 className="instruction-step">Conclusion</h6>
            <p className="instructions-description">
              Letter puzzles continue to gain popularity — not just for their educational impact, but for their ability to make learning personal, meaningful, and rewarding. As the world moves forward with technology, the tactile, thoughtful nature of puzzles remains deeply relevant. They remind us that the process of learning should be just as fulfilling as the result. In every move, match, and moment of discovery, letter puzzles offer a quiet but powerful opportunity for growth.
            </p>
          </div>
          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='free online letter puzzles puzzle game' />
            </Link>
            <Link href="/alphabet-puzzles">
              <img className='game-image' src='./images/Puzzle2.webp' alt='letter puzzles interactive puzzle' />
            </Link>
            <Link href="/jigsawplanet2">
              <img className='game-image' src='./images/Puzzle3.webp' alt='free letter puzzles game' />
            </Link>
            <Link href="/abc-puzzle">
              <img className='game-image' src='./images/Puzzle5.webp' alt='play letter puzzles puzzle online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Alphabetpuzzle7;


