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
  { id: 3, value: 'L' }, { id: 4, value: 'Q' },
  { id: 5, value: 'Q' }, { id: 6, value: 'N' },
  { id: 7, value: 'H' }, { id: 8, value: 'Q' },
  { id: 9, value: 'N' },
];

const Puzzle1 = () => {
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
            <h1 className="instructions-title">How to Use Free Color by Number Printables</h1>

            <p className="instructions-description">
              Free color by number printables are a creative and relaxing way to enjoy art and practice number recognition. Each printable includes a picture divided into numbered sections, and you fill each section with the color that matches the number. This guide will show you how to use color by number printables, what types are available, and some helpful tips for a fun and calming coloring experience.
            </p>

            <h2 className="instruction-step">1. Types of Free Color by Number Printables</h2>
            <p className="instructions-description">
              There are many types of color by number printables to choose from:
              <ul>
                <li><strong>Animals:</strong> Fun designs featuring cats, dogs, birds, and more.</li>
                <li><strong>Holidays:</strong> Themed pages for Christmas, Halloween, Easter, and more.</li>
                <li><strong>Scenes:</strong> Nature, landscapes, underwater scenes, and more detailed pictures.</li>
                <li><strong>Simple Designs:</strong> Great for young children learning numbers and colors.</li>
              </ul>
              You can print these pages at home and start coloring right away!
            </p>

            <h3 className="instruction-step">2. Understand the Rules</h3>
            <p className="instructions-description">
              Color by number is easy to understand:
            </p>
            <ul className="instructions-list">
              <li>Each section of the card has a alphabet in it.</li>
              <li>Each alphabet matches a specific order, listed on the page.</li>
              <li>Find each section using the matching card for that alphabet.</li>
              <li>Keep coloring until the whole card is complete!</li>
            </ul>

            <h4 className="instruction-step">3. Set Up Your Coloring Space</h4>
            <p className="instructions-description">
              Make your coloring time relaxing and organized:
              <ul>
                <li>Print your chosen coloring page clearly.</li>
                <li>Use markers, crayons, colored pencils, or gel pens.</li>
                <li>Work in a well-lit, quiet area to avoid distractions.</li>
                <li>Keep your coloring tools sorted by number or color.</li>
              </ul>
              A clean and calm setup helps you stay focused and enjoy the process.
            </p>

            <h5 className="tips-title">Tips for Success</h5>
            <ul className="instructions-list">
              <li><strong>Double Check Colors:</strong> Make sure you match the number with the correct alphabet.</li>
              <li><strong>Stay in the Lines:</strong> Go slowly to keep your card neat and tidy.</li>
              <li><strong>Start with Easy Pages:</strong> Begin with simple designs before trying detailed ones.</li>
              <li><strong>Have Fun:</strong> Relax, enjoy the colors, and be proud of your finished art!</li>
            </ul>

            <h6 className="instruction-step">Conclusion</h6>
            <p className="instructions-description">
              Free color by number printables are perfect for kids and adults who love coloring and want a creative way to unwind. With many designs available, you can choose themes you enjoy and improve your focus, color recognition, and fine motor skills. Print a few today, grab your favorite colors, and start your next masterpiece!
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


