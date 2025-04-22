"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["setting", "Javascript", "SELECTION"];
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
        <h1 className="color">Adult word search puzzles</h1>
        <h2 className="current-color">Current Level 10</h2>
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
            <h1 className="instructions-title">How to Play Adult Word Search Puzzles</h1>

            <p className="instructions-description">
              <strong>Adult word search puzzles</strong> are a relaxing, brain-boosting activity that blends entertainment with mental exercise. Designed with themes and vocabulary that appeal to grown-up interests, these puzzles help improve focus, vocabulary, and pattern recognition. Whether you’re unwinding with a printable puzzle or playing online, this guide will teach you how to play adult word search puzzles, the rules, variations, and smart strategies to enhance your experience.
            </p>

            <h2 className="instruction-step">1. Explore Different Types of Adult Word Search Puzzles</h2>
            <p className="instructions-description">
              There are many formats available—from themed puzzles (like travel, wine, literature, or careers) to brain-challenging mega grids or timed games. You can choose from printable books, apps, or interactive websites. Whether you're solving solo or with friends, adult word searches come in a variety of styles to keep things fun and mentally stimulating.
            </p>

            <h3 className="instruction-step">2. Learn the Rules</h3>
            <p className="instructions-description">
              The goal is simple: find and mark all the hidden words from a given list. Words may be placed horizontally, vertically, diagonally, and even backwards. Each puzzle may have its own specific rules, so it’s helpful to check the directions before you start.
            </p>
            <ul className="instructions-list">
              <li>Review the word list provided with the puzzle.</li>
              <li>Words can be hidden in any direction—even in reverse!</li>
              <li>Circle or highlight each word as you find it.</li>
              <li>Complete the list to finish the puzzle.</li>
            </ul>

            <h4 className="instruction-step">3. Set Up Your Puzzle Space</h4>
            <p className="instructions-description">
              Create a comfortable space for puzzle-solving:
              <ul>
                <li>If you're using a printed puzzle, sit at a clean, well-lit table with a pencil or highlighter.</li>
                <li>For digital puzzles, adjust your screen brightness and font size for optimal visibility.</li>
              </ul>
            </p>

            <h5 className="tips-title">Expert Tips for Solving Adult Word Search Puzzles</h5>
            <ul className="instructions-list">
              <li><strong>Start with Unique Words:</strong> Look for uncommon or longer words first—they’re often easier to spot.</li>
              <li><strong>Scan Strategically:</strong> Move line by line or column by column to stay organized.</li>
              <li><strong>Mark as You Go:</strong> Highlight words as you find them to avoid rechecking the same areas.</li>
              <li><strong>Use Letter Clues:</strong> Find rare letter patterns like “Q” or “Z” to locate harder words quickly.</li>
              <li><strong>Challenge Yourself:</strong> Try larger puzzles or set a timer for a fun mental workout.</li>
            </ul>

            <h6 className="instruction-step">Conclusion</h6>
            <p className="instructions-description">
              <strong>Adult word search puzzles</strong> are more than just a fun pastime—they’re a proven way to stimulate your brain and reduce stress. With regular practice, you’ll get faster and more efficient at spotting words while enjoying themes that speak to your interests. Whether you're relaxing at home or traveling, these puzzles are a portable and engaging way to stay sharp. Grab your puzzle and start searching—one word at a time!
            </p>
          </div>

          <div className='game-image-container'>
            <Link href="/hard-spelling">
              <img className='game-image' src='./images/Freezenova1.webp' alt='word ladder solver adventure' />
            </Link>
            <Link href="/puzzle-words">
              <img className='game-image' src='./images/Freezenova2.webp' alt='Play puzzles on word ladder solver' />
            </Link>
            <Link href="/word-game">
              <img className='game-image' src='./images/Puzzle3.webp' alt='Explore word ladder solver puzzles' />
            </Link>
            <Link href="/word-find">
              <img className='game-image' src='./images/Freezenova3.webp' alt='Online word ladder solver game' />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Game;


