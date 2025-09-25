import React from 'react';

export const metadata = {
  title: "ABC Slider Puzzle Game Online – Play Fun Alphabet Puzzle",
  description:
    "Play the ABC slider puzzle online today! Children move alphabet tiles, solve fun puzzles, and improve letter skills while enjoying the game.",
  openGraph: {
    title: "ABC Slider Puzzle Game Online – Play Fun Alphabet Puzzle",
    description:
      "Play the ABC slider puzzle online today! Children move alphabet tiles, solve fun puzzles, and improve letter skills while enjoying the game.",
    url: "https://jigsawplanet.online/slider-game",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/slider-game",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "ABC Slider Puzzle Game Online – Play Fun Alphabet Puzzle",
    "description":
      "Play the ABC slider puzzle online today! Children move alphabet tiles, solve fun puzzles, and improve letter skills while enjoying the game.",
    "url": "https://jigsawplanet.online/slider-game",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/Puzzlle.webp",
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
      "@id": "https://jigsawplanet.online/slider-game"
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
