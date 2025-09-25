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
  { id: 2, symbol: "A" },
  { id: 3, symbol: "A" },
  { id: 4, symbol: "B" },
  { id: 5, symbol: "B" },
  { id: 6, symbol: "B" },
  { id: 7, symbol: "C" },
  { id: 8, symbol: "C" },
  { id: 9, symbol: "C" },
];

const AlphabetPuzzle = () => {
  const [blocks, setBlocks] = useState([]);
  const [message, setMessage] = useState("Arrange letters into ABC order!");
  const [level, setLevel] = useState(1);

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
      updated[3].symbol === "A" &&
      updated[4].symbol === "B" &&
      updated[5].symbol === "C" &&
      updated[6].symbol === "A" &&
      updated[7].symbol === "B" &&
      updated[8].symbol === "C";

    if (solved) {
      setMessage("🎉 You solved the Letter Puzzle!");
    }
  };

  return (
    <div className="ap-wrapper" style={{ padding: "20px" }}>
      <div className="ap-outer">
        <div className="ap-row">
          <div className="ap-top" style={gameLayout}>
            <div className="ap-gamebox">
              <h3 className="ap-stage-title">Letter Puzzle – Stage {level}</h3>
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
          <h1 className="instructions-title">ABC Alphabet Puzzle</h1>
          <p className="instructions-description">
            ABC Alphabet Puzzle is more than just a colorful arrangement of letters — it's a thoughtful, engaging tool that supports early brain development, language recognition, and creative thinking. By merging the structure of a puzzle with the logic of the alphabet, this concept turns learning into a memorable hands-on experience. Whether placed on a table or tapped on a screen, it invites children into a world where curiosity meets confidence, and where letters become living pieces of play.
          </p>

          <h2 className="instruction-step">The Intersection of Learning and Play</h2>
          <p className="instructions-description">
            Children are naturally wired to explore. The ABC Alphabet Puzzle aligns with that instinct by encouraging learners to discover, match, and organize letters in a meaningful way. Each piece becomes an opportunity to explore patterns, sounds, and relationships between letters. Instead of memorizing characters in a row, children experience the alphabet as an interactive structure they can rearrange and understand from different angles. This deeper level of involvement lays the foundation for long-term learning, making abstract language concepts more tangible.
          </p>

          <h3 className="instruction-step">Building Stronger Foundations Through Movement</h3>
          <p className="instructions-description">
            Physical or visual movement plays a crucial role in memory retention. When children handle puzzle pieces or slide them into place, they activate sensory and motor pathways in the brain that reinforce learning. In an ABC Alphabet Puzzle, the act of physically moving letters contributes to stronger mental connections than passive repetition. Every adjustment becomes a small victory, teaching children not only the order of the alphabet but also how to focus, solve problems, and enjoy the process of discovery.
          </p>

          <h4 className="instruction-step">Beyond the Basics: Encouraging Language Growth</h4>
          <p className="instructions-description">
            While the puzzle begins with basic letter recognition, its impact stretches far beyond. Engaging with letters in a puzzle format helps children develop pre-reading skills such as letter-sound association and phonemic awareness. These are critical for decoding words and understanding language structure later on. The ABC Alphabet Puzzle isn’t just preparing a child to know their ABCs — it’s laying the groundwork for confident reading, writing, and communication in years to come.
          </p>

          <h2 className="instruction-step">Why Puzzle-Based Learning Stands Out</h2>
          <p className="instructions-description">
            In a world filled with overstimulating content, puzzles offer a refreshing contrast. The ABC Alphabet Puzzle slows the pace, inviting children to think, reflect, and take their time. This kind of focused play nurtures attention span and helps build emotional regulation — skills just as valuable as academic knowledge. More importantly, it reminds children that learning can be rewarding in itself, without external rewards or pressure.
          </p>

          <h3 className="instruction-step">Confidence Through Independent Problem-Solving</h3>
          <p className="instructions-description">
            Few things feel better to a young learner than finishing a challenge on their own. ABC Alphabet Puzzles offer that sense of accomplishment with every solved board. As children learn to trust their judgment and persist through trial and error, their confidence begins to grow. This confidence spills into other areas — from reading aloud to tackling new subjects — shaping children into independent thinkers who embrace learning with curiosity rather than fear.
          </p>

          <h4 className="instruction-step">A Flexible Tool for Diverse Learning Styles</h4>
          <p className="instructions-description">
            No two learners are exactly alike, and that’s where the ABC Alphabet Puzzle truly shines. Whether a child learns visually, kinesthetically, or auditorily, this puzzle format can be adapted to support those preferences. Some may enjoy the color-coded pieces; others may benefit from tracing the shapes or naming each letter aloud. It’s a versatile approach that respects individuality and adapts to a variety of educational environments.
          </p>

          <h2 className="instruction-step">Conclusion</h2>
          <p className="instructions-description">
            The ABC Alphabet Puzzle transforms letter learning into a journey of logic, movement, and discovery. It’s more than a plaything — it’s a powerful tool for developing literacy, cognitive flexibility, and independent thinking. By engaging children’s minds and hands at the same time, it creates lasting impressions that go far beyond letter names. In a quiet, thoughtful, and often joyful way, this puzzle helps turn early learners into lifelong learners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlphabetPuzzle;
