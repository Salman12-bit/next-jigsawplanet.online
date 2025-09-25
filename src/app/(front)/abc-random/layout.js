import React from 'react';

export const metadata = {
  title: "Play Free abcdefghijklmnopqrstuvwxyz Game Online",
  description:
    "Try the abcdefghijklmnopqrstuvwxyz puzzle game free online. Practice alphabets A to Z with interactive puzzles designed for kids to learn and play.",
  openGraph: {
    title: "Play Free abcdefghijklmnopqrstuvwxyz Game Online",
    description:
      "Try the abcdefghijklmnopqrstuvwxyz puzzle game free online. Practice alphabets A to Z with interactive puzzles designed for kids to learn and play.",
    url: "https://jigsawplanet.online/abc-random",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/abc-random",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Play Free abcdefghijklmnopqrstuvwxyz Game Online",
    "description":
      "Try the abcdefghijklmnopqrstuvwxyz puzzle game free online. Practice alphabets A to Z with interactive puzzles designed for kids to learn and play.",
    "url": "https://jigsawplanet.online/abc-random",
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
      "@id": "https://jigsawplanet.online/abc-random"
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
