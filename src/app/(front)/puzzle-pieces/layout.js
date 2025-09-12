import React from 'react';

export const metadata = {
  title: "Big Puzzle Pieces Easy, Fun & Perfect for Beginners",
  keywords :"big piece jigsaw puzzles,big piece puzzles,big puzzle piece template",
  description:
    "Discover puzzle pieces that are simple to handle, great for kids, seniors, or anyone who loves stress-free, relaxing puzzle fun.",
  openGraph: {
    title: "Big Puzzle Pieces Easy, Fun & Perfect for Beginners",
    description:
      "Discover puzzle pieces that are simple to handle, great for kids, seniors, or anyone who loves stress-free, relaxing puzzle fun.",
    url: "https://jigsawplanet.online/puzzle-pieces",
    images: [
      {
        url: "https://jigsawplanet.online/images/large-puzzle.webp",
        width: 1200,
        height: 630,
        alt: "Play puzzle pieces on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/puzzle-pieces",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Big Puzzle Pieces: Easy, Fun & Perfect for Beginners",
    "description":
      "Discover puzzle pieces that are simple to handle, great for kids, seniors, or anyone who loves stress-free, relaxing puzzle fun.",
    "url": "https://jigsawplanet.online/puzzle-pieces",
    "mainEntity": {
      "@type": "Online Game",
      "name": "game the puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/large-puzzle.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/large-puzzle.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/puzzle-pieces",
      "playMode": "single player",
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
