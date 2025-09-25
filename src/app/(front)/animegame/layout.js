import React from 'react';

export const metadata = {
  title: "Anime Jigsaw Puzzles Online – Play Instantly for Free",
  keywords: "jigsaw planet puzzles online,free jigsaws planet",
  description:
    "Play Anime Jigsaw Puzzles online for free! Choose your favorite anime scenes, solve relaxing or challenging puzzles, and enjoy hours of fun instantly.",
  openGraph: {
    title: "Anime Jigsaw Puzzles Online – Play Instantly for Free",
    description:
      "Play Anime Jigsaw Puzzles online for free! Choose your favorite anime scenes, solve relaxing or challenging puzzles, and enjoy hours of fun instantly.",
    url: "https://jigsawplanet.online/aminegame",
    images: [
      {
        url: "https://jigsawplanet.online/images/aminegame.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/aminegame",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Anime Jigsaw Puzzles Online – Play Instantly for Free",
    "description":
      "Play Anime Jigsaw Puzzles online for free! Choose your favorite anime scenes, solve relaxing or challenging puzzles, and enjoy hours of fun instantly.",
    "url": "https://jigsawplanet.online/aminegame",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/aminegame.webp",
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
      "@id": "https://jigsawplanet.online/aminegame"
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
