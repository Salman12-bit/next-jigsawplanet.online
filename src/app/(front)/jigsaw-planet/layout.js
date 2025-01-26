import React from "react";

export const metadata = {
  title: "Play Jigsaw Planet Game - Free Online Puzzles",
  description:
    "Experience endless fun with free online jigsaw puzzles on Jigsaw Planet. Challenge yourself with a variety of puzzle designs and difficulty levels.",
  openGraph: {
    title: "Play Jigsaw Planet Game - Free Online Puzzles",
    description:
      "Join Jigsaw Planet for an immersive puzzle experience. Choose from a wide range of free puzzles and sharpen your skills with exciting challenges.",
    url: "https://jigsawplanet.online/jigsaw-planet",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play free online jigsaw puzzles on Jigsaw Planet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-planet",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Play Jigsaw Planet Game - Free Online Puzzles",
    "description":
      "Experience endless fun with free online jigsaw puzzles on Jigsaw Planet. Challenge yourself with a variety of puzzle designs and difficulty levels.",
    "url": "https://jigsawplanet.online/jigsaw-planet",
    "mainEntity": {
      "@type": "CollectionPage",
      "name": "Jigsaw Puzzle Collection",
      "description":
        "Choose from a wide range of free puzzles and sharpen your skills with exciting challenges on Jigsaw Planet.",
      "hasPart": [
        {
          "@type": "CreativeWork",
          "name": "Nature Puzzle",
          "description": "Solve puzzles featuring stunning nature landscapes.",
          "url": "https://jigsawplanet.online/jigsaw-planet/nature",
        },
        {
          "@type": "CreativeWork",
          "name": "Animal Puzzle",
          "description": "Challenge yourself with puzzles featuring adorable animals.",
          "url": "https://jigsawplanet.online/jigsaw-planet/animals",
        },
        {
          "@type": "CreativeWork",
          "name": "Custom Puzzle",
          "description": "Create and solve your own custom puzzles.",
          "url": "https://jigsawplanet.online/jigsaw-planet/custom",
        },
      ],
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
