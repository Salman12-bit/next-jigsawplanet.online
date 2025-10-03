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
  { id: 1, value: 'D' }, { id: 2, value: 'E' },
  { id: 3, value: 'F' }, { id: 4, value: 'F' },
  { id: 5, value: 'E' }, { id: 6, value: 'G' },
  { id: 7, value: 'E' }, { id: 8, value: 'A' },
  { id: 9, value: 'B' },
];

const letterprintable = () => {
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
                <Link href="/letter-block">
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
            <h1 className="instructions-title">Printable Letter Puzzles – Match, Learn, and Play</h1>

            <p className="instructions-description">
              Printable Letter Puzzles look simple at first, but they’re full of little surprises.
              The letters sit hidden on digital cards, waiting to be flipped.
              Each turn is a chance to spot what belongs where, and before long, the alphabet starts falling into place.
            </p>

            <h2 className="instruction-step">How to Play</h2>
            <p className="instructions-description">
              Hit start and watch the cards shuffle on your screen.
              Tap to flip a card and see the letter hiding underneath.
              Match them in the right order and you’re on your way to finishing the puzzle.
              Miss the right spot? No problem—cards flip back, and it’s up to your memory to keep track.
            </p>

            <h2 className="instruction-step">Who Can Play</h2>
            <p className="instructions-description">
              Anyone can jump in.
              Younger kids learn their letters while playing, families enjoy it together as a group,
              and adults treat it as a light brain break during the day.
              The rules are easy, so no one gets left behind.
            </p>

            <h2 className="instruction-step">Next Challenge</h2>
            <p className="instructions-description">
              Once the simple rounds feel easy, the game turns things up.
              You’ll see bigger grids, more hidden cards, and even timed flips that push you to think faster.
              Each twist adds just enough tension to keep the puzzle fun and your memory sharp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default letterprintable;


