"use client"

import React, { useState } from 'react';
import "./word-game.css"
import Link from 'next/link';


const Wordcommittee = () => {
  const words = ["committee", "Cancel", "CONSOLE"];
  const [currentLevel, setCurrentLevel] = useState(0);
  const [guess, setGuess] = useState('');
  const [scrambledWord, setScrambledWord] = useState(scrambleWord(words[0]));
  const [gameOver, setGameOver] = useState(false);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function scrambleWord(word) {
    const arr = word.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
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
        <p className="current-color">Current Level 16</p>
        {!gameOver ? (
          <>
            <div className="level">Word {currentLevel + 1}</div>
            <div className="word">{scrambledWord}</div>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Your Guess"
              aria-label="Guess the scrambled word"
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
      <div className="word-instructions-container">
        <div className="word-instructions-content">
          <div className="word-instructions">
            <h1 className="word-title">Committee or Commitee – Can You Spell It Right?</h1>

            <p className="word-description">
              Ever mix up <strong>Committee or Commitee</strong>? Don’t worry, it happens to a lot of people.
              They look almost the same, but one’s right and the other’s just a letter short.
              The tricky part is, your eyes don’t always catch it right away.
              “Committee” hangs onto both m’s and t’s — that’s what makes it correct.
              It’s a small detail, but that’s where this game gets fun.
            </p>

            <h2 className="word-step">How to Play</h2>
            <p className="word-description">
              When the word appears, the letters are all jumbled up.
              Your job is simple — drag or type them into the right order.
              Think you’ve got it? Hit submit and see if you guessed the right spelling.
              If it’s wrong, shuffle again and give it another try.
              No pressure here; it’s more about spotting patterns and training your eyes than being perfect.
            </p>

            <h2 className="word-step">Why It’s Fun</h2>
            <p className="word-description">
              You know that little spark you get when you spot the right word? That’s what makes it fun.
              Sometimes you nail it on the first go, other times you’re sure it’s right and then—nope, one letter off.
              Those double letters really mess with your head, in the best way.
              It’s not too serious, just something that keeps you thinking without feeling like you’re studying.
              A nice break for your brain, but still kinda sneaky learning at the same time.
            </p>

            <h2 className="word-step">Extra Challenge</h2>
            <p className="word-description">
              If you’re up for a bit more fun, try timing yourself and see how fast you can get it right.
              Or play against a friend — it gets funny when both of you trip on the same tricky word.
              Throw in some longer ones too, where those double letters hide right in the middle.
              Sometimes you’ll spot it right away, other times it takes a few tries before it clicks.
              Either way, it keeps you guessing and makes you want to go for just one more round.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wordcommittee;


