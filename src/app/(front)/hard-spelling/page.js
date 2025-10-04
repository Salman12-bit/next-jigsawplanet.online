"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Hardword = () => {
  const words = ["quiz", "Challenge", "BRAINTEASER",];
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
        <p className="current-color">Current Level 7</p>
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
            <Link href="/word-difficult" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Hard Spelling Words – Play and Practice</h1>

            <p className="word-description">
              Hard Spelling Words turns learning into a fun little game.
              Instead of long lessons, you just try spelling tough words step by step.
              Some are tricky, some are funny, but each round helps you remember more.
              It feels like practice, but it plays like a challenge.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              Look at the mixed-up word or listen to the sound.
              Type the spelling you think is right.
              If it’s correct, you move forward.
              If it’s not, try again and watch how the letters fit together.
              Every mistake is just another chance to learn.
            </p>

            <h2 className="word-step">Why It’s Fun</h2>
            <p className="word-description">
              Some words make you stop and think.
              Others click right away.
              The fun comes from solving each one like a mini puzzle.
              When a long, tricky word finally lands, it feels like a win worth cheering.
            </p>

            <h2 className="word-step">Extra Challenge</h2>
            <p className="word-description">
              Add a timer to see how fast you can spell.
              Mix in longer words for a brain stretch.
              Compete with a friend for the top score.
              Hard Spelling Words can stay easy or grow into a real spelling showdown.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hardword;


