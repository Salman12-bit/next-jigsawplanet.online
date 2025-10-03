"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["women", "Forums", "HEADER"];
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
        <h4 className="current-color">Current Level 3</h4>
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
            <Link href="/summer-word" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Word Puzzle Solver – Think, Guess, Win</h1>

            <p className="word-description">
              Word Puzzle Solver is a simple game where mixed letters turn into a word.
              Your job is to spot the answer and type it in.
              No heavy rules, no long setup.
              Just a clean and fun way to play with words while training your mind a little.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              Look at the scrambled letters on the screen.
              Guess the word you think is hiding inside.
              Type it, press submit, and check if it matches.
              If not, no problem—try again until it clicks.
              Every round feels short and quick.
            </p>
            
            <h2 className="word-step">Who Can Play</h2>
            <p className="word-description">
              Kids use Word Puzzle Solver to learn new words and practice spelling.
              Families enjoy it together, taking turns on each word.
              Even adults play it as a quick brain workout between tasks.
              Because the rules are so short, anyone can join without confusion.
            </p>

            <h2 className="word-step">More Challenges</h2>
            <p className="word-description">
              You can raise the level by adding a timer or switching to harder words.
              Try racing against a friend, or swap to another version for fresh puzzles.
              Each round changes, so solving words never feels the same twice.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Game;


