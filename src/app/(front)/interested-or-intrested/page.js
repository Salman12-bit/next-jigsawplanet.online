"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Wordinterested = () => {
  const words = ["interested", "Island", "INNOVATION",];
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
        <p className="current-color">Current Level 13</p>
        {!gameOver ? (
          <>
            <div className="level">Word {currentLevel + 1}</div>
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
            <Link href="/coffee-or-cofee" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Interested or Intrested – Spot the Right Word</h1>

            <p className="word-description">
              The game puts you face-to-face with a simple challenge: two spellings, but only one is right.
              Sometimes the letters land as “interested,” other times they jumble into “intrested.”
              Your job is to sort the mess and type the version that makes sense.
              It feels like a quick puzzle and a spelling check rolled into one.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              Look at the scrambled letters on the screen.
              Type your guess for the correct word.
              If you spell it right, you move ahead.
              If not, shuffle again and try once more until the right spelling appears in place.
              It feels like solving a word puzzle and a spelling quiz at the same time.
            </p>

            <h2 className="word-step">Why It’s Fun</h2>
            <p className="word-description">
              Some puzzles are solved in seconds, others make you pause.
              The fun comes when you figure out which version of the word is correct.
              That small “aha!” moment feels rewarding every time.
              It’s quick, a little tricky, and makes you want to play another round.
            </p>

            <h2 className="word-step">Extra Challenge</h2>
            <p className="word-description">
              Try longer scrambled words for extra difficulty.
              Add a timer to test how fast you can spot the correct version.
              Play against a friend and see who solves it first.
              Each round brings a fresh word, so the puzzle never feels the same twice.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wordinterested;


