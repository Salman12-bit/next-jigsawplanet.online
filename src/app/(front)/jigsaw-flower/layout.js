import React from 'react';

export const metadata = {
  title: "Jigsaw Puzzle Planet: Your Ultimate Puzzle Destination",
  keywords :"puzzle planet, jigsaw planet puzzle, game",
  description:
    "Discover Jigsaw Puzzle Planet, the perfect place to solve, create, and share puzzles online. Fun and engaging for puzzle lovers of all ages!",
  openGraph: {
    title: "Jigsaw Puzzle Planet: Your Ultimate Puzzle Destination",
    description:
      "Discover Jigsaw Puzzle Planet, the perfect place to solve, create, and share puzzles online. Fun and engaging for puzzle lovers of all ages!",
    url: "https://jigsawplanet.online/jigsaw-flower",
    images: [
      {
        url: "https://jigsawplanet.online/flower.webp",
        width: 1200,
        height: 630,
        alt: "Play puzzle planet on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-flower",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jigsaw Puzzle Planet: Your Ultimate Puzzle Destination",
    "description":
      "Discover Jigsaw Puzzle Planet, the perfect place to solve, create, and share puzzles online. Fun and engaging for puzzle lovers of all ages!",
    "url": "https://jigsawplanet.online/jigsaw-flower",
    "mainEntity": {
      "@type": "Online Game",
      "name": "puzzle planet",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle planet",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/flower.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/flower.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jigsaw-flower",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
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
