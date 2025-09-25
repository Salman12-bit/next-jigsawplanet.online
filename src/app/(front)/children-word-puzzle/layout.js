import React from 'react';

export const metadata = {
  title: "Free Children’s Word Puzzle Game | Play Online Now",
  description:
    "Challenge your mind with free children’s word puzzles online. Enjoy multiple levels, hints, and a fun word-solving experience for kids of all ages!",
  openGraph: {
    title: "Free Children’s Word Puzzle Game | Play Online Now",
    description:
      "Challenge your mind with free children’s word puzzles online. Enjoy multiple levels, hints, and a fun word-solving experience for kids of all ages!",
    url: "https://jigsawplanet.online/children-word-puzzle",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/children-word-puzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Free Children’s Word Puzzle Game | Play Online Now",
    "description":
      "Challenge your mind with free children’s word puzzles online. Enjoy multiple levels, hints, and a fun word-solving experience for kids of all ages!",
    "url": "https://jigsawplanet.online/children-word-puzzle",
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
      "@id": "https://jigsawplanet.online/children-word-puzzle"
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

