"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Wordthroughout = () => {
  const words = ["throughout", "Theater", "THUNDERSTORM",];
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
        <p className="current-color">Current Level 12</p>
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
            <Link href="/interested-or-intrested" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Throughout or Throught – Spot the Right Word</h1>

            <p className="word-description">
              In this puzzle you’ll meet a pair of look-alike words — <b>throughout</b> and <b>throught</b>.
              The letters come scrambled on the screen, waiting to be put in order.
              Your job is to rebuild the word and check if the spelling is right.
              One spelling fits in real writing, the other is just a tricky mistake that sneaks in.
              That’s where the fun begins. It turns a simple spelling check into a quick, clever word game.
            </p>


            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              Look at the jumble on the screen.
              Rearrange the letters in your head, then type the word you believe is correct.
              If it matches, you clear the round.
              If not, shuffle your thoughts and try again until the right spelling shines.
            </p>

            <h2 className="word-step">Who Can Play</h2>
            <p className="word-description">
            Students are trying to sharpen their spelling.
              Parents helping kids spot tricky words.
              Or anyone who loves untangling letters for fun.
              The simple setup means you don’t need rules explained twice.
            </p>

            <h2 className="word-step">Extra Challenge</h2>
            <p className="word-description">
              Add a timer to race the clock.
              Mix longer words into the scramble pile.
              Or line up rounds back-to-back to test memory and speed.
              Each twist keeps the game fresh while teaching correct spelling.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wordthroughout;


