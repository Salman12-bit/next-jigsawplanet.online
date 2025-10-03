"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["bike", "fraud", "CHOCOLATE"];
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
        <p className="current-color">Current Level 5</p>
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
            <Link href="/puzzle-words" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Rearranging Letters – Spot, Guess, Win</h1>

            <p className="word-description">
              Rearranging letters is just what it sounds like.
              You get a word that’s been jumbled up, and your job is to set it right.
              Kids treat it like play, adults see it as a quick brain stretch, and anyone can jump in without needing rules.
              It’s fast, easy, and gives you a small win every time you solve one.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              Look at the scrambled word on the screen.
              Think about the letters and type the correct word.
              Submit your answer to check.
              If you miss, just try again — no penalty, just practice.
              Fresh mixes keep every round new.
            </p>

            <h2 className="word-step">Who Can Play</h2>
            <p className="word-description">
              Everyone. Kids pick it up fast, families can play together, and adults use it as a short mental workout.
              Because the rules are so small, there’s no steep learning curve — just letters, guesses, and a smile when it works.
            </p>

            <h2 className="word-step">Next Challenge</h2>
            <p className="word-description">
              Want something tougher?
              Use longer words, set a timer, or play against a friend to see who’s quicker.
              Shuffle the letters each time so no round feels the same.
              The fun keeps going as long as you want to keep solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;


