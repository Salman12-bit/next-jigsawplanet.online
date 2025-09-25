import React from 'react';

export const metadata = {
  title: "Play Free ABCD Alphabet Puzzle Online – Fun Learning Game",
  description:
    "Play the ABCD alphabet puzzle online! Kids can solve fun letter challenges, arrange A to Z, and enjoy interactive learning through exciting play.",
  openGraph: {
    title: "Play Free ABCD Alphabet Puzzle Online – Fun Learning Game",
    description:
      "Play the ABCD alphabet puzzle online! Kids can solve fun letter challenges, arrange A to Z, and enjoy interactive learning through exciting play.",
    url: "https://jigsawplanet.online/alphabet-puzzles",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/alphabet-puzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Play Free ABCD Alphabet Puzzle Online – Fun Learning Game",
    "description":
      "Play the ABCD alphabet puzzle online! Kids can solve fun letter challenges, arrange A to Z, and enjoy interactive learning through exciting play.",
    "url": "https://jigsawplanet.online/alphabet-puzzles",
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
      "@id": "https://jigsawplanet.online/alphabet-puzzles"
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