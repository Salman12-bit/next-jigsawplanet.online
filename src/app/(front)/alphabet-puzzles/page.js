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
  { id: 1, value: 'E' }, { id: 2, value: 'E' },
  { id: 3, value: 'F' }, { id: 4, value: 'D' },
  { id: 5, value: 'C' }, { id: 6, value: 'C' },
  { id: 7, value: 'E' }, { id: 8, value: 'E' },
  { id: 9, value: 'B' },
];

const Alphabetpuzzle5 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(5);

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
              <h3 className='level-color'>Match The Pairs Level {level}</h3>
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
                <Link href="abc-puzzle">
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
            <h1 className="instructions-title">Alphabet Slider Puzzle</h1>
            <p className="instructions-description">
              Alphabet Slider Puzzle represents a modern blend of problem-solving and letter recognition, bringing a fresh perspective to early childhood development. This concept takes the structure of classic sliding challenges and introduces alphabet elements, making it both intellectually stimulating and educationally valuable. The experience of working through these puzzles is not just about reaching a solution — it’s about engaging the brain, improving visual coordination, and building a stronger relationship with language through movement.
            </p>

            <h2 className="instruction-step">A Puzzle Designed to Activate the Mind</h2>
            <p className="instructions-description">
              There’s something satisfying about watching a disordered puzzle gradually fall into place. Alphabet Slider Puzzles are especially rewarding because they challenge users to recognize sequences, make predictions, and plan. Each move feels intentional, and every letter placement builds upon the last. It’s an immersive task that requires attention, patience, and logical thought — all while reinforcing familiarity with letters in a non-repetitive, interactive format.
            </p>

            <h2 className="instruction-step">An Innovative Way to Reinforce Letter Order</h2>
            <p className="instructions-description">
              Letter order is one of the earliest skills children learn on their journey to reading. Alphabet Slider Puzzles unexpectedly strengthen this understanding. Rather than simply reciting or copying letters, children physically or visually manipulate them to form a logical sequence. This physical interaction with language deepens retention, helping learners form long-lasting connections to alphabetical patterns while enjoying the satisfying nature of puzzle-solving.
            </p>

            <h2 className="instruction-step">A Stimulating Break from Traditional Activities</h2>
            <p className="instructions-description">
              In an age where educational tools often look and feel the same, Alphabet Slider Puzzles offer something different. They break away from worksheets and flashcards, inviting learners to approach the alphabet as a challenge to solve, not a list to memorize. This shift in approach creates an experience that is less about repetition and more about discovery, giving the brain a fresh type of workout that combines critical thinking with literacy practice.
            </p>

            <h2 className="instruction-step">Crossing Over Into Cognitive Development</h2>
            <p className="instructions-description">
              Beyond their connection to letters, these puzzles serve a broader purpose in overall brain development. They improve spatial awareness, planning skills, and focus. By analyzing the current state of the puzzle and making decisions about the next best move, users learn how to evaluate, adapt, and commit to strategies. These are skills that benefit not just early learners but also older children and even adults who enjoy intellectually stimulating games.
            </p>

            <h2 className="instruction-step">Conclusion</h2>
            <p className="instructions-description">
              Alphabet Slider Puzzle stands out as a meaningful way to combine mental strategy with language exposure. It brings letters to life through logic and movement, inviting users to engage more deeply with sequencing and problem-solving. Whether used occasionally or as a regular part of a learning routine, it offers a refreshing alternative to conventional methods — one that challenges the mind and supports development without ever feeling like a chore.
            </p>
          </div>
          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='free online alphabet slider puzzle puzzle game' />
            </Link>
            <Link href="/jigsawplanet1">
              <img className='game-image' src='./images/Puzzle2.webp' alt='alphabet slider puzzle interactive puzzle' />
            </Link>
            <Link href="/jigsawplanet2">
              <img className='game-image' src='./images/Puzzle3.webp' alt='free alphabet slider puzzle game' />
            </Link>
            <Link href="/jigsawplanet3">
              <img className='game-image' src='./images/Puzzle5.webp' alt='play alphabet slider puzzle puzzle online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Alphabetpuzzle5;


