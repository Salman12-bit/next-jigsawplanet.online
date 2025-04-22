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
  { id: 5, value: 'L' }, { id: 6, value: 'L' },
  { id: 7, value: 'H' }, { id: 8, value: 'I' },
  { id: 9, value: 'H' },
];

const Puzzle1 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(13);

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
                <Link href="/">
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
            <h1 className="instructions-title">How to Play Color by letter</h1>

            <p className="instructions-description">
              Color by letter is a fun and relaxing game where each area of a picture has a letter that matches a color. You fill in the spaces with the right colors to create a full image. It’s a great way to enjoy art, stay focused, and feel proud of your work. This guide will show you how to play color by letter, including the types of games, basic rules, and helpful tips.
            </p>

            <h2 className="instruction-step">1. Types of Color by letter Games</h2>
            <p className="instructions-description">
              Color by letter games come in different forms:
              <ul>
                <li><strong>Paper Coloring:</strong> A printed sheet with letters and a color key to follow.</li>
                <li><strong>Digital Coloring:</strong> An app or online game where you tap or click to color the spaces.</li>
                <li><strong>Pixel Coloring:</strong> A picture made of small squares where each letter stands for a color.</li>
              </ul>
              No matter which type you choose, the goal is the same—match the letter to the color and fill in the picture!
            </p>

            <h3 className="instruction-step">2. Understand the Rules</h3>
            <p className="instructions-description">
              The rules are easy to follow:
            </p>
            <ul className="instructions-list">
              <li>Each part of the picture has a letter inside it.</li>
              <li>Use the matching color from the color key for that letter.</li>
              <li>Color all the letters areas to complete the picture.</li>
              <li>Don’t guess—always check the letter before you color.</li>
            </ul>

            <h4 className="instruction-step">3. Set Up Your Game Space</h4>
            <p className="instructions-description">
              Make sure you’re comfortable before you begin:
              <ul>
                <li>Find a quiet space with good lighting.</li>
                <li>Find letters with clear number lines.</li>
                <li>Have your colored pencils, markers, or device ready.</li>
                <li>Keep your color chart nearby so you can follow along easily.</li>
              </ul>
              A good setup will help you enjoy the coloring without distractions.
            </p>

            <h5 className="tips-title">Tips for Success</h5>
            <ul className="instructions-list">
              <li><strong>Follow the letters:</strong> Always match the letter with the correct color.</li>
              <li><strong>Take Your Time:</strong> Go slow to stay inside the lines and make your picture look great.</li>
              <li><strong>Start Small:</strong> Begin with easy pictures, then try more detailed ones.</li>
              <li><strong>Stay Organized:</strong> Keep your coloring tools or device neat and ready to use.</li>
              <li><strong>Have Fun:</strong> Enjoy watching the picture appear as you color each space!</li>
            </ul>

            <h6 className="instruction-step">Conclusion</h6>
            <p className="instructions-description">
              Color by letter is a creative and fun activity that anyone can enjoy. It helps with focus, patience, and attention to detail. Whether on paper or a screen, each picture you finish will feel like an amazing piece of art. So grab your colors and start coloring by letter today!
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


export default Puzzle1;


