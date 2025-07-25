"use client"

import React from 'react';
import './jigsaw.css';
import Link from 'next/link';

const puzzleGames = [
  {
    image: "/images/interactivepuzzle.webp",
    link: '/A-digital-haven-for-puzzle-follower',
    text: "In today’s quick-paced digital world, where happiness is just a click away, traditional hobbies like jigsaw puzzles have found a new life of joy. One of the most astonishing venues for puzzle fans is Jigsaw puzzle, a jigsaw puzzle utilized for many years.",
  },
  {
    image: "/images/jigsawpuzzles.webp",
    link: '/play-free-online-jigsaw-puzzles',
    text: "In today’s quick-paced digital world, where happiness is just a click away, traditional hobbies like jigsaw puzzles have found a new life of joy. One of the most astonishing venues for puzzle fans is the jigsaw puzzle, which has been utilized for many years.",
  },
  {
    image: "/images/whenfinished.webp",
    link: '/top-10-creative-ideas-when-finished',
    text: "Completing a jigsaw puzzle shows a satisfying feeling of accomplishment. After spending hours—or sometimes days—fitting together hundreds or even thousands of tiny pieces, you finally see the finished picture in all its glory. But then the question arises: What do you do with a jigsaw puzzle once it’s completed?",
  },
  {
    image: "/images/multiplayer.webp",
    link: '/multiplayer-connecting-people',
    text: "Jigsaw puzzles have been a favorite pastime for decades, offering relaxation, cognitive stimulation, and pure enjoyment. But in the modern digital world, puzzles are no longer just a solo hobby. Thanks to multiplayer technology, jigsaw puzzles have evolved into a collaborative, real-time, and often global experience.",
  },
  {
    image: "/images/abcpuzzle.webp",
    link: '/best-alphabet-puzzle-games',
    text: "In the world of early childhood education, one of the most fundamental lessons every child must learn is the alphabet. While traditional methods like flashcards and alphabet songs have served their purpose for generations, the digital age has opened doors to new and exciting ways to learn.",
  },
  {
    image: "/images/wordpuzzle.webp",
    link: '/best-word-puzzle-game-ever',
    text: "Let’s be honest—who doesn’t love a good word puzzle? Whether it’s solving crosswords over morning coffee or flexing your brain on Wordle during lunch, word puzzle games are an evergreen source of entertainment and mental stimulation. They've been around forever, and they’re only obtaining better.",
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
