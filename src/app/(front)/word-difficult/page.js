"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Worddifficult = () => {
  const words = ["tip", "Decoder", "LETTERJUMBLE",];
  const [currentLevel, setCurrentLevel] = useState(0);
  const [guess, setGuess] = useState('');
  const [scrambledWord, setScrambledWord] = useState(scrambleWord(words[0]));
  const [gameOver, setGameOver] = useState(false);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
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
        <p className="current-color">Current Level 8</p>
        {!gameOver ? (
          <>
            <div className="level">Word {currentLevel + 1}</div>
            <div className="word">{scrambledWord}</div>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Your Guess"
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
            <Link href="/strand-hint" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Word De-Scrambler – Mix, Guess, Solve</h1>

            <p className="word-description">
              Word De-Scrambler is a simple game where letters get all mixed up.
              Your job is to figure out the real word hiding in the mess.
              Sometimes you see it straight away, other times you stare for a bit before it clicks.
              That little moment of “aha!” is what makes it worth playing.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              Start with a word that’s been scrambled.
              Type your guess for the right order.
              If you get it correct, you move to the next puzzle.
              If not, try again until the letters fall into place.
              Every turn feels like unlocking a little code.
            </p>

            <h2 className="word-step">Who Can Play</h2>
            <p className="word-description">
              Kids can play to learn new words.
              Families can solve rounds together, cheering each other on.
              Adults enjoy it as a light brain exercise between work and study.
              With simple rules, anyone can join the fun.
            </p>

            <h2 className="word-step">Extra Challenge</h2>
            <p className="word-description">
              Use longer words for a harder test.
              Add a timer to see who solves fastest.
              Play with friends and keep score for each round.
              Word De-Scrambler can stay casual or become a fast-paced word race.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Worddifficult;


