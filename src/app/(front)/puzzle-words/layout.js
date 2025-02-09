import React from 'react';

export const metadata = {
  title: "Unlock Puzzle Words: Challenge Your Brain Today!",
  keywords: "word maze puzzles,words with friends chear,COLLATE,demure,UNCANNY",
  description:
    "Dive into puzzle words that spark creativity and boost brainpower. Enjoy fun challenges, quick games, and endless word puzzles to keep your mind sharp!",
  openGraph: {
    title: "Unlock Puzzle Words: Challenge Your Brain Today!",
    description:
      "Dive into puzzle words that spark creativity and boost brainpower. Enjoy fun challenges, quick games, and endless word puzzles to keep your mind sharp!",
    url: "https://jigsawplanet.online/puzzle-words",
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
    canonical: "https://jigsawplanet.online/puzzle-words",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Unlock Puzzle Words: Challenge Your Brain Today!",
    "description":
      "Dive into puzzle words that spark creativity and boost brainpower. Enjoy fun challenges, quick games, and endless word puzzles to keep your mind sharp!",
    "url": "https://jigsawplanet.online/puzzle-words",
    "mainEntity": {
      "@type": "Online Game",
      "name": "Hard Word Search",
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
      "url": "https://jigsawplanet.online/puzzle-words",
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
