import React from 'react';

export const metadata = {
  title: "Letter Missing Puzzles – Play Free Letter Game Online",
  description:
    "Play free Letter Missing Puzzles online! A fun educational game to match letters, fill missing letters, and boost vocabulary while enjoying interactive play.",
  openGraph: {
    title: "Letter Missing Puzzles – Play Free Letter Game Online",
    description:
      "Play free Letter Missing Puzzles online! A fun educational game to match letters, fill missing letters, and boost vocabulary while enjoying interactive play.",
    url: "https://jigsawplanet.online/letter-missing",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/letter-missing",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Letter Missing Puzzles – Play Free Letter Game Online",
    "description":
      "Play free Letter Missing Puzzles online! A fun educational game to match letters, fill missing letters, and boost vocabulary while enjoying interactive play.",
    "url": "https://jigsawplanet.online/letter-missing",
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
      "@id": "https://jigsawplanet.online/letter-missing"
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
