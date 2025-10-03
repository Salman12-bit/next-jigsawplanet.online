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
  { id: 1, value: 'J' }, { id: 2, value: 'G' },
  { id: 3, value: 'L' }, { id: 4, value: 'K' },
  { id: 5, value: 'G' }, { id: 6, value: 'G' },
  { id: 7, value: 'H' }, { id: 8, value: 'I' },
  { id: 9, value: 'H' },
];

const lettercolor = () => {
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
                <Link href="/letter-slider">
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
            <h1 className="instructions-title">Colored Letter – Flip, Match, and Color</h1>

            <p className="instructions-description">
              Colored Letter is a fun little game where letters hide under colorful cards on your screen.
              Flip one and see which letter is underneath.
              Match it with the right color and watch the picture slowly start to appear.
              Sometimes it’s easy, sometimes a bit tricky, but each little match feels satisfying.
              It’s simple, playful, and keeps you guessing until the image is complete.
            </p>

            <h2 className="instruction-step">How to Play</h2>
            <p className="instructions-description">
              Start the game and tap or click a card to flip it.
              See the letter? Great, now find its color and fill it in.
              Got it wrong? No worries — it flips back, so remember it for next time.
              Keep flipping, keep coloring, and slowly the hidden image comes together.
              Each turn gives a tiny clue and a little surprise!
            </p>

            <h2 className="instruction-step">Who Can Play</h2>
            <p className="instructions-description">
              Anyone can join in.
              Young kids practice letters and colors while having fun.
              Families can play together, flipping cards and guessing.
              Adults can take a quick, playful break too.
              Rules are simple, so no one feels left out.
            </p>

            <h2 className="instruction-step">Next Challenge</h2>
            <p className="instructions-description">
              Once the easy pictures are done, try bigger images with more cards to flip.
              You can race against the clock or tackle trickier layouts.
              Oops, missed one? Keep going!
              Each new round keeps things fresh, and finishing the image always feels like a small victory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default lettercolor;


