import React from 'react';

export const metadata = {
  title: "Jig saw planet: Your Go-To Spot for Free Online game",
  keywords :"online puzzles, jigsaw puzzles play, free puzzle",
  description:
    "Dive into Jig saw planet and enjoy solving, creating, and sharing free puzzle online. Perfect for jigsa planet of all ages and skill levels.",
  openGraph: {
    title: "jigsa planet - Play Online",
    description:
      "Dive into Jig saw planet and enjoy solving, creating, and sharing free puzzle online. Perfect for jigsa planet of all ages and skill levels.",
    url: "https://jigsawplanet.online/jig-saw-planet",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play jigsa planet Game online on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jig-saw-planet",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "jigsa planet - Play Online on word puzzle",
    "description":
      "Dive into the thrilling jigsaw puzzles play on Jigsawplanet. Enjoy action-packed gameplay, puzzles, and challenges!",
    "url": "https://jigsawplanet.online/jig-saw-planet",
    "mainEntity": {
      "@type": "Online Game",
      "name": "jigsa planet",
      "description":
        "Join the adventure with jigsaw puzzles play on Jigsawplanet. Experience engaging gameplay and exciting challenges.",
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
      "url": "https://jigsawplanet.online/jig-saw-planet",
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
