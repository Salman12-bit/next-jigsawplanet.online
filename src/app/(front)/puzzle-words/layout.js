import React from 'react';

export const metadata = {
  title: "3rd Grade Spelling Words | Play Free Online Game",
  description:
    "Practice 3rd grade spelling words with a fun online puzzle game! Rearrange letters, solve levels, and build strong word skills through play.",
  openGraph: {
    title: "3rd Grade Spelling Words | Play Free Online Game",
    description:
      "Practice 3rd grade spelling words with a fun online puzzle game! Rearrange letters, solve levels, and build strong word skills through play.",
    url: "https://jigsawplanet.online/puzzle-words",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/puzzle-words",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "3rd Grade Spelling Words | Play Free Online Game",
    "description":
      "Practice 3rd grade spelling words with a fun online puzzle game! Rearrange letters, solve levels, and build strong word skills through play.",
    "url": "https://jigsawplanet.online/puzzle-words",
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
      "@id": "https://jigsawplanet.online/puzzle-words"
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
