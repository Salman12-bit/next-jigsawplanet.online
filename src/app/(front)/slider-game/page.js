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
  { id: 1, symbol: "A" },
  { id: 2, symbol: "A" },
  { id: 3, symbol: "A" },
  { id: 4, symbol: "B" },
  { id: 5, symbol: "B" },
  { id: 6, symbol: "B" },
  { id: 7, symbol: "C" },
  { id: 8, symbol: "C" },
  { id: 9, symbol: "C" },
];

const LetterPuzzle = () => {
  const [pieces, setPieces] = useState([]);
  const [notice, setNotice] = useState("Arrange letters into ABC order!");
  const [stageNum, setStageNum] = useState(1);

  const shufflePieces = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const resetGame = useCallback(() => {
    setPieces(shufflePieces([...puzzleTiles]));
    setNotice("Arrange letters into ABC order!");
  }, []);

  useEffect(() => {
    resetGame();
  }, [stageNum, resetGame]);

  const startDrag = (e, idx) => {
    e.dataTransfer.setData("pieceIdx", idx);
  };

  const dropPiece = (e, dropIdx) => {
    const dragIdx = e.dataTransfer.getData("pieceIdx");
    if (dragIdx === "") return;

    const newArrangement = [...pieces];
    const [picked] = newArrangement.splice(dragIdx, 1);
    newArrangement.splice(dropIdx, 0, picked);

    setPieces(newArrangement);

    const solved =
      newArrangement[0].symbol === "A" &&
      newArrangement[1].symbol === "B" &&
      newArrangement[2].symbol === "C" &&
      newArrangement[3].symbol === "A" &&
      newArrangement[4].symbol === "B" &&
      newArrangement[5].symbol === "C" &&
      newArrangement[6].symbol === "A" &&
      newArrangement[7].symbol === "B" &&
      newArrangement[8].symbol === "C";

    if (solved) {
      setNotice("🎉 You solved the ABC Puzzle!");
    }
  };

  return (
    <div className="letters-wrapper" style={{ padding: "20px" }}>
      <div className="letters-planet">
        <div className="row">
          <div className="letters-upper" style={layoutBox}>
            <div className="letters-game">
              <h3 className="stage-heading">ABC Puzzle – Level {stageNum}</h3>
              <GridWrapper className="letters-board">
                {pieces.map((tile, idx) => (
                  <div
                    key={tile.id}
                    className="tile-box"
                    draggable
                    onDragStart={(e) => startDrag(e, idx)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => dropPiece(e, idx)}
                  >
                    {tile.symbol}
                  </div>
                ))}
              </GridWrapper>
              <div className="notice-text">{notice}</div>
              <button className="letters-btn" onClick={resetGame}>
                Restart ABC Puzzle
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
          <h1 className="instructions-title">ABC Alphabet Puzzle</h1>
          <p className="instructions-description">
            ABC Alphabet Puzzle is more than just a colorful arrangement of
            letters — it's a thoughtful, engaging tool that supports early brain
            development, language recognition, and creative thinking. By merging
            the structure of a puzzle with the logic of the alphabet, this
            concept turns learning into a memorable hands-on experience. Whether
            placed on a table or tapped on a screen, it invites children into a
            world where curiosity meets confidence, and where letters become
            living pieces of play.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetterPuzzle;
