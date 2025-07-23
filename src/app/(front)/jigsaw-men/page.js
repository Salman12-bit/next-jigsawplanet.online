"use client";
import React, { useRef, useEffect, useState } from "react";
import { Stage, Layer, Path, Rect, Group } from "react-konva";
import styles from "./Puzzle.module.css";

function flipEdge(edge) {
    if (edge === "in") return "out";
    if (edge === "out") return "in";
    return "flat";
}

// Drawing functions
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
    path += " Z";
    return path;
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
    });
}

function resizeImage(img, targetWidth, targetHeight) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
    return canvas;
}

export default function Puzzle() {
    const puzzleImage = "/download.webp"; // Adjust path as needed

    const [image, setImage] = useState(null);
    const [pieces, setPieces] = useState([]);
    const [slots, setSlots] = useState([]);
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [time, setTime] = useState(0);
    const [showFinishModal, setShowFinishModal] = useState(false);
    const [showNotFinishModal, setShowNotFinishModal] = useState(false);
    // const [userName, setUserName] = useState("");
    // const [leaderboard, setLeaderboard] = useState([]);
    // const [showNamePrompt, setShowNamePrompt] = useState(true);
    const globalHeight = 350
    const globalWidth = 350
    const [containerSize, setContainerSize] = useState({ width: globalHeight, height: globalWidth });

    const puzzleContainerRef = useRef(null);

    useEffect(() => {
        async function processImage() {
            try {
                const img = await loadImage(puzzleImage);
                const resizedCanvas = resizeImage(img, globalHeight, globalWidth);
                const resizedImg = new Image();
                resizedImg.src = resizedCanvas.toDataURL();
                resizedImg.onload = () => {
                    setImage(resizedImg);
                    const { piecesArr, slotsArr } = createPuzzleData(resizedImg);
                    setPieces(piecesArr);
                    setSlots(slotsArr);
                };
            } catch (error) {
                console.error("Error loading or resizing image:", error);
            }
        }
        processImage();
    }, []);

    // useEffect(() => {
    //     const savedData = JSON.parse(localStorage.getItem("puzzle2")) || [];
    //     setLeaderboard(savedData);
    // }, []);

    useEffect(() => {
        let timerId;
        if (isStarted && !isFinished) {
            timerId = setInterval(() => setTime((prev) => prev + 1), 1000);
        }
        return () => clearInterval(timerId);
    }, [isStarted, isFinished]);

    function createPuzzleData(img) {
        const rows = 4;
        const cols = 4;
        const pieceWidth = globalWidth / cols;
        const pieceHeight = globalHeight / rows;

        const piecesArr = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const pieceId = `${row}-${col}`;
                piecesArr.push({
                    id: pieceId,
                    x: Math.random() * (containerSize.width - pieceWidth),
                    y: Math.random() * (containerSize.height - pieceHeight),
                    width: pieceWidth,
                    height: pieceHeight,
                    originalX: col * pieceWidth,
                    originalY: row * pieceHeight,
                    top: row === 0 ? "flat" : flipEdge(piecesArr[(row - 1) * cols + col].bottom),
                    left: col === 0 ? "flat" : flipEdge(piecesArr[row * cols + col - 1].right),
                    bottom: row === rows - 1 ? "flat" : Math.random() < 0.5 ? "in" : "out",
                    right: col === cols - 1 ? "flat" : Math.random() < 0.5 ? "in" : "out",
                });
            }
        }

        const slotsArr = piecesArr.map((p) => ({
            id: p.id,
            x: p.originalX,
            y: p.originalY,
            width: pieceWidth,
            height: pieceHeight,
        }));

        return { piecesArr, slotsArr };
    }

    // const updateLeaderboard = (name, time) => {
    //     const newEntry = { name, time };

    //     const current = JSON.parse(localStorage.getItem("puzzle2")) || [];

    //     const existingIndex = current.findIndex((entry) => entry.name === name);

    //     if (existingIndex !== -1) {
    //         if (time < current[existingIndex].time) {
    //             current[existingIndex].time = time;
    //         }
    //     } else {
    //         current.push(newEntry);
    //     }

    //     const sorted = current.sort((a, b) => a.time - b.time).slice(0, 7);

    //     localStorage.setItem("puzzle2", JSON.stringify(sorted));
    //     setLeaderboard(sorted);
    // };


    function checkIfPuzzleSolved() {
        console.log(pieces);
        return pieces.every((piece) => piece.id === piece.currentSlotId);
    }
    function randomizePositions(oldPieces) {
        return oldPieces.map((p) => ({
            ...p,
            x: Math.random() * (containerSize.width - p.width),
            y: Math.random() * (containerSize.height - p.height),
        }));
    }

    const handleStart = () => {
        setPieces((prev) => randomizePositions(prev));
        setIsStarted(true);
        setIsFinished(false);
        setShowFinishModal(false);
        setTime(0);
    };

    const handleFinish = () => {
        if (checkIfPuzzleSolved()) {
            setIsFinished(true);
            setShowFinishModal(true);
            // updateLeaderboard(userName || "Anonymous", time);
        } else {
            setShowNotFinishModal(true);
        }
    };


    const handleCloseModal = () => {
        setShowFinishModal(false);
        setShowNotFinishModal(false);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return minutes > 0 ? `${minutes}m ${secondsStr}s` : `${secondsStr}s`;
    };
    const handleDragEnd = (index, e) => {
        const piece = pieces[index];
        const correctSlot = slots.find((slot) => slot.id === piece.id);
        if (!correctSlot) return;
        const pieceAbsolutePos = e.target.getAbsolutePosition();
        const pieceCenterX = pieceAbsolutePos.x + piece.width / 2;
        const pieceCenterY = pieceAbsolutePos.y + piece.height / 2;
        const slotCenterX = correctSlot.x + correctSlot.width / 2;
        const slotCenterY = correctSlot.y + correctSlot.height / 2;
        const distance = Math.hypot(pieceCenterX - slotCenterX, pieceCenterY - slotCenterY);
        const isCloseEnough = distance < 20;
        setPieces((prev) =>
            prev.map((p, idx) =>
                idx === index
                    ? {
                        ...p,
                        x: isCloseEnough ? correctSlot.x : p.x,
                        y: isCloseEnough ? correctSlot.y : p.y,
                        currentSlotId: isCloseEnough ? correctSlot.id : null,
                    }
                    : p
            )
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <h2 className={styles.centerText}>Puzzle Game</h2>
                <div className={styles.imageContainer}>
                    <img
                        src={puzzleImage}
                        alt="Puzzle preview"
                        style={{
                            height: "200px",
                            width: "200px",
                            borderRadius: "10px",
                        }}
                    />
                </div>
                {/* {leaderboard.length > 0 && (
                    <div className={styles.leaderboard}>
                        <h3>🏆 Leaderboard</h3>
                        <ol>
                            {leaderboard.map((entry, idx) => (
                                <li key={idx}>
                                    {entry.name} - {formatTime(entry.time)}
                                </li>
                            ))}
                        </ol>
                    </div>
                )} */}
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
            {/* {showNamePrompt && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2>Enter Your Name</h2>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Your name"
                            style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
                        />
                        <button
                            onClick={() => {
                                setShowNamePrompt(false);
                            }}
                            disabled={!userName.trim()}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )} */}

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
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <Stage
                            width={containerSize.width}
                            height={containerSize.height}
                            style={{ backgroundColor: "#f0f0f0" }}
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

                                    const offsetX = (globalWidth - contentWidth) / 2 - minX;
                                    const offsetY = (globalHeight - contentHeight) / 2 - minY;

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
                                                />
                                            ))}
                                        </Group>
                                    );
                                })()}
                            </Layer>
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

                                    const offsetX = (globalWidth - contentWidth) / 2 - minX;
                                    const offsetY = (globalHeight - contentHeight) / 2 - minY;

                                    return (
                                        <Group x={offsetX} y={offsetY}>
                                            {pieces.map((piece, idx) => (
                                                <Path
                                                    key={piece.id}
                                                    x={piece.x}
                                                    y={piece.y}
                                                    draggable={isStarted && !isFinished}
                                                    data={generatePath(piece)}
                                                    fillPatternImage={image}
                                                    fillPatternOffset={{
                                                        x: piece.originalX,
                                                        y: piece.originalY,
                                                    }}
                                                    onDragEnd={(e) => handleDragEnd(idx, e)}
                                                    dragBoundFunc={(pos) => {
                                                        const newX = Math.max(0, Math.min(pos.x, containerSize.width - piece.width));
                                                        const newY = Math.max(0, Math.min(pos.y, containerSize.height - piece.height));
                                                        return { x: newX, y: newY };
                                                    }}
                                                    stroke="black"
                                                />
                                            ))}
                                        </Group>
                                    );
                                })()}
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
            {showNotFinishModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent2}>
                        <h2>Not Completed!</h2>
                        <p>Please complete the puzzle before finishing.</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
