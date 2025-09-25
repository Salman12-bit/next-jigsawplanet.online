import React from 'react';

export const metadata = {
  title: "Flower Jigsaw Puzzle – Play Free Online Puzzle Game Now",
  description:
    "Play Flower Jigsaw Puzzle online for free! Choose beautiful floral designs, solve relaxing puzzles, and enjoy hours of fun. Start playing instantly in your browser.",
  openGraph: {
    title: "Flower Jigsaw Puzzle – Play Free Online Puzzle Game Now",
    description:
      "Play Flower Jigsaw Puzzle online for free! Choose beautiful floral designs, solve relaxing puzzles, and enjoy hours of fun. Start playing instantly in your browser.",
    url: "https://jigsawplanet.online/jigsaw-flower",
    images: [
      {
        url: "https://jigsawplanet.online/flower.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-flower",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Flower Jigsaw Puzzle – Play Free Online Puzzle Game Now",
    "description":
      "Play Flower Jigsaw Puzzle online for free! Choose beautiful floral designs, solve relaxing puzzles, and enjoy hours of fun. Start playing instantly in your browser.",
    "url": "https://jigsawplanet.online/jigsaw-flower",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/flower.webp",
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
      "@id": "https://jigsawplanet.online/jigsaw-flower"
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
