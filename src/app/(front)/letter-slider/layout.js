import React from 'react';

export const metadata = {
  title: "Letter Puzzle for Kids – Play Free Online Game",
  description:
    "Play Letter Puzzle for Kids online free! Fun educational game to learn letters, improve vocabulary, and enjoy colorful puzzles instantly in your browser.",
  openGraph: {
    title: "Letter Puzzle for Kids – Play Free Online Game",
    description:
      "Play Letter Puzzle for Kids online free! Fun educational game to learn letters, improve vocabulary, and enjoy colorful puzzles instantly in your browser.",
    url: "https://jigsawplanet.online/letter-slider",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/letter-slider",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Letter Puzzle for Kids – Play Free Online Game",
    "description":
      "Play Letter Puzzle for Kids online free! Fun educational game to learn letters, improve vocabulary, and enjoy colorful puzzles instantly in your browser.",
    "url": "https://jigsawplanet.online/letter-slider",
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
      "@id": "https://jigsawplanet.online/letter-slider"
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
