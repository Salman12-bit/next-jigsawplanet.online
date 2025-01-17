"use client"; 
import React, { useRef, useEffect, useState } from "react";
import { Stage, Layer, Path, Rect, Group } from "react-konva";
import styles from "./Puzzle.module.css";


function flipEdge(edge) {
    if (edge === "in") return "out";
    if (edge === "out") return "in";
    return "flat";
}


function drawTop(path, width, tabSize, topType) {
    if (topType === "out") {
        path += `
      L ${width / 2 - tabSize / 2} 0
      C ${width / 2 - tabSize / 6} ${-tabSize}
        ${width / 2 + tabSize / 6} ${-tabSize}
        ${width / 2 + tabSize / 2} 0
      L ${width} 0
    `;
    } else if (topType === "in") {
        path += `
      L ${width / 2 - tabSize / 2} 0
      C ${width / 2 - tabSize / 6} ${tabSize}
        ${width / 2 + tabSize / 6} ${tabSize}
        ${width / 2 + tabSize / 2} 0
      L ${width} 0
    `;
    } else {
        path += ` L ${width} 0`;
    }
    return path;
}

function drawRight(path, height, tabSize, rightType, width) {
    if (rightType === "out") {
        path += `
      L ${width} ${height / 2 - tabSize / 2}
      C ${width + tabSize} ${height / 2 - tabSize / 6}
        ${width + tabSize} ${height / 2 + tabSize / 6}
        ${width} ${height / 2 + tabSize / 2}
      L ${width} ${height}
    `;
    } else if (rightType === "in") {
        path += `
      L ${width} ${height / 2 - tabSize / 2}
      C ${width - tabSize} ${height / 2 - tabSize / 6}
        ${width - tabSize} ${height / 2 + tabSize / 6}
        ${width} ${height / 2 + tabSize / 2}
      L ${width} ${height}
    `;
    } else {
        path += ` L ${width} ${height}`;
    }
    return path;
}

function drawBottom(path, width, tabSize, bottomType, height) {
    if (bottomType === "out") {
        path += `
      L ${width / 2 + tabSize / 2} ${height}
      C ${width / 2 + tabSize / 6} ${height + tabSize}
        ${width / 2 - tabSize / 6} ${height + tabSize}
        ${width / 2 - tabSize / 2} ${height}
      L 0 ${height}
    `;
    } else if (bottomType === "in") {
        path += `
      L ${width / 2 + tabSize / 2} ${height}
      C ${width / 2 + tabSize / 6} ${height - tabSize}
        ${width / 2 - tabSize / 6} ${height - tabSize}
        ${width / 2 - tabSize / 2} ${height}
      L 0 ${height}
    `;
    } else {
        path += ` L 0 ${height}`;
    }
    return path;
}

function drawLeft(path, height, tabSize, leftType) {
    if (leftType === "out") {
        path += `
      L 0 ${height / 2 + tabSize / 2}
      C ${-tabSize} ${height / 2 + tabSize / 6}
        ${-tabSize} ${height / 2 - tabSize / 6}
        0 ${height / 2 - tabSize / 2}
      L 0 0
    `;
    } else if (leftType === "in") {
        path += `
      L 0 ${height / 2 + tabSize / 2}
      C ${tabSize} ${height / 2 + tabSize / 6}
        ${tabSize} ${height / 2 - tabSize / 6}
        0 ${height / 2 - tabSize / 2}
      L 0 0
    `;
    } else {
        path += ` L 0 0`;
    }
    return path;
}

function generatePath({ width, height, top, right, bottom, left }) {
    const tabSize = Math.min(width, height) / 4;
    let path = "M 0 0";
    path = drawTop(path, width, tabSize, top);
    path = drawRight(path, height, tabSize, right, width);
    path = drawBottom(path, width, tabSize, bottom, height);
    path = drawLeft(path, height, tabSize, left);
    return path;
}

