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
                      <Link href="/alphabet-puzzles">
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
          <h1 className="instructions-title">Alphabet Puzzle – Fun Learning Through Play</h1>

          <p className="instructions-description">
            The Alphabet Puzzle is really easy to get into.
            You don’t have to spend time learning rules or reading long instructions.
            Kids usually mess around with the letters just to see what fits, and older players sometimes try it as a quick memory game.
            There’s a simple version for little ones and a trickier one if you want more of a challenge.
            It feels more like play than anything else.
          </p>


          <h2 className="instruction-step">How to Play</h2>
          <p className="instructions-description">
            Pick a mode and go.
            In Kid Mode, matches come with little extras—like A popping up with an apple 🍎 or a short sound.
            It feels more like a game than a lesson.
            Young Learner Mode is trickier: all the cards are face down, you flip two, and hope they match.
            Miss? Just remember the spots for later.
            It’s easy at first, then you notice your brain working harder the longer you play.
          </p>

          <h2 className="instruction-step">Why It’s Fun</h2>
          <p className="instructions-description">
            The fun part is the mix of surprise and memory.
            Sometimes you nail a match right away, other times you totally blank and flip the wrong one.
            Kids laugh at the silly reveals, and adults get that “aha” moment when they finally connect two cards.
            It’s not stressful—just enough of a challenge to keep you going for another round.
          </p>

          <h2 className="instruction-step">Next Challenges Await</h2>
          <p className="instructions-description">
            Once the first levels feel easy, the game throws in more cards and different layouts.
            Suddenly it’s not just about spotting a letter—you’ve got to really think before flipping.
            Some rounds go smoothly, some get messy, but no two games feel the same.
            That’s what makes it stick—you always want one more try.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Alphabetpuzzle;
