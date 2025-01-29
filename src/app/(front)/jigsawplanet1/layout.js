import React from 'react';

export const metadata = {
  title: "Alphabet Puzzle: Fun Learning for Kids and Adults",
  keywords :"alphabet slider,alphabet,abc puzzle game",
  description:
    "Enjoy alphabet puzzles that make learning letters fun! Perfect for kids and adults to improve spelling, memory, and problem-solving skills.",
  openGraph: {
    title: "Alphabet Puzzle: Fun Learning for Kids and Adults",
    description:
      "Enjoy alphabet puzzles that make learning letters fun! Perfect for kids and adults to improve spelling, memory, and problem-solving skills.",
    url: "https://jigsawplanet.online/jigsawplanet1",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play abc puzzle game on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsawplanet1",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "abc puzzle game - Play Online on jigsawplanet",
    "description":
      "Enjoy alphabet puzzles that make learning letters fun! Perfect for kids and adults to improve spelling, memory, and problem-solving skills.",
    "url": "https://jigsawplanet.online/jigsawplanet1",
    "mainEntity": {
      "@type": "Online Game",
      "name": "abc puzzle game",
      "description":
        "Enjoy alphabet puzzles that make learning letters fun! Perfect for kids and adults to improve spelling, memory, and problem-solving skills.",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "alphabet slider",
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
      "url": "https://jigsawplanet.online/jigsawplanet1",
      "playMode": "Single Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "alphabet slider",
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
