import React from 'react';

export const metadata = {
  title: "Strands Hint | Play Free Online Word Puzzle Game",
  description:
    "Use strands hint to solve tricky word puzzles online! Play free, rearrange letters, unlock levels, and sharpen your mind with engaging spelling challenges.",
  openGraph: {
    title: "Strands Hint | Play Free Online Word Puzzle Game",
    description:
      "Use strands hint to solve tricky word puzzles online! Play free, rearrange letters, unlock levels, and sharpen your mind with engaging spelling challenges.",
    url: "https://jigsawplanet.online/strand-hint",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/strand-hint",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Strands Hint | Play Free Online Word Puzzle Game",
    "description":
      "Use strands hint to solve tricky word puzzles online! Play free, rearrange letters, unlock levels, and sharpen your mind with engaging spelling challenges.",
    "url": "https://jigsawplanet.online/strand-hint",
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
      "@id": "https://jigsawplanet.online/strand-hint"
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