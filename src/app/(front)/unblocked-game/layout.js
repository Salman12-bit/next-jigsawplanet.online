import React from 'react';

export const metadata = {
  title: "Unblock Alphabet Letter Game – Play Free Online Now",
  description:
    "Try the unblock alphabet letter game online! Children can instantly play, move tiles, and learn letters while solving fun interactive puzzles.",
  openGraph: {
    title: "Unblock Alphabet Letter Game – Play Free Online Now",
    description:
      "Try the unblock alphabet letter game online! Children can instantly play, move tiles, and learn letters while solving fun interactive puzzles.",
    url: "https://jigsawplanet.online/unblocked-game",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/unblocked-game",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Unblock Alphabet Letter Game – Play Free Online Now",
    "description":
      "Try the unblock alphabet letter game online! Children can instantly play, move tiles, and learn letters while solving fun interactive puzzles.",
    "url": "https://jigsawplanet.online/unblocked-game",
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
      "@id": "https://jigsawplanet.online/unblocked-game"
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
