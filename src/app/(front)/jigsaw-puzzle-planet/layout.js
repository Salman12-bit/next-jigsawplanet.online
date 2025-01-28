import React from 'react';

export const metadata = {
  title: "Jigsaw Puzzle Planet: Your Ultimate Puzzle Destination",
  keywords :"puzzle planet, jigsaw planet puzzle, game",
  description:
    "Discover Jigsaw Puzzle Planet, the perfect place to solve, create, and share puzzles online. Fun and engaging for puzzle lovers of all ages!",
  openGraph: {
    title: "Free jigsaw planet puzzle - Play Online",
    description:
      "Discover Jigsaw Puzzle Planet, the perfect place to solve, create, and share puzzles online. Fun and engaging for puzzle lovers of all ages!",
    url: "https://jigsawplanet.online/jigsaw-puzzle-planet",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play puzzle planet on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-puzzle-planet",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "jigsa planet - Play Online on word puzzle",
    "description":
      "Dive into the thrilling jigsaw planet puzzle on Jigsaw Planet. Enjoy action-packed gameplay, puzzles, and challenges!",
    "url": "https://jigsawplanet.online/jigsaw-puzzle-planet",
    "mainEntity": {
      "@type": "Online Game",
      "name": "jigsa planet",
      "description":
        "Join the adventure with jigsaw planet puzzle on Jigsaw Planet. Experience engaging gameplay and exciting challenges.",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "Jigsaw Planet",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/Puzzlle.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/Puzzlle.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jigsaw-puzzle-planet",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jigsaw Planet",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/Puzzlle.webp",
        "width": 500,
        "height": 500,
      },
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/Puzzlle.webp",
      "width": 1200,
      "height": 630,
    },
  };

  return (
    <>
      {/* Render the children */}
      {children}

      {/* JSON-LD Script for Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
