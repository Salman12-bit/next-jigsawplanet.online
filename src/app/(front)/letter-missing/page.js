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
  { id: 1, value: 'D' }, { id: 2, value: 'D' },
  { id: 3, value: 'F' }, { id: 4, value: 'A' },
  { id: 5, value: 'E' }, { id: 6, value: 'E' },
  { id: 7, value: 'D' }, { id: 8, value: 'A' },
  { id: 9, value: 'B' },
];

const Lettermissing = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(4);

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
                <Link href="/letter-printable">
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
            <h1 className="instructions-title">Play Alphabet Slider Online – Free ABC Alphabet Game</h1>
            <h2 className="instruction-step">What is Alphabet Slider?</h2>
            <p className="instructions-description">
              Alphabet Slider is a classic letter puzzle where scrambled alphabet tiles must be rearranged into the correct order from A to Z. At first, the concept feels simple, but solving it requires focus, patience, and logical moves. This mix of easy rules and challenging gameplay makes it perfect for kids, parents, and adults who enjoy fun brain-training games.
            </p>

            <h2 className="instruction-step">Educational Benefits of Alphabet Slider</h2>
            <p className="instructions-description">
              For children, Alphabet Slider is more than just a game — it’s a playful learning tool. By sliding tiles into the right sequence, kids naturally strengthen letter recognition, sequencing, and memory skills. Teachers and parents value it as a safe online activity that blends education with fun, while adults use it as a light brain workout that sharpens problem-solving skills and concentration.
            </p>

            <h2 className="instruction-step">Why Everyone Loves This Puzzle</h2>
            <p className="instructions-description">
              Alphabet Slider is a universal puzzle with wide appeal. Young learners use it to master their ABCs, parents trust it as an educational tool, and seniors enjoy it as a relaxing way to stay mentally active. It’s engaging, accessible on all devices, and gives players a sense of satisfaction when the final letter clicks into place. That’s why this puzzle has remained popular across generations.
            </p>
            <h2 className="instruction-step">How to Play Alphabet Slider</h2>
            <ul className="instructions-list">
              <li>Begin with a scrambled grid of alphabet tiles and one empty space.</li>
              <li>Slide tiles into the empty space to rearrange them step by step.</li>
              <li>Continue moving the tiles until the letters are in order from A to Z.</li>
              <li>Try to complete the puzzle in as few moves as possible for an extra challenge.</li>
            </ul>

            <h2 className="instruction-step">Start Playing Alphabet Slider Today</h2>
            <p className="instructions-description">
              Alphabet Slider is the perfect mix of fun, challenge, and learning. It’s a free online alphabet puzzle that trains your brain while keeping the experience enjoyable. Play now, test your skills, and see how quickly you can arrange all the letters in order. Ready to start? Dive into the Alphabet Slider and enjoy the satisfying feeling of cracking the ABC puzzle!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Lettermissing;


