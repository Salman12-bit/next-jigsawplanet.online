import React from 'react';

export const metadata = {
  title: "Wooden Alphabet Puzzle Online – Free Educational Game",
  description:
    "Play now the wooden alphabet puzzle online! Boost children’s memory and letter recognition with a fun, interactive puzzle challenge.",
  openGraph: {
    title: "Wooden Alphabet Puzzle Online – Free Educational Game",
    description:
      "Play now the wooden alphabet puzzle online! Boost children’s memory and letter recognition with a fun, interactive puzzle challenge.",
    url: "https://jigsawplanet.online/alphabet-game",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/alphabet-game",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Wooden Alphabet Puzzle Online – Free Educational Game",
    "description":
      "Play now the wooden alphabet puzzle online! Boost children’s memory and letter recognition with a fun, interactive puzzle challenge.",
    "url": "https://jigsawplanet.online/alphabet-game",
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
      "@id": "https://jigsawplanet.online/alphabet-game"
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
