import React from 'react';

export const metadata = {
  title: "Free Letter Block Puzzle Game – Play Now Online",
  description:
    "Letter Block Puzzle Play instantly online for free! A fun educational game to learn letters, improve vocabulary, and enjoy puzzle challenges.",
  openGraph: {
    title: "Free Letter Block Puzzle Game – Play Now Online",
    description:
      "Letter Block Puzzle Play instantly online for free! A fun educational game to learn letters, improve vocabulary, and enjoy puzzle challenges.",
    url: "https://jigsawplanet.online/letter-block",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/letter-block",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Free Letter Block Puzzle Game – Play Now Online",
    "description":
      "Letter Block Puzzle Play instantly online for free! A fun educational game to learn letters, improve vocabulary, and enjoy puzzle challenges.",
    "url": "https://jigsawplanet.online/letter-block",
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
      "@id": "https://jigsawplanet.online/letter-block"
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
