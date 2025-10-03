"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["jungle", "Hunt", "LANDSCAPE"];
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
    <div className='text-conainer'>
      <div className="Puzzle">
        <p className="color">Current Level 2</p>
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
            <Link href="/puzzle-women" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Word Hunt Puzzle Game – Spot, Guess, Win</h1>

            <p className="word-description">
              The Word Hunt Puzzle Game is a friendly mix of letters, clues, and guesses.
              Words hide inside scrambled letters, waiting to be solved.
              It feels simple at first glance, yet every round gives your brain a small workout.
              The game is light, playful, and easy to pick up whenever you have a few minutes.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              Look at the shuffled letters on the screen.
              Rearrange them in your mind to find the hidden word.
              Type in your guess and submit it.
              If it matches, you move ahead.
              If it doesn’t, try again — no stress, just another chance to figure it out.
            </p>

            <h2 className="word-step">Why It’s Fun</h2>
            <p className="word-description">
              The fun is in the little “aha!” moment when the answer suddenly clicks.
              Sometimes you’ll guess right away, other times it takes a few tries,
              and that small win feels satisfying.
              Each puzzle feels like a new surprise,
              and the mix of challenge and play keeps you coming back.
            </p>

            <h2 className="word-step">Next Challenge Awaits</h2>
            <p className="word-description">
              Want more? Use harder word sets or turn on a timer.
              Try another version for new puzzles, or race a friend for fun.
              Each mix feels different, so the hunt never gets boring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;


