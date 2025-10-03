"use client";

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import "./puzzle.css";
import Link from "next/link";

const layoutBox = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-gap: 8px;
`;

const puzzleTiles = [
  { id: 1, symbol: "M" },
  { id: 2, symbol: "N" },
  { id: 3, symbol: "O" },
  { id: 4, symbol: "M" },
  { id: 5, symbol: "N" },
  { id: 6, symbol: "O" },
  { id: 7, symbol: "M" },
  { id: 8, symbol: "N" },
  { id: 9, symbol: "" }, // empty space
];

const LetterPuzzle = () => {
  const [pieces, setPieces] = useState([]);
  const [notice, setNotice] = useState("Arrange letters into Order!");
  const [stageNum, setStageNum] = useState(1);

  const shufflePieces = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const resetGame = useCallback(() => {
    setPieces(shufflePieces([...puzzleTiles]));
    setNotice("Arrange letters into ABC Order!");
  }, []);

  useEffect(() => {
    resetGame();
  }, [stageNum, resetGame]);

  const isAdjacent = (i, j) => {
    const rowI = Math.floor(i / 3);
    const colI = i % 3;
    const rowJ = Math.floor(j / 3);
    const colJ = j % 3;

    return (
      (rowI === rowJ && Math.abs(colI - colJ) === 1) ||
      (colI === colJ && Math.abs(rowI - rowJ) === 1)
    );
  };

  const moveTile = (idx) => {
    const emptyIdx = pieces.findIndex((tile) => tile.symbol === "");
    if (isAdjacent(idx, emptyIdx)) {
      const newArrangement = [...pieces];
      [newArrangement[idx], newArrangement[emptyIdx]] = [
        newArrangement[emptyIdx],
        newArrangement[idx],
      ];
      setPieces(newArrangement);

      const solved =
        newArrangement[0].symbol === "M" &&
        newArrangement[1].symbol === "N" &&
        newArrangement[2].symbol === "O" &&
        newArrangement[3].symbol === "M" &&
        newArrangement[4].symbol === "N" &&
        newArrangement[5].symbol === "O" &&
        newArrangement[6].symbol === "M" &&
        newArrangement[7].symbol === "N" &&
        newArrangement[8].symbol === "";

      if (solved) {
        setNotice("🎉 You solved the ABC Sliding Puzzle!");
      }
    }
  };

  return (
    <div className="letters-wrapper" style={{ padding: "20px" }}>
      <div className="letters-planet">
        <div className="row">
          <div className="letters-upper" style={layoutBox}>
            <div className="letters-game">
              <p className="stage-heading">
                ABC Sliding Puzzle – Level {stageNum}
              </p>
              <GridWrapper className="letters-board">
                {pieces.map((tile, idx) => (
                  <div
                    key={tile.id}
                    className={`tile-box ${tile.symbol === "" ? "empty" : ""}`}
                    onClick={() => moveTile(idx)}
                  >
                    {tile.symbol}
                  </div>
                ))}
              </GridWrapper>
              <div className="notice-text">{notice}</div>
              <button className="letters-btn" onClick={resetGame}>
                Restart ABC Sliding Puzzle
              </button>
              {notice.includes("🎉") && (
                <Link href="/slider-puzzles">
                  <button className="letters-btn ms-2">Next Puzzle</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="letters-instructions-container">
        <div className="letters-instructions">
          <h1 className="instructions-title">ABC Slider Puzzle</h1>

          <p className="instructions-description">
            The ABC Slider Puzzle is all about getting the alphabet back in order.
            The board looks like a mess at first, with letters jumbled everywhere.
            You slide them around, one at a time, trying to make A through Z or some alphabet line up.
            Sounds simple, but a few moves in, you realize it’s trickier than it looks.
          </p>

          <h2 className="instruction-step">How to Play</h2>
          <p className="instructions-description">
            The board starts scrambled.
            Pick a letter next to the order and slide it over.
            Now another spot opens up, and you keep going.
            Bit by bit, the alphabet starts to form.
            If you get stuck, no problem—just reshuffle and try again.
          </p>

          <h2 className="instruction-step">Who Can Play</h2>
          <p className="instructions-description">
            Pretty much anyone.
            Kids will drag pieces just to see letters move.
            Families can shout out where they think things should slide, like backseat drivers.
            Adults might open it up for “just a minute” and then realize it’s twenty moves later.
            There’s no tricky setup; you just start pushing tiles around.
          </p>

          <h2 className="instruction-step">Next Challenge</h2>
          <p className="instructions-description">
            Want it tougher? Add a timer and see how fast you can sort it.
            Play head-to-head with a friend.
            Or scramble it until nothing makes sense and fight your way back to A through Z.
            The slider puzzle can stay chill or turn into a real brain bender—it’s up to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetterPuzzle;



