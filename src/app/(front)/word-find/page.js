"use client"

import React, { useState} from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["maker", "Immaculate", "SPACES"];
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
        <h4 className="current-color">Current Level 7</h4>
        <h1 className="color">Immaculate Puzzle</h1>
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
            <Link href="/word-maker" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h1 className="instructions-title">How to play immaculate puzzle game</h1>
            <p className="instructions-description">Immaculate puzzle are a delightful way to challenge your mind, improve cognitive skills, improve your picking power, and enjoy some leisure time.Immaculate puzzle come in various forms, with unique content from traditional immaculate puzzle to sophisticated digital games. The cross immaculate puzzle guide will walk you through the basic principles of playing different types of immaculate puzzles games, offering tips and strategies to enhance your experience.</p>
            <h2 className="instruction-step">1. Different Types of immaculate puzzle:</h2>
            <p className="instructions-description">Immaculate puzzles games come in many varieties, each with unique mechanics and objectives.</p>
            <h3 className="instruction-step">2. Understand the Rules:</h3>
            <p className="instructions-description">Each words has specific rules and objectives. Read the instructions carefully before starting.</p>
            <ul className="instructions-list">
              <li>In this game players have 3 sub-levels</li>
              <li>If all sub-levels are completed.</li>
              <li>Player wins this game.</li>
              <li>Otherwise, play again and thinking how to complete this</li>
            </ul>
            <h4 className="instruction-step">3. Set up Your Space:</h4>
            <p className="instructions-description">For physical immaculate puzzle, ensure you have a comfortable and well-lit workspace. For digital words game, adjust your device's brightness and volume settings to suit your environment and mind.</p>
            <h5 className="tips-title">Tips for Success</h5>
            <ul className="instructions-list">
              <li>Stay Calm: Immaculate puzzle game should be enjoyable; take breaks if you feel frustrated.</li>
              <li>Practice Regularly: The more you play, the benefit you get.</li>
              <li>Learn from Mistakes: Analyze what went wrong and try different approaches.</li>
              <li>Challenge Yourself: Gradually increase the difficulty level to keep improving your skills and thinking process.</li>
            </ul>
            <h6 className="instruction-step">Conclusion:</h6>
            <p className="instructions-description">Immaculate puzzle offer endless opportunities to test your mental acuity, relax, and have fun. By understanding the rules, using effective strategies, and practicing regularly, you can enhance your physical words-solving skills and enjoy the satisfying feeling of cracking even the toughest immaculate puzzle. So, choose your game, set up your space, and dive into the fascinating world of immaculate puzzle!</p>
          </div>
          <div className='game-image-container'>
            <Link href="/hard-spelling">
              <img className='game-image' src='./images/Freezenova1.webp' alt='immaculate puzzle adventure' />
            </Link>
            <Link href="/puzzle-words">
              <img className='game-image' src='./images/Freezenova2.webp' alt='Play puzzles on immaculate puzzle' />
            </Link>
            <Link href="/word-game">
              <img className='game-image' src='./images/Puzzle3.webp' alt='Explore immaculate puzzle puzzles' />
            </Link>
            <Link href="/jigsawplanet1">
              <img className='game-image' src='./images/Freezenova3.webp' alt='Online immaculate puzzle game' />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Game;


