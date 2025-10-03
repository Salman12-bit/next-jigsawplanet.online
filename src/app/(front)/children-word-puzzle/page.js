"use client"

import React, { useState } from 'react';
import "./freeze.css"
import Link from 'next/link';


const ChildrenWord = () => {
  const words = ["Friend", "pearl", "UNCANNY"];
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
    if (guess.toLowerCase() === currentWord.toLowerCase()) {
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
      <div className="Puzzle my-3">
        <p className="current-color">Current Level 1</p>
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
            <Link href="word-hunt" className="button2  mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Children's Word Puzzles – Play, Guess, Learn</h1>

            <p className="word-description">
              Children's word puzzles are quick, friendly games for little learners.
              Pick a scrambled word, type your guess, and see if you got it right.
              Rules are tiny and easy.
              It’s a fun way to play with words for a few minutes.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              Look at the mixed-up letters on the screen.
              Type what you think the word is.
              Submit and check if it matches.
              If it’s wrong, try again — you’ll learn by doing.
              Switch modes or versions for a fresh round.
            </p>

            <h2 className="word-step">Why It’s Fun</h2>
            <p className="word-description">
              Each guess comes with a little surprise.
              Sometimes you spot the word straight away.
              Other times it takes a few tries and then — bingo — that small win hits.
              It’s light, a bit cheeky, and it keeps kids coming back for one more go.
            </p>

            <h2 className="word-step">Next Challenge</h2>
            <p className="word-description">
              Want it harder? Try a different word set or add a timer.
              Use one of your other versions for new words and tougher mixes — you said you have 18 versions, so swap them and keep it fresh.
              Race a friend or aim for a faster time.
              Each round feels new, and that’s the fun.
            </p>
          </div>

          <div className='game-image-container'>
            <Link href="/word-hunt">
              <img className='game-image' src='./images/Puzzle1.webp' alt='printable word puzzles adventure' />
            </Link>
            <Link href="/puzzle-women">
              <img className='game-image' src='./images/Puzzle2.webp' alt='Play puzzles on printable word puzzles' />
            </Link>
            <Link href="/puzzle-words">
              <img className='game-image' src='./images/Puzzle3.webp' alt='Explore printable word puzzles puzzles' />
            </Link>
            <Link href="/word-game">
              <img className='game-image' src='./images/Puzzle5.webp' alt='Online printable word puzzles game' />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChildrenWord;


