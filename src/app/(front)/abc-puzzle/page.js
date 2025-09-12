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
  { id: 3, value: 'F' }, { id: 4, value: 'D' },
  { id: 5, value: 'C' }, { id: 6, value: 'C' },
  { id: 7, value: 'F' }, { id: 8, value: 'F' },
  { id: 9, value: 'B' },
];

const Alphabetpuzzle6 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(6);

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
                <Link href="/letter-puzzle">
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
            <h1 className="instructions-title">ABC Alphabet Puzzle</h1>
            <p className="instructions-description">
              ABC Alphabet Puzzle is more than just a colorful arrangement of letters — it's a thoughtful, engaging tool that supports early brain development, language recognition, and creative thinking. By merging the structure of a puzzle with the logic of the alphabet, this concept turns learning into a memorable hands-on experience. Whether placed on a table or tapped on a screen, it invites children into a world where curiosity meets confidence, and where letters become living pieces of play.
            </p>

            <h2 className="instruction-step">The Intersection of Learning and Play</h2>
            <p className="instructions-description">
              Children are naturally wired to explore. The ABC Alphabet Puzzle aligns with that instinct by encouraging learners to discover, match, and organize letters in a meaningful way. Each piece becomes an opportunity to explore patterns, sounds, and relationships between letters. Instead of memorizing characters in a row, children experience the alphabet as an interactive structure they can rearrange and understand from different angles. This deeper level of involvement lays the foundation for long-term learning, making abstract language concepts more tangible.
            </p>

            <h3 className="instruction-step">Building Stronger Foundations Through Movement</h3>
            <p className="instructions-description">
              Physical or visual movement plays a crucial role in memory retention. When children handle puzzle pieces or slide them into place, they activate sensory and motor pathways in the brain that reinforce learning. In an ABC Alphabet Puzzle, the act of physically moving letters contributes to stronger mental connections than passive repetition. Every adjustment becomes a small victory, teaching children not only the order of the alphabet but also how to focus, solve problems, and enjoy the process of discovery.
            </p>

            <h4 className="instruction-step">Beyond the Basics: Encouraging Language Growth</h4>
            <p className="instructions-description">
              While the puzzle begins with basic letter recognition, its impact stretches far beyond. Engaging with letters in a puzzle format helps children develop pre-reading skills such as letter-sound association and phonemic awareness. These are critical for decoding words and understanding language structure later on. The ABC Alphabet Puzzle isn’t just preparing a child to know their ABCs — it’s laying the groundwork for confident reading, writing, and communication in years to come.
            </p>

            <h2 className="instruction-step">Why Puzzle-Based Learning Stands Out</h2>
            <p className="instructions-description">
              In a world filled with overstimulating content, puzzles offer a refreshing contrast. The ABC Alphabet Puzzle slows the pace, inviting children to think, reflect, and take their time. This kind of focused play nurtures attention span and helps build emotional regulation — skills just as valuable as academic knowledge. More importantly, it reminds children that learning can be rewarding in itself, without external rewards or pressure.
            </p>

            <h3 className="instruction-step">Confidence Through Independent Problem-Solving</h3>
            <p className="instructions-description">
              Few things feel better to a young learner than finishing a challenge on their own. ABC Alphabet Puzzles offer that sense of accomplishment with every solved board. As children learn to trust their judgment and persist through trial and error, their confidence begins to grow. This confidence spills into other areas — from reading aloud to tackling new subjects — shaping children into independent thinkers who embrace learning with curiosity rather than fear.
            </p>

            <h4 className="instruction-step">A Flexible Tool for Diverse Learning Styles</h4>
            <p className="instructions-description">
              No two learners are exactly alike, and that’s where the ABC Alphabet Puzzle truly shines. Whether a child learns visually, kinesthetically, or auditorily, this puzzle format can be adapted to support those preferences. Some may enjoy the color-coded pieces; others may benefit from tracing the shapes or naming each letter aloud. It’s a versatile approach that respects individuality and adapts to a variety of educational environments.
            </p>

            <h2 className="instruction-step">Conclusion</h2>
            <p className="instructions-description">
              The ABC Alphabet Puzzle transforms letter learning into a journey of logic, movement, and discovery. It’s more than a plaything — it’s a powerful tool for developing literacy, cognitive flexibility, and independent thinking. By engaging children’s minds and hands at the same time, it creates lasting impressions that go far beyond letter names. In a quiet, thoughtful, and often joyful way, this puzzle helps turn early learners into lifelong learners.
            </p>

          </div>
          <div className="game-image-container">
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='free online abc alphabet puzzle puzzle game' />
            </Link>
            <Link href="/jigsawplanet1">
              <img className='game-image' src='./images/Puzzle2.webp' alt='abc alphabet puzzle interactive puzzle' />
            </Link>
            <Link href="/letter-puzzle">
              <img className='game-image' src='./images/Puzzle3.webp' alt='free abc alphabet puzzle game' />
            </Link>
            <Link href="/jigsawplanet3">
              <img className='game-image' src='./images/Puzzle5.webp' alt='play abc alphabet puzzle puzzle online' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Alphabetpuzzle6;


