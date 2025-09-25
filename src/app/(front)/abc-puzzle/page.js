"use client";

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import "./letterpuzzle.css";
import Link from "next/link";

const wrapperStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
};

const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-gap: 8px;
`;

const defaultCards = [
  { id: 1, label: "A" },
  { id: 2, label: "A" },
  { id: 3, label: "A" },
  { id: 4, label: "B" },
  { id: 5, label: "B" },
  { id: 6, label: "B" },
  { id: 7, label: "C" },
  { id: 8, label: "C" },
  { id: 9, label: "C" },
];

const AbcPuzzle = () => {
  const [tiles, setTiles] = useState([]);
  const [statusText, setStatusText] = useState("Arrange letters into ABC order!");
  const [stage, setStage] = useState(1);

  const shuffleTiles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const startGame = useCallback(() => {
    setTiles(shuffleTiles([...defaultCards]));
    setStatusText("Arrange letters into ABC order!");
  }, []);

  useEffect(() => {
    startGame();
  }, [stage, startGame]);

  const onDragStart = (e, index) => {
    e.dataTransfer.setData("tileIndex", index);
  };

  const onDropTile = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("tileIndex");
    if (dragIndex === "") return;

    const updatedTiles = [...tiles];
    const [movedTile] = updatedTiles.splice(dragIndex, 1);
    updatedTiles.splice(dropIndex, 0, movedTile);

    setTiles(updatedTiles);

    const solved =
      updatedTiles[0].label === "A" &&
      updatedTiles[1].label === "B" &&
      updatedTiles[2].label === "C" &&
      updatedTiles[3].label === "A" &&
      updatedTiles[4].label === "B" &&
      updatedTiles[5].label === "C" &&
      updatedTiles[6].label === "A" &&
      updatedTiles[7].label === "B" &&
      updatedTiles[8].label === "C";

    if (solved) {
      setStatusText("🎉 You solved the Letter Puzzle!");
    }
  };

  return (
    <div className="lp-wrapper" style={{ padding: "20px" }}>
      <div className="lp-outer">
        <div className="lp-row">
          <div className="lp-upper" style={wrapperStyle}>
            <div className="lp-game-area">
              <h3 className="lp-level-title">Letter Puzzle – Stage {stage}</h3>
              <GameBoard className="lp-board">
                {tiles.map((tile, index) => (
                  <div
                    key={tile.id}
                    className="lp-tile"
                    draggable
                    onDragStart={(e) => onDragStart(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => onDropTile(e, index)}
                  >
                    {tile.label}
                  </div>
                ))}
              </GameBoard>
              <div className="lp-status">{statusText}</div>
              <button className="lp-btn" onClick={startGame}>
                Restart Letter Puzzle
              </button>
              {statusText.includes("🎉") && (
                <Link href="/abc-random">
                  <button className="lp-btn ms-2">Next Puzzle</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="lp-instructions-section">
        <div className="lp-instructions">
          <h1 className="lp-title">Letter Puzzle Game</h1>
          <p className="lp-text">
            The Letter Puzzle is more than just arranging letters — it’s an engaging tool that supports early learning, language recognition, and creative thinking.
          </p>
          <h2 className="lp-step">Learning + Play</h2>
          <p className="lp-text">
            Children discover, match, and organize letters while having fun. It turns abstract alphabet concepts into hands-on exploration.
          </p>
          <h3 className="lp-step">Movement Builds Memory</h3>
          <p className="lp-text">
            Dragging and rearranging tiles helps build stronger brain connections, focus, and problem-solving skills.
          </p>
          <h4 className="lp-step">Language Growth</h4>
          <p className="lp-text">
            Beyond recognition, this puzzle builds pre-reading skills such as sound association and phonemic awareness.
          </p>
          <h2 className="lp-step">Confidence Through Play</h2>
          <p className="lp-text">
            Each solved puzzle boosts confidence, helping children trust their judgment and approach learning with curiosity.
          </p>
          <h2 className="lp-step">Conclusion</h2>
          <p className="lp-text">
            The Letter Puzzle blends fun and education, preparing children for lifelong learning through discovery and play.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbcPuzzle;
