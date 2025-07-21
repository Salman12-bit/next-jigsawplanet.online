import React from 'react';

export const metadata = {
  title: "Multiplayer Jigsaw Puzzles Solve Together Online",
  keywords: "jigsaw puzzle online,jigsaw piece",
  description:
    "Play multiplayer jigsaw puzzles online with friends or family! Team up to piece together fun, beautiful images in real-time from anywhere.",
  openGraph: {
    title: "Multiplayer Jigsaw Puzzles Solve Together Online",
    description:
      "Play multiplayer jigsaw puzzles online with friends or family! Team up to piece together fun, beautiful images in real-time from anywhere.",
    url: "https://jigsawplanet.online/multiplayer-connecting-people",
    images: [
      {
        url: "https://jigsawplanet.online/images/multiplayer.webp",
        width: 1200,
        height: 630,
        alt: "read this article on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/multiplayer-connecting-people",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/multiplayer-connecting-people"
    },
    "headline": "Multiplayer Jigsaw Puzzles: Connecting People, Boosting Brains, and Transforming Digital Fun",
    "description":
    "Play multiplayer jigsaw puzzles online with friends or family! Team up to piece together fun, beautiful images in real-time from anywhere.",
    "keywords":
      "multiplayer jigsaw, multiplayerjigsaw, puzzle together, jigsaw multiplayer, play puzzles online, team puzzle games, online jigsaw game, play jigsaw with friends",
    "image": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/multiplayer.webp",
      "width": 1200,
      "height": 630
    },
    "publisher": {
      "@type": "Organization",
      "name": "Puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/multiplayer.webp",
        "width": 500,
        "height": 500
      }
    },
    "datePublished": "2024-05-10",
    "dateModified": "2024-05-10",
    "articleSection":
      "Games, Online Collaboration, Brain Training, Education, Digital Entertainment",
    "articleBody":
      "Multiplayer jigsaw puzzles are reshaping how we engage with online games. They're not just fun—they improve memory, support mental health, foster friendships, and promote teamwork. Platforms like JigsawPlanet.online make it easy to puzzle together with anyone around the world. Whether you're competing in a speed puzzle race or casually building an image with family, multiplayer puzzles bring joy and brainpower into one digital experience."
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

