"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["cookies", "Workout", "SHARPEN"];
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
        <h4 className="current-color">Current Level 9</h4>
        <h1 className="color">Large print word search puzzles</h1>
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
            <Link href="/throughout-or-throught" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Omit or Ommit – Spot the Right Word</h1>

            <p className="word-description">
              The puzzle here is simple but clever.
              You see the word written two ways: Omit or Ommit.
              One is correct, the other is not.
              Your job is to rearrange, check letters, and type the proper word into the box.
              It feels like a spelling check wrapped inside a small word game.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              Look at the scrambled or doubled letters.
              Think about which version looks right.
              Place the letters back in order and enter your answer.
              If it matches, you pass the round.
              If it doesn’t, try again until the correct form shows up.
            </p>

            <h2 className="word-step">Why It’s Fun</h2>
            <p className="word-description">
              Some words trick your eyes with repeated letters.
              You pause, check carefully, and then feel the small win when you fix it.
              It’s short, quick, and has that nice “aha” moment each time you get it right.
            </p>
            
            <h2 className="word-step">Extra Challenge</h2>
            <p className="word-description">
              Add more tricky pairs like “occur or occurr” or “recommend or reccommend.”
              Use a timer to make it a race.
              Play with friends and keep score for each right guess.
              The Omit or Ommit puzzle can stay easy or turn into a spelling showdown.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Game;


