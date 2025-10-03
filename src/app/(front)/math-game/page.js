"use client";

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import "./puzzle.css";
import Link from "next/link";

const containerStyle1 = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
};

const Board1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-gap: 8px;
`;

const initialCards = [
  { id: 1, value: "J" },
  { id: 2, value: "J" },
  { id: 3, value: "1" },
  { id: 4, value: "K" },
  { id: 5, value: "K" },
  { id: 6, value: "2" },
  { id: 7, value: "L" },
  { id: 8, value: "L" },
  { id: 9, value: "3" },
];

const ABCPuzzle = () => {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("Arrange letters into Order!");
  const [level, setLevel] = useState(1);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const initializeGame = useCallback(() => {
    setCards(shuffle([...initialCards]));
    setMessage("Arrange letters into Order!");
  }, []);

  useEffect(() => {
    initializeGame();
  }, [level, initializeGame]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("cardIndex", index);
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("cardIndex");
    if (dragIndex === "") return;

    const newCards = [...cards];
    const [dragged] = newCards.splice(dragIndex, 1);
    newCards.splice(dropIndex, 0, dragged);

    setCards(newCards);


    const isSolved =
      newCards[0].value === "J" &&
      newCards[1].value === "K" &&
      newCards[2].value === "L" &&
      newCards[3].value === "J" &&
      newCards[4].value === "K" &&
      newCards[5].value === "L" &&
      newCards[6].value === "1" &&
      newCards[7].value === "2" &&
      newCards[8].value === "3";

    if (isSolved) {
      setMessage("🎉 You solved the ABC math Puzzle!");
    }
  };

  return (
    <div className="text-conainer" style={{ padding: "20px" }}>
      <div className="planet-container">
        <div className="row">
          <div className="upper-container" style={containerStyle1}>
            <div className="game-container">
              <p className="level-color">ABC Math Puzzle – Level {level}</p>
              <Board1 className="game-board">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className="card-tile"
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, index)}
                  >
                    {card.value}
                  </div>
                ))}
              </Board1>
              <div className="message">{message}</div>
              <button className="button" onClick={initializeGame}>
                Restart ABC math Puzzle
              </button>
              {message.includes("🎉") && (
                <Link href="/slider-game">
                  <button className="button ms-2">Next Puzzle</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions">
          <h1 className="instructions-title">ABC Math Games – Numbers Meet Letters</h1>

          <p className="instructions-description">
            ABC Math Games mix two things kids see every day: letters and numbers. The board is filled with both scrambled and waiting to be solved. Match, sort, or line them up until everything makes sense. It starts with playful, but each round feels like a new little puzzle to figure out.
          </p>

          <h2 className="instruction-step">How to Play</h2>
          <p className="instructions-description">
            Look at the pieces on the screen.
            Some show letters, others show numbers.
            Drag one into place, then try the next.
            Maybe you’re matching pairs, maybe you’re fixing the order.
            Sometimes it works right away, other times you need a second try.
            Keep going until the board is clear.
          </p>

          <h2 className="instruction-step">Why It’s Fun</h2>
          <p className="instructions-description">
            The fun comes from the mix.
            One moment you’re matching a letter, the next you’re solving a number clue.
            It keeps your eyes moving and your brain guessing.
            Each right move feels satisfying, and finishing the whole set always feels like a win.
            Simple rules, but plenty of little surprises.
          </p>

          <h2 className="instruction-step">Next Challenge</h2>
          <p className="instructions-description">
            Try bigger puzzles with more pieces.
            Add a timer if you want pressure.
            Compete with a friend and race to finish first.
            ABC math games can stay calm and simple, or turn into a test of speed and focus.
            You choose how far to push it.
          </p>
        </div>


      </div>
    </div>
  );
};

export default ABCPuzzle;











