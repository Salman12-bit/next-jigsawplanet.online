"use client";

import React, { useState } from 'react';
import "./word-game.css";
import Link from 'next/link';

const Wordstrand = () => {
  const words = ["lead", "Clue", "GUIDELINES",];
  const [currentLevel, setCurrentLevel] = useState(0);
  const [guess, setGuess] = useState('');
  const [scrambledWord, setScrambledWord] = useState(scrambleWord(words[0]));
  const [gameOver, setGameOver] = useState(false);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [hint, setHint] = useState('');

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
    if (guess.trim().toLowerCase() === currentWord.toLowerCase()) {
      setCorrectGuess(true);
      setErrorMessage('');
      setHint('');
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
      setErrorMessage('');
      setHint('');
    } else {
      setGameOver(true);
    }
  }

  function showHint() {
    const currentWord = words[currentLevel];
    const firstLetter = currentWord.charAt(0).toUpperCase();
    setHint(`Starts with ${firstLetter}`);
  }

  return (
    <div className='text-container' style={{ padding: "20px" }}>
      <div className="Puzzle">
        <p className="current-color">Current Level 9</p>
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
            {hint && <p className="hint-text">{hint}</p>}

            <div className="button-group">
              <button className="button2" onClick={checkAnswer}>Submit</button>
              <button className="button2" onClick={showHint}>Hint</button>
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
            <Link href="/among-or-amoung" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>

      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Strands Hint – Small Clues, Big Wins</h1>

            <p className="word-description">
              Strands Hint is all about keeping the puzzle fun.
              Instead of giving you the answer, it drops little clues.
              Maybe the first letter, maybe the last, or sometimes a word that nudges you closer.
              You still get to solve it yourself, and that’s the best part.
              The hint just makes sure you don’t stay stuck forever.
            </p>

            <h2 className="word-step">How It Works</h2>
            <p className="word-description">
              Letters pop up on the screen in a mix.
              Your job is to spot the right word.
              If it feels too hard, tap for a hint.
              The clue might say “Starts with B” or “Think food.”
              That’s just enough to guide you without spoiling the whole round.
            </p>

            <h2 className="word-step">Why It’s Fun</h2>
            <p className="word-description">
              Some puzzles you solve right away.
              Others make you pause and think.
              That little “aha” moment feels even better when a hint helps you see the answer.
              It’s like the game is cheering you on without doing the work for you.
            </p>

            <h2 className="word-step">Extra Fun</h2>
            <p className="word-description">
              Want to push it? Try fewer hints or none at all.
              Use bigger words or set a timer.
              Play with friends and see who cracks the puzzle first.
              Every round feels different, and with strands hint, there’s always a new twist waiting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wordstrand;



