import React from 'react';

export const metadata = {
  title: "Easy Crossword Puzzle Quick Fun for Every Day",
  keywords: "hard crossword puzzle,word puzzles game",
  description:
    "Solve an easy crossword puzzle to relax and sharpen your mind! Great for beginners or a light brain workout anytime, anywhere.",
  openGraph: {
    title: "Easy Crossword Puzzle Quick Fun for Every Day",
    description:
      "Solve an easy crossword puzzle to relax and sharpen your mind! Great for beginners or a light brain workout anytime, anywhere.",
    url: "https://jigsawplanet.online/best-word-puzzle-game-ever",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
        alt: "read this article on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/best-word-puzzle-game-ever",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/best-word-puzzle-game-ever"
    },
    "headline": "Easy Crossword Puzzle Quick Fun for Every Day",
    "description":
      "Solve an easy crossword puzzle to relax and sharpen your mind! Great for beginners or a light brain workout anytime, anywhere.",
    "image": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/wordpuzzle.webp",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": "Game developer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Word Puzzle Games",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/wordpuzzle.webp",
        "width": 500,
        "height": 500
      }
    },
    "datePublished": "2025-07-03",
    "dateModified": "2024-07-23"
  };

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
