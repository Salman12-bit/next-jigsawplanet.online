"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["among", "Advice", "ACCESSIBLE"];
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
        <h2 className="current-color">Current Level 15</h2>
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
            <Link href="/" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h1 className="instructions-title">How to Play Word Puzzle Games Printable</h1>
            <p className="instructions-description">
              Explore the fun of <strong>word puzzle games printable</strong>! These printable word games are perfect for classrooms, home activities, or on-the-go learning. Each game includes multiple levels with different challenges that help improve vocabulary, spelling, and problem-solving skills.
            </p>
            <h3 className="instruction-step">2. How the Printable Games Work</h3>
            <ul className="instructions-list">
              <li>Each page has a word hunt, crossword, or scrambled letter game to solve.</li>
              <li>Circle or write in the correct answers using the clues provided.</li>
              <li>Finish each section to move to the next sheet or difficulty level.</li>
            </ul>
            <h4 className="instruction-step">3. Tips for Fun & Learning</h4>
            <ul className="instructions-list">
              <li>Time yourself or compete with friends to make it more exciting.</li>
              <li>Start with easy sheets and work your way up to more complex puzzles.</li>
              <li>Combine the printables with themed vocabulary words for a richer experience.</li>
            </ul>

            <h5 className="instruction-step">Conclusion</h5>
            <p className="instructions-description">
              <strong>Word puzzle games printable</strong> are a simple and fun way to encourage learning anytime, anywhere. Whether you're in a classroom, at home, or traveling, these games make word practice engaging and stress-free. Just print, play, and enjoy the brain-boosting fun!
            </p>
          </div>
          <div className='game-image-container'>
            <Link href="/word-difficult">
              <img className='game-image' src='./images/Freezenova1.webp' alt='Printable word puzzle game - winter-themed word hunt challenge for kids' />
            </Link>
            <Link href="/puzzle-words">
              <img className='game-image' src='./images/Freezenova2.webp' alt='Seasonal printable word puzzle game - fun word hunt activity' />
            </Link>
            <Link href="/summer-word">
              <img className='game-image' src='./images/Puzzle3.webp' alt='Colorful summer-themed printable word puzzle game for children' />
            </Link>
            <Link href="/word-find">
              <img className='game-image' src='./images/Freezenova3.webp' alt='Interactive printable word puzzle game - winter word search fun' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;


