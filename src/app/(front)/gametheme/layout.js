import React from 'react';

export const metadata = {
  title: "Jigsaw Theme: Explore Creative & Engaging Theme",
  keywords:"jigsaw gallery, planet theme, puzzle theme,",
  description:
    "Dive into the world of jigsaw themes! Solve beautifully designed puzzles with unique styles and enjoy hours of relaxing fun online.",
  openGraph: {
    title: "Jigsaw Theme: Explore Creative & Engaging Theme",
    description:
      "Dive into the world of jigsaw themes! Solve beautifully designed puzzles with unique styles and enjoy hours of relaxing fun online.",
    url: "https://jigsawplanet.online/gametheme",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Explore jigsaw themes on Jigsaw Planet to personalize your game",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/gametheme",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jigsaw Theme: Explore Creative & Engaging Theme",
    "description":
      "Dive into the world of jigsaw themes! Solve beautifully designed puzzles with unique styles and enjoy hours of relaxing fun online.",
    "url": "https://jigsawplanet.online/gametheme",
    "mainEntity": {
      "@type": "CollectionPage",
      "name": "Game Themes Collection",
      "hasPart": [
        {
          "@type": "CreativeWork",
          "name": "Classic Game Theme",
          "description": "A timeless and elegant look for your gameplay.",
          "url": "https://jigsawplanet.online/images/Puzzle1.webp",
        },
        {
          "@type": "CreativeWork",
          "name": "Modern Game Theme",
          "description": "A sleek and contemporary design for a fresh gaming experience.",
          "url": "https://jigsawplanet.online/images/Freezenova6.webp",
        },
        {
          "@type": "CreativeWork",
          "name": "Customizable Game Theme",
          "description": "Create a personalized theme that matches your style.",
          "url": "https://jigsawplanet.online/images/Freezenova5.webp",
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
