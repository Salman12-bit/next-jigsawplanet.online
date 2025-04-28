"use client"

import React from 'react';
import './jigsaw.css';
import Link from 'next/link';

const puzzleGames = [
  {
    image: "/images/jigsawpuzzles.webp",
    link: '/play-free-online-jigsaw-puzzles',
    text: "In today’s quick-paced digital world, where happiness is just a click away, traditional hobbies like jigsaw puzzles have found a new life of joy. One of the most astonishing venues for puzzle fans is the jigsaw puzzle, which has been utilized for many years.",
  }, 
   
];

const Jigsaw1 = () => {
  return (
    <div>
      <div className="puzzle-article">
        {puzzleGames.map((item, index) => (
          <div key={index} className="puzzle-article-card fade-in">
            <Link href={item.link} className="puzzle-image-wrapper">
              <img src={item.image} alt={`Puzzle ${index + 1}`} className="puzzle-article-image" />
            </Link>
            <p className="puzzle-article-title">{item.text}</p>
            <Link href={item.link}>
              <button className="read-more-button">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jigsaw1;
