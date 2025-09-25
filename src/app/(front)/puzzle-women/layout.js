import React from 'react';

export const metadata = {
  title: "Word Puzzle Solver Game | Play Free Online Now",
  description:
    "Play the word puzzle solver game online! Test your brain, unscramble words, unlock levels, and enjoy a fun word-solving challenge for all ages.",
  openGraph: {
    title: "Word Puzzle Solver Game | Play Free Online Now",
    description:
      "Play the word puzzle solver game online! Test your brain, unscramble words, unlock levels, and enjoy a fun word-solving challenge for all ages.",
    url: "https://jigsawplanet.online/puzzle-women",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/puzzle-women",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Word Puzzle Solver Game | Play Free Online Now",
    "description":
      "Play the word puzzle solver game online! Test your brain, unscramble words, unlock levels, and enjoy a fun word-solving challenge for all ages.",
    "url": "https://jigsawplanet.online/puzzle-women",
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
      "@id": "https://jigsawplanet.online/puzzle-women"
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
