"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["Ladder", "scramble", "INCORRECT"];
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
        <h4 className="current-color">Current Level 8</h4>
        <h1 className="color">Word ladder solver</h1>
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
            <Link href="/omit-or-ommit" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Among or Amoung – Fix the Scramble</h1>

            <p className="word-description">
              This puzzle takes the word and shakes up its letters, leaving you with a jumble like <strong>amngo</strong>.
              Your task is simple: type the correct spelling back into place.
              It might look close to “amoung” at first, but only one form is right.
              Each round is quick, playful, and makes spelling practice feel like a game.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              Look at the scrambled letters on the screen.
              Rearrange them in your head to guess the right word.
              Type your answer into the box and hit submit.
              If correct, you move on; if not, reshuffle your thinking and try again.
            </p>

            <h2 className="word-step">Who Can Play</h2>
            <p className="word-description">
              Young learners can use it to sharpen spelling.
              Students can practice tricky words without it feeling boring.
              Adults can enjoy it as a brain refresher between tasks.
              Since the rules are short and clear, anyone can play.
            </p>

            <h2 className="word-step">Extra Challenge</h2>
            <p className="word-description">
              Add a timer if you want speed pressure.
              Use longer scrambles for advanced practice.
              Try rounds with near-miss spellings to test sharp eyes.
              Play solo for focus or with a friend for a fast spelling race.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Game;


