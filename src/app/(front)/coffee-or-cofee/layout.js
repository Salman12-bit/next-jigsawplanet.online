import React from 'react';

export const metadata = {
  title: "Coffee or Cofee | Play Free Online Word Puzzle",
  description:
    "Play the coffee or cofee puzzle online! Test spelling, solve fun word challenges, and boost vocabulary in a free interactive game with exciting levels.",
  openGraph: {
    title: "Coffee or Cofee | Play Free Online Word Puzzle",
    description:
      "Play the coffee or cofee puzzle online! Test spelling, solve fun word challenges, and boost vocabulary in a free interactive game with exciting levels.",
    url: "https://jigsawplanet.online/coffee-or-cofee",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/coffee-or-cofee",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Coffee or Cofee | Play Free Online Word Puzzle",
    "description":
      "Play the coffee or cofee puzzle online! Test spelling, solve fun word challenges, and boost vocabulary in a free interactive game with exciting levels.",
    "url": "https://jigsawplanet.online/coffee-or-cofee",
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
      "@id": "https://jigsawplanet.online/coffee-or-cofee"
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
