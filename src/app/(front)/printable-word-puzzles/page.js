"use client"

import React, { useState } from 'react';
import "./freeze.css"
import Link from 'next/link';


const Game = () => {
  const words = ["COSTA", "pearl", "MOBILE"];
  const [currentLevel, setCurrentLevel] = useState(0);
  const [guess, setGuess] = useState('');
  const [scrambledWord, setScrambledWord] = useState(scrambleWord(words[0]));
  const [gameOver, setGameOver] = useState(false);
  const [correctGuess, setCorrectGuess] = useState(false);

  function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  }

  function checkAnswer() {
    const currentWord = words[currentLevel].toLowerCase();
    if (guess.toLowerCase() === currentWord) {
      setCorrectGuess(true);
    } else {

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
      <div className="Puzzle my-3">
        <h4 className="current-color">Current Level 1</h4>
        <h1 className="color">Word Puzzle Game</h1>
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
            <Link href="/" className="button2y  mx-2">
              Next Level
            </Link>
          </div>
        )}
      </div>
      <div className="welcome-container">
        <h1 className="welcome-title">🧩 Welcome to the Ultimate printable word puzzles Challenge! 🧩</h1>
        <p className="welcome-text">
          Hey there, puzzle solver! 🌟 Every puzzle is a new adventure, and every piece is a chance to unlock your potential.
          This is more than just a game—it's your journey to sharpen your mind, test your skills, and celebrate every small victory.
        </p>
        <ul className="welcome-list">
          <li>🔍 Every piece counts: Take your time, explore the possibilities, and watch how everything falls into place.</li>
          <li>🧠 Sharpen your mind: Solve printable word puzzles to grow stronger, one piece at a time.</li>
          <li>🎯 Embrace the challenge: Don’t give up! The best moments are when everything clicks, and you can say, "I did it!"</li>
        </ul>
        <p className="welcome-text">
          Keep pushing forward, trust your instincts, and most of all—enjoy the journey. You’ve got the mind of a champion, and every printable word puzzles you conquer is a victory worth celebrating! Get ready to piece it all together! 🎉
        </p>
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h2 className="instructions-title">How to Play free printable word puzzles Game</h2>
            <p className="instructions-description">Free free printable word puzzles are a delightful way to challenge your mind, improve cognitive skills, improve your picking power, and enjoy some leisure time. Printable word puzzles come in various forms, with unique content from traditional paper jigsawplanet to sophisticated digital games. The cross word puzzle guide will walk you through the basic principles of playing different types of word puzzles games, offering tips and strategies to enhance your experience.</p>
            <h3 className="instruction-step">1. Different Types of free printable word puzzles:</h3>
            <p className="instructions-description">Word puzzles games come in many varieties, each with unique mechanics and objectives.</p>
            <h3 className="instruction-step">2. Understand the Rules:</h3>
            <p className="instructions-description">Each words has specific rules and objectives. Read the instructions carefully before starting.</p>
            <ul className="instructions-list">
              <li>In this game players have 3 sub-levels</li>
              <li>If all sub-levels are completed.</li>
              <li>Player wins this game.</li>
              <li>Otherwise, play again and thinking how to complete this</li>
            </ul>
            <h3 className="instruction-step">3. Set up Your Space:</h3>
            <p className="instructions-description">For physical word puzzle, ensure you have a comfortable and well-lit workspace. For digital words game, adjust your device's brightness and volume settings to suit your environment and mind.</p>
            <h2 className="tips-title">Tips for Success</h2>
            <ul className="instructions-list">
              <li>Stay Calm: Words puzzles game should be enjoyable; take breaks if you feel frustrated.</li>
              <li>Practice Regularly: The more you play, the benefit you get.</li>
              <li>Learn from Mistakes: Analyze what went wrong and try different approaches.</li>
              <li>Challenge Yourself: Gradually increase the difficulty level to keep improving your skills and thinking process.</li>
            </ul>
            <h3 className="instruction-step">Conclusion:</h3>
            <p className="instructions-description">Cross words offer endless opportunities to test your mental acuity, relax, and have fun. By understanding the rules, using effective strategies, and practicing regularly, you can enhance your physical words-solving skills and enjoy the satisfying feeling of cracking even the toughest free printable word puzzles. So, choose your game, set up your space, and dive into the fascinating world of printable word puzzles!</p>
          </div>
          <div className='game-image-container'>
            <Link href="/wordpuzzle">
              <img className='game-image' src='./images/Freezenova1.webp' alt='Freezenova game on jigsaw planet' />
            </Link>
            <Link href="/wordpuzzle">
              <img className='game-image' src='./images/Freezenova2.webp' alt='Jigsaw planet puzzle - Freezenova' />
            </Link>
            <Link href="/wordpuzzle">
              <img className='game-image' src='./images/Freezenova3.webp' alt='Free jigsaw planet game' />
            </Link>
            <Link href="/wordpuzzle">
              <img className='game-image' src='./images/Freezenova4.webp' alt='Jigsaw puzzle on jigsaw planet' />
            </Link>
            <Link href="/wordpuzzle">
              <img className='game-image' src='./images/Freezenova5.webp' alt='Free puzzle game on jigsaw planet' />
            </Link>
            <Link href="/wordpuzzle">
              <img className='game-image' src='./images/Freezenova6.webp' alt='Freezenova puzzle on jigsaw planet' />
            </Link>
            <Link href="/wordpuzzle">
              <img className='game-image' src='./images/Freezenova7.webp' alt='Play free puzzles on jigsaw planet' />
            </Link>
            <Link href="/wordpuzzle">
              <img className='game-image' src='./images/Freezenova8.webp' alt='Jigsaw planet puzzle - Freezenova' />
            </Link>
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle1.webp' alt='Jigsaw planet adventure' />
            </Link>
            <Link href="/jigsaw-planet1">
              <img className='game-image' src='./images/Puzzle2.webp' alt='Play puzzles on jigsaw planet' />
            </Link>
            <Link href="/jigsaw-planet1">
              <img className='game-image' src='./images/Puzzle3.webp' alt='Explore jigsaw planet puzzles' />
            </Link>
            <Link href="/jigsaw-planet">
              <img className='game-image' src='./images/Puzzle5.webp' alt='Online jigsaw planet game' />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Game;


