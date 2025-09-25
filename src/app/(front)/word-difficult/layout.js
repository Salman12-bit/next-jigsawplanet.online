import React from 'react';

export const metadata = {
  title: "Word De Scrambler | Play Free Online Puzzle Game",
  keywords: "android word puzzle games,adult word search puzzles",
  description:
    "Play the ultimate word de scrambler game online! Rearrange mixed-up letters, solve challenging words, and advance through exciting puzzle levels for free fun.",
  openGraph: {
    title: "Word De Scrambler | Play Free Online Puzzle Game",
    description:
      "Play the ultimate word de scrambler game online! Rearrange mixed-up letters, solve challenging words, and advance through exciting puzzle levels for free fun.",
    url: "https://jigsawplanet.online/word-difficult",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/word-difficult",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Word De Scrambler | Play Free Online Puzzle Game",
    "description":
      "Play the ultimate word de scrambler game online! Rearrange mixed-up letters, solve challenging words, and advance through exciting puzzle levels for free fun.",
    "url": "https://jigsawplanet.online/word-difficult",
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
      "@id": "https://jigsawplanet.online/word-difficult"
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

