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
  { id: 3, value: 'J' }, { id: 4, value: 'J' },
  { id: 5, value: 'J' }, { id: 6, value: 'H' },
  { id: 7, value: 'H' }, { id: 8, value: 'J' },
  { id: 9, value: 'B' },
];

const Alphabetpuzzle8 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(8);

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
                <Link href="/slider-puzzles">
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
            <h1 className="instructions-title">Pictures of Bubble Letters</h1>
            <p className="instructions-description">
              Pictures of bubble letters have become a popular and expressive form of visual art, blending playful design with creative communication. These bold, rounded letters, often outlined or filled with vibrant colors, offer more than just decorative appeal — they carry energy, emotion, and a unique identity. Whether seen in sketchbooks, digital graphics, posters, or school notebooks, bubble letters continue to capture attention with their whimsical and dynamic style.
            </p>

            <h2 className="instruction-step">The Timeless Allure of Bubble Typography</h2>
            <p className="instructions-description">
              Bubble letters emerged as a cultural icon long before the rise of digital design. Originally hand-drawn by students, artists, and graffiti creators, this style has roots in self-expression and street art. The exaggerated curves and puffy shapes of bubble letters stand out in any visual space, making them a go-to choice for creative lettering. Over the years, they’ve evolved from doodles to design staples, used in branding, signage, fashion, and social content. The aesthetic offers a sense of fun without sacrificing clarity — a rare combination in visual design.
            </p>

            <h3 className="instruction-step">Exploring Styles Through Bubble Letter Images</h3>
            <p className="instructions-description">
              Looking at pictures of bubble letters reveals a wide range of artistic interpretation. Some styles feature sharp highlights and shadows, adding three-dimensional depth. Others lean into soft pastel gradients, making the letters feel airy and sweet. There are monochrome styles for minimalist projects and wild neon designs perfect for youth-oriented content. Each variation reflects the creator’s personality or brand tone. Observing different bubble letter pictures can inspire lettering artists, hobbyists, or content creators to experiment and evolve their own styles.
            </p>

            <h4 className="instruction-step">Bubble Letters as Creative Tools for Education</h4>
            <p className="instructions-description">
              Beyond art and aesthetics, pictures of bubble letters also serve practical purposes in education. Teachers and students alike use them in posters, classroom displays, and handwriting practice. Their large, round forms are especially useful for younger learners developing letter recognition. They make alphabet activities feel playful rather than repetitive. Coloring pages featuring bubble letters have also become a favorite among children, blending creativity with early literacy skills. In this way, bubble letter pictures support both visual engagement and educational goals.
            </p>

            <h5 className="instruction-step">A Popular Choice for Personalized Design</h5>
            <p className="instructions-description">
              One reason bubble letters remain widely used is their adaptability in personal projects. From birthday banners and greeting cards to customized notebooks and digital avatars, bubble letter images bring a custom flair to any design. Their exaggerated forms allow space for patterns, textures, and color layering — letting individuals personalize names, initials, or full messages with ease. As more people turn to DIY aesthetics, the demand for printable, editable, and downloadable pictures of bubble letters continues to grow.
            </p>
          </div>
          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='free online  pictures of bubble letters puzzle game' />
            </Link>
            <Link href="/alphabet-puzzles">
              <img className='game-image' src='./images/Puzzle2.webp' alt=' pictures of bubble letters interactive puzzle' />
            </Link>
            <Link href="/jigsawplanet2">
              <img className='game-image' src='./images/Puzzle3.webp' alt='free  pictures of bubble letters game' />
            </Link>
            <Link href="/abc-puzzle">
              <img className='game-image' src='./images/Puzzle5.webp' alt='play  pictures of bubble letters puzzle online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Alphabetpuzzle8;


