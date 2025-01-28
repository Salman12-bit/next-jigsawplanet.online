import React from 'react';

export const metadata = {
  title: "Hard Word Search Puzzles: Challenge Your Mind Today",
  keywords: "printable word puzzles, free printable word puzzles",
  description:
    "Test your skills with hard word search puzzles! Enjoy challenging puzzles that will keep your mind sharp and entertained for hours.",
  openGraph: {
    title: "Hard Word Search Puzzles: Challenge Your Mind Today",
    description:
      "Test your skills with hard word search puzzles! Enjoy challenging puzzles that will keep your mind sharp and entertained for hours.",
    url: "https://jigsawplanet.online/freezenova",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play printable word puzzles",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/freezenova",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hard Word Search Puzzles: Challenge Your Mind Today",
    "description":
      "Test your skills with hard word search puzzles! Enjoy challenging puzzles that will keep your mind sharp and entertained for hours.",
    "url": "https://jigsawplanet.online/freezenova",
    "mainEntity": {
      "@type": "Online Game",
      "name": "Hard Word Search",
      "description":
        "Test your skills with hard word search puzzles! Enjoy challenging puzzles that will keep your mind sharp and entertained for hours.",
      "genre": "Action, ",
      "publisher": {
        "@type": "Organization",
        "name": "Jigsawplanet",
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
      "url": "https://jigsawplanet.online/freezenova",
      "playMode": "Single Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jigsawplanet",
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
