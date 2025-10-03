"use client"

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import './puzzle.css';
import Link from 'next/link';
import Card from '@/app/Card/page';

const containerStyle1 = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
};

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 12px;
  margin: 0 auto;
`;

const phonicData = {
  A: { word: "Apple", emoji: "🍎", sound: "/æ/" },
  B: { word: "Bee", emoji: "🐝", sound: "/b/" },
  C: { word: "Cat", emoji: "🐱", sound: "/k/" },
  D: { word: "Dog", emoji: "🐶", sound: "/d/" },
  E: { word: "Elephant", emoji: "🐘", sound: "/ɛ/" },
};

const generateNineCards = () => {
  const letters = ["A", "B", "C", "D", "E"];
  let id = 1;
  const pairs = letters.slice(0, 4).flatMap(l => [
    { id: id++, value: l },
    { id: id++, value: l },
  ]);
  pairs.push({ id: id++, value: letters[4] });
  return pairs;
};

const Alphabetpuzzle = () => {
  const [mode, setMode] = useState(null);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const initializeGame = useCallback(() => {
    setCards(shuffle(generateNineCards()));
    setFlippedCards([]);
    setMatchedCards([]);
    setAttempts(0);
    setMessage('Match the cards!');
  }, []);

  useEffect(() => {
    if (mode) initializeGame();
  }, [mode, initializeGame]);

  const handleCardClick = (id, value) => {
    if (flippedCards.length < 2 && !flippedCards.some(c => c.id === id)) {
      const newFlipped = [...flippedCards, { id, value }];
      setFlippedCards(newFlipped);

      if (newFlipped.length === 2) {
        setAttempts(prev => prev + 1);
        const [first, second] = newFlipped;

        if (first.value === second.value) {
          setMatchedCards(prev => [...prev, first.id, second.id]);
          setFlippedCards([]);

          if (mode === "kid" && phonicData[value]) {
            const { word, emoji, sound } = phonicData[value];
            setMessage(`🎉 ${value} is for ${word} ${emoji} (sound: ${sound})`);
          } else {
            setMessage(`✅ Matched ${value}!`);
          }
        } else {
          setMessage("❌ Try again!");
          setTimeout(() => {
            setFlippedCards([]);
            setMessage("Match the cards!");
          }, 1000);
        }
      }
    }
  };

  const hasMatchedAll = () => matchedCards.length >= cards.length - 1;

  return (
    <div className='text-container' style={{ padding: "20px" }}>
      <div className='planet-container'>
        <div className='row'>
          <div className="upper-container" style={containerStyle1}>
            <div className="game-container">
              {!mode && (
                <div className="mode-select text-center p-6">
                  <h2 className="mb-4">Choose Your Game Mode</h2>
                  <button className="button m-2" onClick={() => setMode("kid")}>
                    👶 Kid Mode (Phonics)
                  </button>
                  <button className="button m-2" onClick={() => setMode("young")}>
                    🧑 Young Learner Mode
                  </button>
                </div>
              )}

              {mode && (
                <>
                  <h3 className='level-color'>
                    Alphabet Puzzle – {mode === "kid" ? "Kid Mode (Phonics)" : "Young Mode"}
                  </h3>
                  <Board className='game-board'>
                    {cards.map(card => (
                      <Card
                        key={card.id}
                        id={card.id}
                        value={card.value}
                        isFlipped={
                          flippedCards.some(f => f.id === card.id) ||
                          matchedCards.includes(card.id)
                        }
                        handleClick={handleCardClick}
                      />
                    ))}
                  </Board>
                  <div className="message">{message}</div>
                  <div className="stats">Attempts: {attempts}</div>
                  <button className="button" onClick={initializeGame}>Restart Game</button>
                  <button className="button ms-2" onClick={() => setMode(null)}>🔙 Back to Modes</button>

                  {hasMatchedAll() && (
                    <div className="mt-3">
                      <p>🎉 You matched all pairs! 🎉</p>
                      <Link href="/uppercase-alphabet">
                        <button className="button ms-2">Next Level</button>
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <article className="game-instructions-container">
        <div className="game-instructions">
          <h1 className="instructions-title">Unblock Alphabet Letter – Play and Learn</h1>

          <p className="instructions-description">
            The Unblock Alphabet Letter game is simple but fun.
            You don’t need long rules—just flip, move, and match letters.
            Younger kids enjoy spotting A, B, C, and more, while older players see it as a quick brain teaser.
            It’s easy to pick up and can be played for both learning and fun.
          </p>

          <h2 className="instruction-step">How to Play</h2>
          <p className="instructions-description">
            All cards start face down.
            Flip two cards at a time—if they match, they stay open.
            If not, flip them back and try again.
            In Kid Mode, you get hints with pictures or sounds.
            In Young Mode, there are no clues, so memory and focus matter more.
          </p>

          <h2 className="instruction-step">Who Can Play</h2>
          <p className="instructions-description">
            Kids can flip cards to learn letters while having fun.
            Families can take turns and cheer each other on.
            Adults sometimes join in for a quick brain break.
            The rules are so simple that anyone can pick them up and play right away.
          </p>


          <h2 className="instruction-step">Extra Challenges</h2>
          <p className="instructions-description">
            Want it harder?
            Add a timer and race the clock.
            Mix in more cards for a bigger puzzle.
            Or challenge a friend to see who solves it first.
            The Unblock Alphabet Letter game can stay light and easy, or turn into a real challenge—it’s up to you.
          </p>
        </div>


      </article>
    </div>
  );
};

export default Alphabetpuzzle;
