"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["sandcastles", "Popsicles", "SCRAMBLEDWORD"];
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
        <h2 className="current-color">Current Level 12</h2>
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
            <Link href="/daily-word" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h1 className="instructions-title">How to Play Summer Word Search Puzzles</h1>

            <p className="instructions-description">
              <strong>Summer word search puzzles</strong> are a fun and engaging way to celebrate the sunny season while keeping your brain active. These puzzles are filled with summer-themed words related to vacations, beaches, sunshine, and more. Whether you're enjoying them solo or with family, this guide will show you how to play summer word searches, understand the rules, and make the most of your puzzle-solving time.
            </p>

            <h2 className="instruction-step">1. Explore Different Types of Summer Word Search Puzzles</h2>
            <p className="instructions-description">
              Summer word searches come in a variety of styles:
              <ul>
                <li><strong>Beach-Themed Grids:</strong> Words related to oceans, sandcastles, surfboards, and beachwear.</li>
                <li><strong>Vacation Adventures:</strong> Hidden words from road trips, camping, and summer holidays.</li>
                <li><strong>Seasonal Surprises:</strong> Terms about sunshine, popsicles, fireworks, and summer activities.</li>
              </ul>
              These puzzles are easy to print and perfect for road trips, poolside relaxation, or summer camp downtime.
            </p>

            <h3 className="instruction-step">2. Learn the Rules</h3>
            <p className="instructions-description">
              The goal is simple: find and highlight all the summer-themed words listed. They can be hidden in any direction.
            </p>
            <ul className="instructions-list">
              <li>Look over the full word list before starting.</li>
              <li>Words may appear horizontally, vertically, diagonally, or even backward.</li>
              <li>Set or add each word as you find it.</li>
              <li>Complete the full list to finish the puzzle.</li>
            </ul>

            <h4 className="instruction-step">3. Set Up Your Puzzle Space</h4>
            <p className="instructions-description">
              Create a relaxing summer atmosphere to solve your puzzle:
              <ul>
                <li>Print your puzzle clearly or download it to a tablet.</li>
                <li>Find a quiet, shady spot or cozy place indoors.</li>
                <li>Keep highlighters, colored pens, or pencils handy for marking words.</li>
              </ul>
            </p>

            <h5 className="tips-title">Pro Tips for Solving Summer Word Search Puzzles</h5>
            <ul className="instructions-list">
              <li><strong>Spot Unique Words First:</strong> Look for words like “surfboard” or “popsicle” with distinct letters.</li>
              <li><strong>Scan in Order:</strong> Use a left-to-right or top-to-bottom approach for consistency.</li>
              <li><strong>Use Seasonal Context:</strong> Think of common summer terms to help you predict word locations.</li>
              <li><strong>Highlight As You Go:</strong> This keeps track of your progress and avoids rechecking.</li>
              <li><strong>Make It a Game:</strong> Race a friend or solve within a time limit for extra fun!</li>
            </ul>

            <h6 className="instruction-step">Conclusion</h6>
            <p className="instructions-description">
              <strong>Summer word search puzzles</strong> are the perfect way to mix fun with brain training during the warmer months. From sunny beach terms to vacation vibes, these puzzles are ideal for both kids and adults looking for screen-free entertainment. Download, print, and dive into your summer-themed word search—you’ll stay sharp while enjoying the season!
            </p>
          </div>

          <div className='game-image-container'>
            <Link href="/word-difficult">
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


