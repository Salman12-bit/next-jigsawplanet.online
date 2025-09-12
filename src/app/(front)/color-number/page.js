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

const Alphabetpuzzle13 = () => {
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
                <Link href="/alphabet-game">
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
            <h1 className="instructions-title">Color by Letter</h1>
            <p className="instructions-description">
              Color by letter is a creative and educational method of engaging with both art and literacy. By assigning specific colors to different letters, participants bring a hidden image to life one section at a time. Each completed area represents both a visual and cognitive achievement — blending recognition, coordination, and patience. This form of activity has gained popularity not only in early learning environments but also in therapeutic and recreational contexts due to its calming and purposeful structure.
            </p>

            <h2 className="instruction-step">Where Art Meets Alphabet Awareness</h2>
            <p className="instructions-description">
              At its core, color by letter promotes early alphabet familiarity in an enjoyable way. Unlike memorization drills or rote recitation, this approach introduces letters through a sensory experience. When a learner associates a color with a letter and fills in spaces accordingly, they form connections that are both visual and tactile. The result isn’t just a completed picture — it’s a deeper, more natural understanding of letter forms and patterns, built through focused interaction with a task that feels more like play than study.
            </p>

            <h3 className="instruction-step">A Rhythm of Relaxation and Learning</h3>
            <p className="instructions-description">
              The repetitive yet purposeful motion of coloring provides a sense of calm and control, which makes color by letter ideal for stress relief and emotional regulation. As each section is completed, the image slowly reveals itself, offering a satisfying sense of progress and achievement. For many participants — children and adults alike — this balance of quiet concentration and visual reward becomes a grounding activity, especially beneficial in educational and therapeutic settings where structure and focus are needed.
            </p>

            <h4 className="instruction-step">Visual Development Through Structured Coloring</h4>
            <p className="instructions-description">
              Precision and attention to detail are central to the color by letter format. Participants must scan the page carefully, recognize matching symbols, and stay within boundaries. This deliberate process helps develop fine motor control, spatial reasoning, and visual scanning — all of which are foundational skills in both academics and everyday life. While the act of coloring may seem simple, the layered benefits in perception and control offer real developmental value.
            </p>

            <h5 className="instruction-step">Custom Expression Within Guided Frameworks</h5>
            <p className="instructions-description">
              One of the most appealing aspects of color by letter is the blend of direction and creativity. While the structure of the activity provides clear rules through letter-to-color assignments, there’s still room for artistic interpretation. Some users might layer shades, use patterns, or apply textures to their coloring style. This freedom within a framework encourages personal expression while maintaining the educational or therapeutic goals of the activity — making it a unique crossover of structure and creativity.
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


export default Alphabetpuzzle13;


