"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["cookies", "Workout", "SHARPEN"];
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
        <h4 className="current-color">Current Level 9</h4>
        <h1 className="color">Large print word search puzzles</h1>
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
            <Link href="/throughout-or-throught" className="button2 mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h1 className="instructions-title">How to Play Large Print Word Search Puzzles</h1>
            <p className="instructions-description">
              Large print word search puzzles are a relaxing and stimulating way to exercise your brain, expand your vocabulary, and enjoy some screen-free entertainment. Designed with bigger letters for easier reading, these puzzles are ideal for seniors, kids, or anyone who prefers a more comfortable puzzle experience. Whether you’re solving on paper or enjoying a digital version, this guide will show you how to play large print word search puzzles, including types, rules, strategies, and expert tips.
            </p>
            <h2 className="instruction-step">1. Different Types of Large Print Word Search Puzzles</h2>
            <p className="instructions-description">
              Large print word search puzzles come in a variety of formats—classic themed puzzles, timed challenges, and even interactive online versions. You can play alone or challenge friends to see who finds all the words first. The large font makes it accessible and fun for all ages!
            </p>
            <h3 className="instruction-step">2. Understand the Rules</h3>
            <p className="instructions-description">
              The goal of a large print word search puzzle is simple: find and circle all the listed words hidden in a grid of letters. Words may appear horizontally, vertically, diagonally, and even backward. Follow the instructions provided in each puzzle to know the word list and direction patterns allowed.
            </p>
            <ul className="instructions-list">
              <li>Each puzzle contains a word list you need to locate in the grid.</li>
              <li>Words may be hidden in any direction: up, down, across, or diagonal.</li>
              <li>Complete all the words in the list to win the puzzle.</li>
              <li>If stuck, scan the grid slowly and look for familiar letter combinations.</li>
            </ul>
            <h4 className="instruction-step">3. Set Up Your Space</h4>
            <p className="instructions-description">
              For printed word search puzzles, choose a quiet and well-lit space. Use a pencil or highlighter to mark the words. If you're playing online, adjust your device’s brightness and zoom to ensure clear visibility for extended puzzle-solving sessions.
            </p>
            <h5 className="tips-title">Tips for Success</h5>
            <ul className="instructions-list">
              <li><strong>Stay Focused:</strong> Take your time and scan the puzzle line by line.</li>
              <li><strong>Highlight as You Go:</strong> Mark off each found word to avoid confusion.</li>
              <li><strong>Practice Regularly:</strong> The more puzzles you solve, the quicker your word-spotting skills become.</li>
              <li><strong>Use Word Patterns:</strong> Look for unique letters or common word beginnings to find matches faster.</li>
              <li><strong>Challenge Yourself:</strong> Try puzzles with larger grids or longer word lists as you improve.</li>
            </ul>
            <h6 className="instruction-step">Conclusion</h6>
            <p className="instructions-description">
              Large print word search puzzles are a wonderful way to relax, have fun, and give your brain a healthy workout. They’re especially great for older adults or anyone seeking a visually comfortable puzzle format. With a bit of patience and regular practice, you’ll improve your observation and language skills while enjoying each satisfying word you find. So grab your favorite puzzle and get ready to search and discover—one word at a time!
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


