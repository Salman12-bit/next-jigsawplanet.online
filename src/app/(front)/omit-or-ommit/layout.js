import React from 'react';

export const metadata = {
  title: "Omit or Ommit | Play Free Online Word Puzzle Game",
  description:
    "Test your spelling with the omit or ommit puzzle! Play free online, solve scrambled words, unlock levels, and sharpen your skills in a fun interactive game.",
  openGraph: {
    title: "Word Cookies Daily Puzzle: Tasty Brain Workout!",
    description:
      "Test your spelling with the omit or ommit puzzle! Play free online, solve scrambled words, unlock levels, and sharpen your skills in a fun interactive game.",
    url: "https://jigsawplanet.online/omit-or-ommit",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/omit-or-ommit",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Kids Jigsaw Puzzles – Play Free Online Puzzle Games",
    "description":
      "Test your spelling with the omit or ommit puzzle! Play free online, solve scrambled words, unlock levels, and sharpen your skills in a fun interactive game.",
    "url": "https://jigsawplanet.online/omit-or-ommit",
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
      "@id": "https://jigsawplanet.online/omit-or-ommit"
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
