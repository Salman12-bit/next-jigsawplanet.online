"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["daily", "Green", "PLAGIARISM"];
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
        <h1 className="color">Printable Word Search Puzzles for Adults</h1>
        <h2 className="current-color">Current Level 13</h2>
        {!gameOver ? (
          <>
            <div className="level">Level {currentLevel + 1}</div>
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
            <Link href="/referred-or-refered" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h1 className="instructions-title">How to Play Harry Potter Word Puzzles</h1>

            <p className="instructions-description">
              Enter the magical world of <strong>Harry Potter word puzzles</strong>! In this game, each level has 3 sublevels. Solve one word per sublevel to move forward. Complete all sublevels to unlock the next level.
            </p>

            <h2 className="instruction-step">1. Game Setup</h2>
            <ul className="instructions-list">
              <li>Play in a quiet spot with a pen or pencil.</li>
              <li>Have your Harry Potter knowledge ready—spells, places, and characters are all part of the fun!</li>
            </ul>

            <h3 className="instruction-step">2. How It Works</h3>
            <ul className="instructions-list">
              <li>Each sublevel gives you one Harry Potter–themed word to solve.</li>
              <li>Use clues or scrambled letters to guess the word.</li>
              <li>Finish 3 sublevels to complete the level.</li>
            </ul>

            <h4 className="instruction-step">3. Tips for Success</h4>
            <ul className="instructions-list">
              <li>Look for special letters or names from the series.</li>
              <li>Use hints if you get stuck.</li>
              <li>Challenge friends or time yourself for extra fun!</li>
            </ul>

            <h5 className="instruction-step">Conclusion</h5>
            <p className="instructions-description">
              <strong>Harry Potter word puzzles</strong> are fun, magical, and a great brain boost. Solve words, level up, and enjoy the journey through the Wizarding World!
            </p>
          </div>
          <div className='game-image-container'>
            <Link href="/word-difficult">
              <img className='game-image' src='./images/Freezenova1.webp' alt='challenging winter word search puzzle for kids' />
            </Link>
            <Link href="/daily-word">
              <img className='game-image' src='./images/Freezenova2.webp' alt='play winter word search puzzle online' />
            </Link>
            <Link href="/summer-word">
              <img className='game-image' src='./images/Puzzle3.webp' alt='fun and festive winter word search puzzle' />
            </Link>
            <Link href="/word-find">
              <img className='game-image' src='./images/Freezenova3.webp' alt='interactive winter word search puzzle game' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;


