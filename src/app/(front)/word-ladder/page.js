"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["Ladder", "scramble", "INCORRECT"];
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
        <h4 className="current-color">Current Level 8</h4>
        <h1 className="color">Word ladder solver</h1>
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
            <h1 className="instructions-title">How to Play Word Ladder Solver Game</h1>
            <p className="instructions-description">
              Word ladder solver games are a fun and challenging way to boost your brainpower, improve vocabulary, and enjoy your leisure time. Whether you're solving a traditional paper puzzle or using a digital word ladder solver tool, these games help enhance logical thinking and word association skills. This guide will walk you through how to play word ladder solver games, including types, rules, strategies, and tips to maximize your experience.
            </p>
            <h2 className="instruction-step">1. Different Types of Word Ladder Solver Games</h2>
            <p className="instructions-description">
              Word ladder solver games come in a variety of styles. Some are simple text-based puzzles, while others are interactive games with hints, timers, and challenges. You can play solo or compete with friends to climb the ladder of words!
            </p>
            <h3 className="instruction-step">2. Understand the Rules</h3>
            <p className="instructions-description">
              Each word ladder solver puzzle has a clear goal: transform a start word into an end word by changing one letter at a time, with each intermediate word being valid. Read the instructions carefully to understand how many steps or levels you need to solve.
            </p>
            <ul className="instructions-list">
              <li>The game includes 3 sub-levels to complete.</li>
              <li>If all sub-levels are solved correctly, you win the game.</li>
              <li>If not, analyze your path and try again with a better strategy.</li>
              <li>Think critically about how one letter change can move you closer to the final word.</li>
            </ul>
            <h4 className="instruction-step">3. Set Up Your Space</h4>
            <p className="instructions-description">
              For offline word ladder solver puzzles, choose a quiet and well-lit area to work. If you're using a digital version, make sure your device settings—like brightness and sound—are comfortable for extended play sessions.
            </p>
            <h5 className="tips-title">Tips for Success</h5>
            <ul className="instructions-list">
              <li><strong>Stay Calm:</strong> Keep it fun. If you're stuck, take a short break and return with a fresh mind.</li>
              <li><strong>Practice Often:</strong> The more you play word ladder solver games, the faster and sharper your thinking becomes.</li>
              <li><strong>Learn from Mistakes:</strong> Review where you went off track and try a new path next time.</li>
              <li><strong>Challenge Yourself:</strong> Gradually attempt harder puzzles to improve your problem-solving and word skills.</li>
            </ul>
            <h6 className="instruction-step">Conclusion</h6>
            <p className="instructions-description">
              Word ladder solver games are a powerful tool to train your brain, improve vocabulary, and enjoy a satisfying puzzle-solving experience. With consistent practice and a bit of creativity, you’ll find yourself mastering even the toughest word ladders. So, pick your puzzle, focus your mind, and get ready to climb the word ladder one letter at a time!
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


