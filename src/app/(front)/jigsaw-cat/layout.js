import React from 'react';

export const metadata = {
  title: "Play Cat Jigsaw Puzzle – Free Online Puzzle Fun 2025",
  description:
    "Play free cat jigsaw puzzle online. Solve cute kitten puzzles, relax your mind, and enjoy hours of fun with this interactive puzzle game.",
  openGraph: {
    title: "Play Cat Jigsaw Puzzle – Free Online Puzzle Fun 2025",
    description:
      "Play free cat jigsaw puzzle online. Solve cute kitten puzzles, relax your mind, and enjoy hours of fun with this interactive puzzle game.",
    url: "https://jigsawplanet.online/jigsaw-cat",
    images: [
      {
        url: "https://jigsawplanet.online/images/jigsawtruck.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-cat",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Play Cat Jigsaw Puzzle – Free Online Puzzle Fun 2025",
    "description":
      "Play free cat jigsaw puzzle online. Solve cute kitten puzzles, relax your mind, and enjoy hours of fun with this interactive puzzle game.",
    "url": "https://jigsawplanet.online/jigsaw-cat",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/jigsawtruck.webp",
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
      "@id": "https://jigsawplanet.online/jigsaw-cat"
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
