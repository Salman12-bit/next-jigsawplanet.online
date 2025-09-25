import React from 'react';

export const metadata = {
  title: "Planet Jigsaw Puzzle – Play Free Online Puzzle Game",
  description:
    "Play the Planet Jigsaw Puzzle online for free! Solve space-themed puzzles, enjoy relaxing or challenging levels, and start playing instantly in your browser today.",
  openGraph: {
    title: "Planet Jigsaw Puzzle – Play Free Online Puzzle Game",
    description:
      "Play the Planet Jigsaw Puzzle online for free! Solve space-themed puzzles, enjoy relaxing or challenging levels, and start playing instantly in your browser today.",
    url: "https://jigsawplanet.online/jigsaw-place",
    images: [
      {
        url: "https://jigsawplanet.online/images/place.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-place",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Planet Jigsaw Puzzle – Play Free Online Puzzle Game",
    "description":
      "Play the Planet Jigsaw Puzzle online for free! Solve space-themed puzzles, enjoy relaxing or challenging levels, and start playing instantly in your browser today.",
    "url": "https://jigsawplanet.online/jigsaw-place",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/place.webp",
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
      "@id": "https://jigsawplanet.online/jigsaw-place"
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
