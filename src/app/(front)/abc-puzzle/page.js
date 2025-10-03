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
      setStatusText("🎉 You solved the ABC Puzzle!");
    }
  };

  return (
    <div className="lp-wrapper" style={{ padding: "20px" }}>
      <div className="lp-outer">
        <div className="lp-row">
          <div className="lp-upper" style={wrapperStyle}>
            <div className="lp-game-area">
              <p className="lp-level-title">ABC Puzzle – Stage {stage}</p>
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
                Restart ABC Puzzle
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
          <h1 className="lp-title">ABC Puzzle – Simple, Tricky, and Weirdly Addictive</h1>

          <p className="lp-text">
            The ABC puzzle looks super easy, but it pulls you in fast. You get nine little tiles, all mixed up with A, B, and C on them. The idea is simple—line up every row so it reads A, B, C. Sounds like nothing, right? Then you move one piece and suddenly the whole board feels different. That’s when it gets fun.
          </p>

          <h2 className="lp-step">How to Play</h2>
          <p className="lp-text">
            First, the tiles get scrambled. Pick one up, drag it to a new spot, drop it, and see what happens. Then do the same with another. Sometimes it fixes things, sometimes it makes a mess, and you just keep shuffling around until each row spells A, B, C. If it feels like you’re stuck, just hit restart and get a fresh scramble. No rush, no timer, just you sliding pieces until it clicks.
          </p>

          <h2 className="lp-step">Why It’s Fun</h2>
          <p className="lp-text">
            The fun part is you never know what’s coming. One swap looks perfect, the next one throws everything off. It’s a bit of a tease—you think you’ve got it, then nope, back to moving pieces. But that’s what makes it weirdly addictive. Getting a row to fall into place feels great, and when the whole board finally lines up, you can’t help but smile.
          </p>

          <h2 className="lp-step">Who Can Play</h2>
          <p className="lp-text">
            Honestly, anyone. Kids mess around with it and learn the letters. Parents can play along without needing to explain much. And if you’re an adult who just wants something quick between things, it’s a nice little break. No heavy rules, just drag, drop, and enjoy.
          </p>

          <h2 className="lp-step">Next Challenge</h2>
          <p className="lp-text">
            Want more? Try timing yourself and see how fast you can clean the board. Play against a friend in a race. Or shuffle extra hard and give yourself a tougher start. The ABC puzzle can stay simple, or it can stretch into a bigger challenge whenever you want.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AbcPuzzle;
