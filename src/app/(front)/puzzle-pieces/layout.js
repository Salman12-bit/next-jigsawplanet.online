import React from 'react';

export const metadata = {
  title: "Free Jigsaw Puzzle Online with Big Puzzle Pieces",
  description:
    "Play free jigsaw puzzles online with big puzzle pieces. Relaxing, fun, and easy for kids, adults, and seniors. Start solving instantly in your browser.",
  openGraph: {
    title: "Free Jigsaw Puzzle Online with Big Puzzle Pieces",
    description:
      "Play free jigsaw puzzles online with big puzzle pieces. Relaxing, fun, and easy for kids, adults, and seniors. Start solving instantly in your browser.",
    url: "https://jigsawplanet.online/puzzle-pieces",
    images: [
      {
        url: "https://jigsawplanet.online/images/large-puzzle.webp",
        width: 1200,
        height: 630,
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
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Free Jigsaw Puzzle Online with Big Puzzle Pieces",
    "description":
      "Play free jigsaw puzzles online with big puzzle pieces. Relaxing, fun, and easy for kids, adults, and seniors. Start solving instantly in your browser.",
    "url": "https://jigsawplanet.online/puzzle-pieces",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/large-puzzle.webp",
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "jigsawplanet",
      "url": "https://jigsawplanet.online"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/puzzle-pieces"
    }
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
