"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Summerword = () => {
  const words = ["sun", "Vacation", "WATERPARK",];
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
        <p className="current-color">Current Level 4</p>
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
            <Link href="/word-game" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Summer Word Puzzles – Play Under the Sun</h1>

            <p className="word-description">
              Summer word puzzles are simple games you can enjoy during the sunny months.
              Inside each puzzle, you’ll spot words that remind you of summer—maybe sand, a swim, or even an ice pop.
              They’re quick to solve and easy to pick up whenever you want a little game time.
            </p>



            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              Letters come scrambled on the screen.
              Your task is to guess the summer word inside.
              Type your answer, check if it’s right, and keep going.
              Miss a guess? No stress—try again and figure it out step by step.
            </p>

            <h2 className="word-step">Why It’s Fun</h2>
            <p className="word-description">
              Each word brings a little surprise.
              Sometimes you spot it straight away, other times you think harder before it clicks.
              The moment you solve it, it feels like a tiny win that makes you smile.
            </p>

            <h2 className="word-step">Extra Challenges</h2>
            <p className="word-description">
              Want more fun? Add a timer and see how fast you solve.
              Mix in harder words or swap puzzle sets for fresh rounds.
              Each try feels new, so summer word puzzles never get old.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Summerword;


