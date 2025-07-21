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
  { id: 1, value: 'J' }, { id: 2, value: 'M' },
  { id: 3, value: 'M' }, { id: 4, value: 'K' },
  { id: 5, value: 'L' }, { id: 6, value: 'M' },
  { id: 7, value: 'M' }, { id: 8, value: 'I' },
  { id: 9, value: 'H' },
];

const Puzzle1 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(12);

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
                <Link href="/color-number">
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
            <h1 className="instructions-title">How to Play Puzzle Slider Game</h1>
            <p className="instructions-description">
              Puzzle slider games are classic brain-teasing activities where players slide tiles around a board to reassemble a scrambled image or sequence. Whether you're playing a number slider, picture tile puzzle, or a digital version on your phone, puzzle slider games are great for sharpening focus, improving logic, and having fun at any age. This guide explains how to play the Puzzle Slider Game, including game types, rules, tips, and strategies to help you win.
            </p>
            <h2 className="instruction-step">1. Types of Puzzle Slider Games</h2>
            <p className="instructions-description">
              Puzzle slider games come in many forms, including:
              <ul>
                <li><strong>Classic Number Sliders:</strong> Usually a 3x3 or 4x4 grid where you slide numbered tiles into the correct order.</li>
                <li><strong>Image Tile Puzzles:</strong> Rearrange scrambled image pieces to complete the full picture.</li>
                <li><strong>Digital Puzzle Sliders:</strong> Online or app-based versions that may include timers, levels, and animations.</li>
              </ul>
              Each version tests your memory, patience, and strategy in unique ways.
            </p>
            <h3 className="instruction-step">2. Understand the Rules</h3>
            <p className="instructions-description">
              The goal is to arrange all tiles into the correct order or recreate the full image by sliding pieces one at a time into the empty space. Keep these rules in mind:
            </p>
            <ul className="instructions-list">
              <li>You can only move tiles adjacent to the empty space.</li>
              <li>The puzzle is solved when all tiles are in the correct sequence or image alignment.</li>
              <li>Some games are timed, while others allow unlimited moves.</li>
              <li>Moves are usually counted—fewer moves mean a better score.</li>
            </ul>
            <h4 className="instruction-step">3. Set Up Your Game Space</h4>
            <p className="instructions-description">
              For physical slider puzzles, place the board on a flat surface with good lighting. For digital puzzle slider games, use a device with a clear screen and responsive touch or mouse control. Make sure you're comfortable for focused gameplay.
            </p>
            <h5 className="tips-title">Tips for Success</h5>
            <ul className="instructions-list">
              <li><strong>Start from the Top:</strong> Solve row by row or column by column, starting from the top-left corner.</li>
              <li><strong>Look Ahead:</strong> Plan a few moves in advance instead of making random slides.</li>
              <li><strong>Be Patient:</strong> Don't rush. Precision is key in solving slider puzzles.</li>
              <li><strong>Practice Patterns:</strong> The more you play, the more you'll recognize tile movement strategies.</li>
              <li><strong>Challenge Yourself:</strong> Try harder levels or larger grids as you improve your solving speed.</li>
            </ul>
            <h6 className="instruction-step">Conclusion</h6>
            <p className="instructions-description">
              Puzzle slider games are a fantastic way to challenge your brain while having fun. Whether you're reordering numbers or piecing together a picture, every move counts. With practice, strategy, and patience, you’ll improve your puzzle-solving skills and enjoy the rewarding feeling of completing the challenge. Get started now and slide your way to victory!
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


