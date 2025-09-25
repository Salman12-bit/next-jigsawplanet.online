import React from 'react';

export const metadata = {
  title: "Art Jigsaw Puzzle Online – Relaxing & Creative Play",
  description:
    "Play the Art Jigsaw Puzzle online for free! Explore stunning artwork, solve fun and relaxing puzzles, and enjoy hours of creativity and challenge instantly.",
  openGraph: {
    title: "Art Jigsaw Puzzle Online – Relaxing & Creative Play",
    description:
      "Play the Art Jigsaw Puzzle online for free! Explore stunning artwork, solve fun and relaxing puzzles, and enjoy hours of creativity and challenge instantly.",
    url: "https://jigsawplanet.online/jigsaw-art",
    images: [
      {
        url: "https://jigsawplanet.online/images/jigsawsand.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-art",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Art Jigsaw Puzzle Online – Relaxing & Creative Play",
    "description":
      "Play the Art Jigsaw Puzzle online for free! Explore stunning artwork, solve fun and relaxing puzzles, and enjoy hours of creativity and challenge instantly.",
    "url": "https://jigsawplanet.online/jigsaw-art",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/jigsawsand.webp",
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
      "@id": "https://jigsawplanet.online/jigsaw-art"
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