"use client";

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import "./puzzle.css";
import Link from "next/link";

const gameLayout = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
};

const AlphabetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-gap: 8px;
`;

const initialBlocks = [
  { id: 1, symbol: "A" },
  { id: 2, symbol: "B" },
  { id: 3, symbol: "C" },
  { id: 4, symbol: "D" },
  { id: 5, symbol: "E" },
  { id: 6, symbol: "F" },
  { id: 7, symbol: "G" },
  { id: 8, symbol: "H" },
  { id: 9, symbol: "I" },
];

const AlphabetPuzzle = () => {
  const [blocks, setBlocks] = useState([]);
  const [message, setMessage] = useState("Arrange letters into ABC order!");
  const [level, setLevel] = useState(2);

  const shuffleBlocks = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const startGame = useCallback(() => {
    setBlocks(shuffleBlocks([...initialBlocks]));
    setMessage("Arrange letters into ABC order!");
  }, []);

  useEffect(() => {
    startGame();
  }, [level, startGame]);

  const onDragStart = (e, index) => {
    e.dataTransfer.setData("blockIndex", index);
  };

  const onDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("blockIndex");
    if (dragIndex === "") return;

    const updated = [...blocks];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(dropIndex, 0, moved);

    setBlocks(updated);

    const solved =
      updated[0].symbol === "A" &&
      updated[1].symbol === "B" &&
      updated[2].symbol === "C" &&
      updated[3].symbol === "D" &&
      updated[4].symbol === "E" &&
      updated[5].symbol === "F" &&
      updated[6].symbol === "G" &&
      updated[7].symbol === "H" &&
      updated[8].symbol === "I";

    if (solved) {
      setMessage("🎉 You solved the ABC Puzzle!");
    }
  };

  return (
    <div className="ap-wrapper" style={{ padding: "20px" }}>
      <div className="ap-outer">
        <div className="ap-row">
          <div className="ap-top" style={gameLayout}>
            <div className="ap-gamebox">
              <p className="ap-stage-title">ABC Puzzle – Stage {level}</p>
              <AlphabetGrid className="ap-board">
                {blocks.map((block, index) => (
                  <div
                    key={block.id}
                    className="ap-block"
                    draggable
                    onDragStart={(e) => onDragStart(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => onDrop(e, index)}
                  >
                    {block.symbol}
                  </div>
                ))}
              </AlphabetGrid>
              <div className="ap-status">{message}</div>
              <button className="ap-btn" onClick={startGame}>
                Restart Puzzle
              </button>
              {message.includes("🎉") && (
                <Link href="/math-game">
                  <button className="ap-btn ms-2">Next Puzzle</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="ap-instructions-container">
        <div className="ap-instructions">
          <h1 className="instructions-title">A to Z Puzzle – Sort the Alphabet</h1>

          <p className="instructions-description">
            A to Z Puzzle is a game with every letter of the alphabet, all mixed up.
            The board looks messy at first, with letters scattered everywhere.
            Your goal is to move them until they line up from a all the way to z.
            It sounds simple, but once you start shifting pieces, it turns into a fun little challenge.
          </p>

          <h2 className="instruction-step">How to Play</h2>
          <p className="instructions-description">
            Look at the board. Pick a letter and drag it to the spot where it belongs. Then move the next one. Some letters fall into place quickly; others feel like they keep getting in the way. Bit by bit, the alphabet starts to take shape. If things get messy, no problem—mix it up and start fresh.
          </p>


          <h2 className="instruction-step">Why It’s Fun</h2>
          <p className="instructions-description">
            The fun comes from fixing the mess piece by piece. One moment, the board feels close to done; the next, it feels mixed up again. Getting a stretch of letters right, like l m n o p, feels like a win. And when the full line finally connects from a to z, it feels satisfying every time.
          </p>

          <h2 className="instruction-step">Who Can Play</h2>
          <p className="instructions-description">
            Kids like spotting letters they know.
            Families can solve the puzzle together, passing turns.
            Adults can play it as a quick break.
            The idea is simple, so anyone can join without needing rules explained.
          </p>

          <h2 className="instruction-step">Next Challenge</h2>
          <p className="instructions-description">
            If the regular puzzle feels easy, try it with a timer.
            Race a friend to see who can sort the alphabet faster.
            Or shuffle until nothing makes sense and slowly rebuild it.
            Each round feels a little different, and finishing always feels good.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlphabetPuzzle;
