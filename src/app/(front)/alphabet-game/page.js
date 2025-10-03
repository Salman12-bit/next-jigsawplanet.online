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
                      <Link href="/alphabet-letter">
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
          <h1 className="instructions-title">Wooden Alphabet Puzzle – Easy, Fun, and Hands-On</h1>

          <p className="instructions-description">
            The Wooden Alphabet Puzzle is the kind of game you can pick up right away.
            No long rules, no tricky setup—just letters you can move, match, and place in order.
            Kids like spotting the shapes they know, while grown-ups sometimes join in as a quick brain break.
            It feels playful, but at the same time, it helps everyone keep their mind active without much effort.
          </p>

          <h2 className="instruction-step">How to Play</h2>
          <p className="instructions-description">
            Start with all the cards face down.
            Flip one to see the letter, then try to find its right spot.
            In Kid Mode, the game gives simple hints, like a picture or word to guide the match.
            Young Mode is more challenging—you flip and place letters without any help, so it’s all about memory and focus.
            Piece by piece, the alphabet from A to Z comes together.
          </p>

          <h2 className="instruction-step">Who Can Play</h2>
          <p className="instructions-description">
            Kids enjoy matching letters and saying them out loud.
            Parents like that it mixes learning with play naturally.
            Families can take turns adding pieces, and adults can enjoy it as a short, relaxing puzzle.
            Since it’s simple and clear, anyone can join in without needing an explanation.
          </p>

          <h2 className="instruction-step">Extra Challenges</h2>
          <p className="instructions-description">
            Want to turn it up a notch?
            Add a timer and race against the clock.
            Try a round with no hints at all, or mix the pieces until it looks impossible and work through it slowly.
            The Wooden Alphabet Puzzle can stay light and easy, or turn into a real test of patience—it’s up to how you play.
          </p>
        </div>

      </article>
    </div>
  );
};

export default Alphabetpuzzle;
