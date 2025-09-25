import React from 'react';

export const metadata = {
  title: "Free Jigsaw Puzzle Pieces Game – Play Instantly Online",
  description:
    "Play Jigsaw Puzzle Pieces online for free! Choose from fun designs, test your skills, and enjoy hours of relaxing puzzle-solving – start playing instantly.",
  openGraph: {
    title: "Free Jigsaw Puzzle Pieces Game – Play Instantly Online",
    description:
      "Play Jigsaw Puzzle Pieces online for free! Choose from fun designs, test your skills, and enjoy hours of relaxing puzzle-solving – start playing instantly.",
    url: "https://jigsawplanet.online/jigswaplanet",
    images: [
      {
        url: "https://jigsawplanet.online/images/dorapuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigswaplanet",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Free Jigsaw Puzzle Pieces Game – Play Instantly Online",
    "description":
      "Play Jigsaw Puzzle Pieces online for free! Choose from fun designs, test your skills, and enjoy hours of relaxing puzzle-solving – start playing instantly.",
    "url": "https://jigsawplanet.online/jigswaplanet",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/dorapuzzle.webp",
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
      "@id": "https://jigsawplanet.online/jigswaplanet"
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