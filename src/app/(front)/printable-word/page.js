"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Game = () => {
  const words = ["insert", "Conditional", "FORMATS"];
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
        <h2 className="current-color">Current Level 11</h2>
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
            <h1 className="instructions-title">How to Play Hard Word Search Puzzles Printable</h1>

            <p className="instructions-description">
              <strong>Hard word search puzzles printable</strong> are a challenging and rewarding way to test your focus and vocabulary skills. These tough puzzles often have bigger grids, longer words, and tricky word placements to keep you thinking. Whether you're solving alone or with friends, this guide will help you understand how to play hard printable word searches, master the rules, and sharpen your puzzle-solving strategies.
            </p>

            <h2 className="instruction-step">1. Explore Different Types of Hard Word Search Puzzles Printable</h2>
            <p className="instructions-description">
              Hard word search puzzles come in many varieties:
              <ul>
                <li><strong>Themed Grids:</strong> Tough puzzles based on topics like science, history, or literature.</li>
                <li><strong>Large Printables:</strong> Mega grids with dozens of hidden words for extra challenge.</li>
                <li><strong>Reverse and Diagonal Puzzles:</strong> Words hidden backwards, diagonally, or wrapped around corners.</li>
              </ul>
              You can download and print these puzzles easily to enjoy anytime, anywhere.
            </p>

            <h3 className="instruction-step">2. Learn the Rules</h3>
            <p className="instructions-description">
              The goal is to find and mark all the hidden words from the provided list. In hard puzzles, expect words to be hidden in tricky ways.
            </p>
            <ul className="instructions-list">
              <li>Review the full list of words before starting.</li>
              <li>Words can appear horizontally, vertically, diagonally, or backward.</li>
              <li>Circle or highlight each word you find.</li>
              <li>Finish the entire list to complete the puzzle.</li>
            </ul>

            <h4 className="instruction-step">3. Set Up Your Puzzle Space</h4>
            <p className="instructions-description">
              Create a comfortable space for the best puzzle-solving experience:
              <ul>
                <li>Print your puzzle clearly and have extra copies if needed.</li>
                <li>Use a bright, quiet space with good lighting.</li>
                <li>Keep highlighters, pens, or pencils nearby for marking words.</li>
              </ul>
            </p>

            <h5 className="tips-title">Pro Tips for Solving Hard Word Search Puzzles Printable</h5>
            <ul className="instructions-list">
              <li><strong>Look for Uncommon Letters:</strong> Spot rare letters like “X,” “Q,” or “Z” first.</li>
              <li><strong>Scan Systematically:</strong> Search row by row or column by column to stay organized.</li>
              <li><strong>Use the Word Length:</strong> Longer or unusual words can be easier to find once you spot a few letters.</li>
              <li><strong>Mark Found Words Quickly:</strong> This avoids confusion and speeds up your search.</li>
              <li><strong>Challenge Yourself:</strong> Set a timer or race a friend for extra excitement!</li>
            </ul>

            <h6 className="instruction-step">Conclusion</h6>
            <p className="instructions-description">
              <strong>Hard word search puzzles printable</strong> offer a fun and challenging way to boost your brainpower and pass the time. With bigger grids, sneaky word placements, and exciting themes, these puzzles are perfect for anyone who loves a mental workout. Download, print, and dive into a tough word search today—you'll feel proud every time you complete one!
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


