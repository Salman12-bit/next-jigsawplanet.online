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
  { id: 1, value: 'J' }, { id: 2, value: 'I' },
  { id: 3, value: 'K' }, { id: 4, value: 'K' },
  { id: 5, value: 'L' }, { id: 6, value: 'K' },
  { id: 7, value: 'K' }, { id: 8, value: 'I' },
  { id: 9, value: 'H' },
];

const Alphabetpuzzle11 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(11);

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
                <Link href="/puzzleslider">
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
            <h1 className="instructions-title">Bingo Slide Cards</h1>
            <p className="instructions-description">
              Bingo Slide Cards offer a modern twist on a classic concept, combining the familiarity of traditional bingo with the satisfaction of tactile movement. These innovative cards feature built-in sliding windows or covers, allowing players to mark their selections without needing chips or markers. This simple yet clever adjustment brings added convenience and cleanliness to the experience, making the format appealing in both recreational and professional settings.
            </p>

            <h2 className="instruction-step">Design That Simplifies the Experience</h2>
            <p className="instructions-description">
              The standout feature of Bingo Slide Cards lies in their thoughtful construction. Each square on the card includes a movable panel that can be slid to reveal a bright color or symbol underneath. This built-in mechanism eliminates the mess and hassle of loose game pieces. The streamlined design makes setup faster and cleanup effortless — a major advantage in group environments like classrooms, community centers, or large events where efficiency is key.
            </p>

            <h3 className="instruction-step">Durability and Longevity in Repeated Use</h3>
            <p className="instructions-description">
              One of the practical strengths of Bingo Slide Cards is their ability to withstand frequent use without wear. Crafted from sturdy materials such as laminated cardboard or lightweight plastic, they are designed for repeated handling. This makes them ideal for environments where durability matters — especially with young children, elderly participants, or large-scale game nights. Their reusable nature also contributes to waste reduction, offering a more sustainable alternative to single-use game boards.
            </p>

            <h4 className="instruction-step">A Favorite for Organized Events and Group Activities</h4>
            <p className="instructions-description">
              From fundraisers and classroom games to retirement home activities and family gatherings, Bingo Slide Cards have found a special place in social events. Their clean format allows hosts to distribute and recollect materials with ease. Participants stay focused on the game without fumbling with chips, stickers, or tokens. The tactile action of sliding each square provides a small moment of satisfaction and makes tracking progress more engaging and immediate.
            </p>

            <h5 className="instruction-step">Blending Accessibility with Functionality</h5>
            <p className="instructions-description">
              Accessibility is a key benefit of Bingo Slide Cards, particularly for users with limited dexterity or vision. The sliding covers are often textured or brightly colored, making them easier to operate and recognize. Unlike traditional bingo materials that may scatter or require fine motor precision, slide cards are stable and easy to manage. This inclusive design broadens participation, ensuring more people can enjoy the game comfortably and independently.
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


export default Alphabetpuzzle11;


