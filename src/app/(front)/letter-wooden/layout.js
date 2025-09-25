import React from 'react';

export const metadata = {
  title: "Play Wooden Letter Puzzle Online – Fun Learning Game",
  description:
    "Play the wooden letter puzzle online for free. A fun and educational game that helps kids learn letters, improve memory, and enjoy word challenges.",
  openGraph: {
    title: "Play Wooden Letter Puzzle Online – Fun Learning Game",
    description:
      "Play the wooden letter puzzle online for free. A fun and educational game that helps kids learn letters, improve memory, and enjoy word challenges.",
    url: "https://jigsawplanet.online/letter-wooden",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/letter-wooden",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Play Wooden Letter Puzzle Online – Fun Learning Game",
    "description":
      "Play the wooden letter puzzle online for free. A fun and educational game that helps kids learn letters, improve memory, and enjoy word challenges.",
    "url": "https://jigsawplanet.online/letter-wooden",
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
      "@id": "https://jigsawplanet.online/letter-wooden"
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