export default function Puzzle({ searchParams }) {
    const params = searchParams;
    const { image: newImage } = params;

    const [image, setImage] = useState(null);
    const [pieces, setPieces] = useState([]);
    const [slots, setSlots] = useState([]);
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [time, setTime] = useState(0);
    const [showFinishModal, setShowFinishModal] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [puzzleRows, setPuzzleRows] = useState(0);
    const [puzzleCols, setPuzzleCols] = useState(0);

    const puzzleContainerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    const stageWidth = 800;
    const stageHeight = 600;

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
            if (puzzleContainerRef.current) {
                const { clientWidth, clientHeight } = puzzleContainerRef.current;
                setContainerSize({ width: clientWidth, height: clientHeight });
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const img = new window.Image();
        img.src = newImage;
        img.onload = () => {
            setImage(img);
            const { piecesArr, slotsArr, rows, cols } = createPuzzleData(img, 100, 100);
            setPieces(piecesArr);
            setSlots(slotsArr);
            setPuzzleRows(rows);
            setPuzzleCols(cols);
        };
    }, [newImage]);

    useEffect(() => {
        let timerId;
        if (isStarted && !isFinished) {
            timerId = setInterval(() => setTime((prev) => prev + 1), 1000);
        }
        return () => clearInterval(timerId);
    }, [isStarted, isFinished]);

    function checkIfPuzzleSolved() {
        console.log(pieces);
        return pieces.every((piece) => piece.id === piece.currentSlotId);
    }

    function createPuzzleData(img, pieceWidth, pieceHeight) {
        const rows = Math.ceil(img.height / pieceHeight);
        const cols = Math.ceil(img.width / pieceWidth);

        // Define the puzzle grid
        const puzzleGrid = Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => ({
                right: "flat",
                bottom: "flat",
                top: "flat",
                left: "flat",
            }))
        );

        // Randomly define right & bottom edges
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (c < cols - 1) {
                    puzzleGrid[r][c].right = Math.random() < 0.5 ? "in" : "out";
                }
                if (r < rows - 1) {
                    puzzleGrid[r][c].bottom = Math.random() < 0.5 ? "in" : "out";
                }
            }
        }

        // Flip top & left edges from neighbors
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (r > 0) {
                    puzzleGrid[r][c].top = flipEdge(puzzleGrid[r - 1][c].bottom);
                }
                if (c > 0) {
                    puzzleGrid[r][c].left = flipEdge(puzzleGrid[r][c - 1].right);
                }
            }
        }

        // Build pieces
        const piecesArr = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const pieceId = `${row}-${col}`;
                piecesArr.push({
                    id: pieceId,
                    x: Math.random() * (stageWidth - pieceWidth),
                    y: Math.random() * (stageHeight - pieceHeight),
                    width: pieceWidth,
                    height: pieceHeight,
                    originalX: col * pieceWidth,
                    originalY: row * pieceHeight,
                    currentSlotId: null,
                    top: puzzleGrid[row][col].top,
                    right: puzzleGrid[row][col].right,
                    bottom: puzzleGrid[row][col].bottom,
                    left: puzzleGrid[row][col].left,
                });
            }
        }

        // Build slots so each slot's .id, .x, .y match the piece's final (original) position
        const slotsArr = piecesArr.map((p) => ({
            id: p.id,
            x: p.originalX,
            y: p.originalY,
            width: pieceWidth,
            height: pieceHeight,
        }));

        return { piecesArr, slotsArr, rows, cols };
    }

    function randomizePositions(oldPieces) {
        const maxX = containerSize.width / 2;
        const maxY = containerSize.height / 2;

        return oldPieces.map((p) => ({
            ...p,
            x: Math.random() * maxX,
            y: Math.random() * maxY,
            currentSlotId: null,
        }));
    }

    const handleDragEnd = (index, e) => {
        const piece = pieces[index];
        const correctSlot = slots.find((slot) => slot.id === piece.id);

        if (!correctSlot) {
            return;
        }

        const { x, y } = e.target.getAbsolutePosition();
        const { x: slotX, y: slotY } = correctSlot;

        const distance = Math.hypot(x - slotX, y - slotY);
        const isCloseEnough = distance < 20;

        setPieces((prev) =>
            prev.map((p, idx) =>
                idx === index
                    ? {
                        ...p,
                        currentSlotId: isCloseEnough ? correctSlot.id : null,
                        x: isCloseEnough ? slotX : p.x,
                        y: isCloseEnough ? slotY : p.y,
                    }
                    : p
            )
        );
    };

    const handleStart = () => {
        setPieces((prev) => randomizePositions(prev));
        setIsStarted(true);
        setIsFinished(false);
        setShowFinishModal(false);
        setTime(0);
    };

    const handleFinish = () => {
        if (checkIfPuzzleSolved()) {
            setShowFinishModal(true);
            setIsFinished(true);
        } else {
            // Automatically place all pieces in their correct slots.
            setPieces((prev) =>
                prev.map((p) => {
                    const correctSlot = slots.find((slot) => slot.id === p.id);
                    return {
                        ...p,
                        currentSlotId: correctSlot.id,
                        x: correctSlot.x,
                        y: correctSlot.y,
                    };
                })
            );
            setShowFinishModal(true);
            setIsFinished(true);
        }
    };

    const handleCloseModal = () => {
        setShowFinishModal(false);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return minutes > 0 ? `${minutes}m ${secondsStr}s` : `${secondsStr}s`;
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <h2 className={styles.centerText}>Puzzle Game</h2>
                <div className={styles.imageContainer}>
                    <img
                        src={newImage}
                        alt="Puzzle preview"
                        style={{
                            height: "200px",
                            width: "200px",
                            borderRadius: "10px",
                        }}
                    />
                </div>
                <h3 className={styles.centerText}>Time: {formatTime(time)}</h3>

                <p style={{ textAlign: "center" }}>
                    {isFinished
                        ? "Congratulations! You solved the puzzle!"
                        : "Drag each piece onto its matching slot. Good luck!"}
                </p>

                {(!isStarted || isFinished) && (
                    <button onClick={handleStart} className={styles.btn}>
                        {isFinished ? "Restart" : "Start"}
                    </button>
                )}

                {isStarted && !isFinished && (
                    <button onClick={handleFinish} className={styles.btn}>
                        Finish
                    </button>
                )}
            </div>

            <div ref={puzzleContainerRef} className={styles.puzzleBoard}>
                {!isStarted && (
                    <div className={styles.overlay}>
                        <h1>Welcome to the Puzzle Game!</h1>
                        <p>Click “Start” to begin.</p>
                    </div>
                )}

                {image && (
                    <div
                        style={{
                            margin:"20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <Stage
                            width={stageWidth}
                            height={stageHeight}
                            style={{ background: "#f0f0f0" }}
                            margin={20}
                            
                        >
                            <Layer>
                                {(() => {
                                    
                                    const xValues = slots.map((slot) => slot.x);
                                    const yValues = slots.map((slot) => slot.y);
                                    const maxX = Math.max(...xValues) + slots[0].width;
                                    const maxY = Math.max(...yValues) + slots[0].height;
                                    const minX = Math.min(...xValues);
                                    const minY = Math.min(...yValues);

                                    const contentWidth = maxX - minX;
                                    const contentHeight = maxY - minY;

                                    const offsetX = (stageWidth - contentWidth) / 2 - minX;
                                    const offsetY = (stageHeight - contentHeight) / 2 - minY;

                                    return (
                                        <Group x={offsetX} y={offsetY}>
                                            {slots.map((slot) => (
                                                <Rect
                                                    key={slot.id}
                                                    x={slot.x}
                                                    y={slot.y}
                                                    width={slot.width}
                                                    height={slot.height}
                                                    fill="#ddd"
                                                    stroke="black"
                                                    strokeWidth={2}
                                                />
                                            ))}
                                        </Group>
                                    );
                                })()}
                            </Layer>
                            <Layer>
                                {pieces.map((piece, idx) => {
                                    const pathData = generatePath(piece);
                                    return (
                                        <Path
                                            key={piece.id}
                                            x={piece.x}
                                            y={piece.y}
                                            data={pathData}
                                            draggable={isStarted && !isFinished}
                                            onDragEnd={(e) => handleDragEnd(idx, e)}
                                            dragBoundFunc={(pos) => {
                                                const newX = Math.max(
                                                    0,
                                                    Math.min(pos.x, stageWidth - piece.width)
                                                );
                                                const newY = Math.max(
                                                    0,
                                                    Math.min(pos.y, stageHeight - piece.height)
                                                );
                                                return { x: newX, y: newY };
                                            }}
                                            fillPatternImage={image}
                                            fillPatternOffset={{
                                                x: piece.originalX,
                                                y: piece.originalY,
                                            }}
                                            fillPatternRepeat="no-repeat"
                                            stroke="#4A4A4A"
                                            strokeWidth={1}
                                        />
                                    );
                                })}
                            </Layer>
                        </Stage>
                    </div>
                )}
            </div>

            {showFinishModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2>Congratulations!</h2>
                        <p>You solved the puzzle in {formatTime(time)}. Great job!</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
