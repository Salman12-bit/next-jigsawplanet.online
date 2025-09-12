"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["jungle", "Hunt", "LANDSCAPE"];
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
        <h2 className="current-color">Current Level 14</h2>
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
            <Link href="/free-printable" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h1 className="instructions-title">How to Play Word Hunt Puzzle Game</h1>
            <p className="instructions-description">
              Dive into the challenge of a <strong>Word Hunt Puzzle Game</strong>! In this exciting word game, each level contains 3 sublevels. Solve one word puzzle per sublevel to progress. Complete all sublevels to unlock the next level and keep the hunt going!
            </p>
            <h2 className="instruction-step">1. Game Setup</h2>
            <ul className="instructions-list">
              <li>Choose a quiet space with good lighting and a pencil or device.</li>
              <li>Get ready to test your vocabulary, spelling, and word pattern skills!</li>
            </ul>
            <h3 className="instruction-step">2. How It Works</h3>
            <ul className="instructions-list">
              <li>Each sublevel presents a word puzzle to solve—find the hidden word using clues or scrambled letters.</li>
              <li>Guess the correct word to move to the next sublevel.</li>
              <li>Clear all 3 sublevels to complete a full level.</li>
            </ul>
            <h4 className="instruction-step">3. Tips for Success</h4>
            <ul className="instructions-list">
              <li>Look for familiar patterns, prefixes, or suffixes in the letters.</li>
              <li>Use hints when you're stuck to keep the game moving.</li>
              <li>Challenge your friends or try to beat your own best time for extra fun!</li>
            </ul>
            <h5 className="instruction-step">Conclusion</h5>
            <p className="instructions-description">
              A <strong>Word Hunt Puzzle Game</strong> is a fun and brain-boosting way to improve your vocabulary and focus. Whether you're playing alone or with others, the challenge of discovering hidden words keeps every level exciting. Start your word hunt today!
            </p>
          </div>
          <div className='game-image-container'>
            <Link href="/word-difficult">
              <img className='game-image' src='./images/Freezenova1.webp' alt='challenging word hunt puzzle game with a winter theme' />
            </Link>
            <Link href="/puzzle-words">
              <img className='game-image' src='./images/Freezenova2.webp' alt='play a word hunt puzzle game online with seasonal clues' />
            </Link>
            <Link href="/summer-word">
              <img className='game-image' src='./images/Puzzle3.webp' alt='fun and festive word hunt puzzle game with colorful design' />
            </Link>
            <Link href="/word-find">
              <img className='game-image' src='./images/Freezenova3.webp' alt='interactive word hunt puzzle game with winter-themed words' />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Game;


