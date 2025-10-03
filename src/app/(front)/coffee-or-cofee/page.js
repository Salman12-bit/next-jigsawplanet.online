"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["daily", "Green", "PLAGIARISM"];
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
        <h2 className="current-color">Current Level 13</h2>
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
            <Link href="/referred-or-refered" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Coffee or Cofee – Spot the Right Spelling</h1>

            <p className="word-description">
              Two words pop up, but only one holds the right spelling.
              Sometimes you see “coffee” with two f’s, other times it sneaks in as “cofee.”
              The letters look close, but not quite the same.
              Your task is to catch the mistake before it slips by.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              A scrambled version of the word shows on screen.
              Rearrange the letters and type what you believe is correct.
              If you land on the right spelling, the puzzle clears, and a new round begins.
              Miss it, and you just try again until the right order clicks.
            </p>

            <h2 className="word-step">Who Can Play</h2>
            <p className="word-description">
              Kids sharpen their spelling without even noticing.
              Families can laugh over mix-ups together.
              Adults jump in for a short brain break or to test how sharp their eyes are.
              Since it’s easy to start, no one feels left out.
            </p>

            <h2 className="word-step">Extra Challenge</h2>
            <p className="word-description">
              Turn on a timer and see how fast you can solve it.
              Add more tricky words with double letters and make it tougher.
              Compete with a friend to see who spots the right spelling first.
              A simple word can turn into a fast race of focus and fun.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Game;


