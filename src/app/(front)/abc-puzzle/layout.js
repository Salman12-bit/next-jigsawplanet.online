import React from 'react';

export const metadata = {
  title: "Play ABC Puzzle Online – Fun Alphabet Game for Kids",
  description:
    "Play the ABC Puzzle online and make learning letters exciting! Solve interactive puzzles, explore alphabets, and enjoy fun gameplay anytime.",
  openGraph: {
    title: "Play ABC Puzzle Online – Fun Alphabet Game for Kids",
    description:
      "Play the ABC Puzzle online and make learning letters exciting! Solve interactive puzzles, explore alphabets, and enjoy fun gameplay anytime.",
    url: "https://jigsawplanet.online/abc-puzzle",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/abc-puzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Play ABC Puzzle Online – Fun Alphabet Game for Kids",
    "description":
      "Play the ABC Puzzle online and make learning letters exciting! Solve interactive puzzles, explore alphabets, and enjoy fun gameplay anytime.",
    "url": "https://jigsawplanet.online/abc-puzzle",
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
      "@id": "https://jigsawplanet.online/abc-puzzle"
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
