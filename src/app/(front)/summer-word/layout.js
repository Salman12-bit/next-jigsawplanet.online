import React from 'react';

export const metadata = {
  title: "Summer Word Puzzles | Play Free Online Game",
  description:
    "Cool off with summer word puzzles online! Solve scrambled words, unlock sunny levels, and enjoy an exciting seasonal brain challenge today.",
  openGraph: {
    title: "Summer Word Puzzles | Play Free Online Game",
    description:
      "Cool off with summer word puzzles online! Solve scrambled words, unlock sunny levels, and enjoy an exciting seasonal brain challenge today.",
    url: "https://jigsawplanet.online/summer-word",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/summer-word",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Summer Word Puzzles | Play Free Online Game",
    "description":
      "Cool off with summer word puzzles online! Solve scrambled words, unlock sunny levels, and enjoy an exciting seasonal brain challenge today.",
    "url": "https://jigsawplanet.online/summer-word",
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
      "@id": "https://jigsawplanet.online/summer-word"
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

