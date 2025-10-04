"use client"

import React, { useState } from 'react';
import "./word-puzzle.css"
import Link from 'next/link';


const ThirdGrade = () => {
  const words = ["cat", "Teacher", "CLASSROOM",];
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
        <p className="current-color">Current Level 6</p>
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
            <Link href="/hard-spelling" className="button2  mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">3rd Grade Spelling Words – Quick and Fun Practice</h1>

            <p className="word-description">
              The 3rd Grade Spelling Words game is made for kids who want to practice without the boring drills.
              It’s simple to start and easy to follow—pick a word, try the spelling, and see how fast you get it right.
              No heavy rules, just a light way to build confidence with words.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              A word pops up scrambled on the screen.
              Type the correct spelling and hit submit.
              Got it right? Great! If not, try again until it clicks.
              Each round brings a new word, so practice keeps moving.
            </p>

            <h2 className="word-step">Why Kids Like It</h2>
            <p className="word-description">
              Some words feel easy, others take a few extra tries.
              That mix keeps it exciting.
              Every win feels good, and each word solved feels like a little victory.
              Kids keep playing because it feels more like a game than practice.
            </p>

            <h2 className="word-step">Extra Challenge</h2>
            <p className="word-description">
              Want to push further? Add longer spelling lists, play against a timer, or compete with a friend.
              Each round changes the pace, so it never feels stuck on the same word.
              That makes every session fresh and keeps learning moving forward.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ThirdGrade;


