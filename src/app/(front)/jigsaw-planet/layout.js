import React from 'react';

export const metadata = {
  title: "jigsawpuzzle Game - Play Online on free jigsaw planet",
  description:
    "Dive into the thrilling jigsawpuzzle game on Jigsaw Planet. Enjoy action-packed gameplay, puzzles, and challenges!",
  openGraph: {
    title: "jigsawpuzzle Game - Play Online",
    description:
      "Join the adventure with Freezenova on Jigsaw Planet. Experience engaging gameplay and exciting challenges.",
    url: "https://jigsawplanet.online/jigsaw-planet",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play jigsawplanet Game online on Jigsaw Planet",
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
    "name": "Word puzzle - Play Online on word puzzle",
    "description":
      "Dive into the thrilling Word puzzle on Jigsaw Planet. Enjoy action-packed gameplay, puzzles, and challenges!",
    "url": "https://jigsawplanet.online/jigsaw-planet",
    "mainEntity": {
      "@type": "Online Game",
      "name": "Word puzzle",
      "description":
        "Join the adventure with Word puzzle on Jigsaw Planet. Experience engaging gameplay and exciting challenges.",
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
      "url": "https://jigsawplanet.online/jigsaw-planet",
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
