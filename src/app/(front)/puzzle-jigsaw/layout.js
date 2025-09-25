import React from 'react';

export const metadata = {
  title: "Kids Jigsaw Puzzles – Play Free Online Puzzle Games",
  description:
    "Play Kids Jigsaw Puzzles online for free! Fun, colorful, and easy puzzles designed for children of all ages. Start playing instantly and enjoy hours of learning.",
  openGraph: {
    title: "Kids Jigsaw Puzzles – Play Free Online Puzzle Games",
    description:
      "Play Kids Jigsaw Puzzles online for free! Fun, colorful, and easy puzzles designed for children of all ages. Start playing instantly and enjoy hours of learning.",
    url: "https://jigsawplanet.online/puzzle-jigsaw",
    images: [
      {
        url: "https://jigsawplanet.online/images/nightstar.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/puzzle-jigsaw",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Kids Jigsaw Puzzles – Play Free Online Puzzle Games",
    "description":
      "Play Kids Jigsaw Puzzles online for free! Fun, colorful, and easy puzzles designed for children of all ages. Start playing instantly and enjoy hours of learning.",
    "url": "https://jigsawplanet.online/puzzle-jigsaw",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/nightstar.webp",
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
      "@id": "https://jigsawplanet.online/puzzle-jigsaw"
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
