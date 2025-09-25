import React from 'react';

export const metadata = {
  title: "Among or Amoung | Play Free Online Word Puzzle",
  description:
    "Test your spelling with among or amoung puzzles online! Play free word challenges, rearrange tricky letters, and master correct spelling while having fun.",
  openGraph: {
    title: "Among or Amoung | Play Free Online Word Puzzle",
    description:
      "Test your spelling with among or amoung puzzles online! Play free word challenges, rearrange tricky letters, and master correct spelling while having fun.",
    url: "https://jigsawplanet.online/among-or-amoung",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/among-or-amoung",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Among or Amoung | Play Free Online Word Puzzle",
    "description":
      "Test your spelling with among or amoung puzzles online! Play free word challenges, rearrange tricky letters, and master correct spelling while having fun.",
    "url": "https://jigsawplanet.online/among-or-amoung",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Word"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/wordpuzzle.webp",
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
      "@id": "https://jigsawplanet.online/among-or-amoung"
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
