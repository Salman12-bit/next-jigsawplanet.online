import React from 'react';

export const metadata = {
  title: "Rearrange Letters Game | Play Free Word Puzzle Online",
  description:
    "Play the rearrange letters game online! Unscramble tricky words, pass through fun levels, and enjoy a challenging word puzzle adventure today.",
  openGraph: {
    title: "Rearrange Letters Game | Play Free Word Puzzle Online",
    description:
      "Play the rearrange letters game online! Unscramble tricky words, pass through fun levels, and enjoy a challenging word puzzle adventure today.",
    url: "https://jigsawplanet.online/word-game",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/word-game",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Rearrange Letters Game | Play Free Word Puzzle Online",
    "description":
      "Play the rearrange letters game online! Unscramble tricky words, pass through fun levels, and enjoy a challenging word puzzle adventure today.",
    "url": "https://jigsawplanet.online/word-game",
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
      "@id": "https://jigsawplanet.online/word-game"
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

