"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["among", "Advice", "ACCESSIBLE"];
  const [currentLevel, setCurrentLevel] = useState(0);
  const [guess, setGuess] = useState('');
  const [scrambledWord, setScrambledWord] = useState(scrambleWord(words[0]));
  const [gameOver, setGameOver] = useState(false);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function scrambleWord(word) {
    const arr = word.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  }

  function checkAnswer() {
    const currentWord = words[currentLevel];
    if (guess === currentWord) {
      setCorrectGuess(true);
      setErrorMessage('');
    } else {
      setErrorMessage("Try again! Incorrect guess.");
    }
  }
  function nextLevel() {
    if (currentLevel < words.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setScrambledWord(scrambleWord(words[currentLevel + 1]));
      setGuess('');
      setCorrectGuess(false);
    } else {
      setGameOver(true);
    }
  }
  return (
    <div className='text-conainer' style={{
      padding: "20px"
    }}>
      <div className="Puzzle">
        <h1 className="color">Printable Word Search Puzzles for Adults</h1>
        <h2 className="current-color">Current Level 15</h2>
        {!gameOver ? (
          <>
            <div className="level">Level {currentLevel + 1}</div>
            <div className="word">{scrambledWord}</div>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Your Guess"
              aria-label="Guess the scrambled word"
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div>
              <button className="button2" onClick={checkAnswer}>Submit</button>
              {correctGuess && (
                <button className="button2" onClick={nextLevel}>Next Level</button>
              )}
            </div>
          </>
        ) : (
          <div>
            <h2 className="congrat-color">Congratulations! You've completed all levels.</h2>
            <button className="button2" onClick={() => window.location.reload()}>
              Restart
            </button>
            <Link href="/" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Referred or Refered – Find the Right Spelling</h1>

            <p className="word-description">
              Two spellings look almost the same, but only one is correct.
              “Referred” holds the double r in the middle, while “refered” drops it out.
              The letters play a little trick on your eyes, and that’s where the puzzle begins.
              Your job is to catch the slip before it sneaks past.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              A scrambled version of the word shows up.
              Rearrange the letters and type the spelling you believe is right.
              If you get it correct, the next round unlocks.
              If not, shuffle again and look closer until it clicks.
            </p>

            <h2 className="word-step">Why It’s Fun</h2>
            <p className="word-description">
              Double letters are sneaky, and that makes each puzzle feel fresh.
              Sometimes your brain catches the extra r right away.
              Other times, it takes a few tries before the right spelling shines through.
              That tiny “aha” moment keeps you coming back.
            </p>

            <h2 className="word-step">Extra Challenge</h2>
            <p className="word-description">
              Try puzzles with bigger words where the double letters hide deeper.
              Put yourself on the clock and race to finish before time runs out.
              Swap words with a friend and see who solves faster.
              Sometimes the misspelling sneaks by, sometimes you catch it at once — either way, the round stays lively.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Game;


