import React from 'react';

export const metadata = {
  title: "Exploring the World of Online JigsawPuzzles – History, Benefits & Tips",
  keywords: "jigsaw puzzle,jigsaw puzzle jigsaw puzzle",
  description:
    "Discover the world of online jigsaw puzzles — explore their history, benefits, and smart tips to level up your puzzle-solving skills. Ideal for hobbyists and new players alike!",
  openGraph: {
    title: "Exploring the World of Online Jigsaw Puzzles – History, Benefits & Tips",
    description:
      "Discover the world of online jigsaw puzzles — explore their history, benefits, and smart tips to level up your puzzle-solving skills. Ideal for hobbyists and new players alike!",
    url: "https://jigsawplanet.online/play-free-online-jigsaw-puzzles",
    images: [
      {
        url: "https://jigsawplanet.online/images/jigsawpuzzles.webp",
        width: 1200,
        height: 630,
        alt: "read this article on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/play-free-online-jigsaw-puzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/play-free-online-jigsaw-puzzles"
    },
    "headline": "Exploring the World of Online Jigsaw Puzzles – History, Benefits & Tips",
    "description": "Discover the world of online jigsaw puzzles — explore their history, benefits, and smart tips to level up your puzzle-solving skills. Ideal for hobbyists and new players alike!",
    "image": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/jigsawpuzzles.webp",
      "width": 1200,
      "height": 630
    },
    "publisher": {
      "@type": "Organization",
      "name": "jigsaw puzzle jigsaw puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/jigsawpuzzles.webp",
        "width": 500,
        "height": 500
      }
    },
    "datePublished": "2025-07-05",
    "dateModified": "2025-07-23",
    "keywords": "online jigsaw puzzle, 3D jigsaw puzzles, puzzle mobile games, multiplayer puzzles, free online puzzles, customizable jigsaw games, Blue Prince game, digital puzzle games",
    "articleSection": "Online Games, Puzzle Games, Education, Cognitive Skills",
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

