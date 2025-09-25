import React from 'react';

export const metadata = {
  title: "Rabbit Jigsaw Puzzle – Play Free Online Puzzle Game",
  description:
    "Play rabbit jigsaw puzzle online for free! Solve cute bunny puzzles, relax with fun challenges, and enjoy hours of entertainment—start playing instantly in your browser.",
  openGraph: {
    title: "Rabbit Jigsaw Puzzle – Play Free Online Puzzle Game",
    description:
      "Play rabbit jigsaw puzzle online for free! Solve cute bunny puzzles, relax with fun challenges, and enjoy hours of entertainment—start playing instantly in your browser.",
    url: "https://jigsawplanet.online/jigsaw-rabbit",
    images: [
      {
        url: "https://jigsawplanet.online/images/rabbit.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-rabbit",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Rabbit Jigsaw Puzzle – Play Free Online Puzzle Game",
    "description":
      "Play rabbit jigsaw puzzle online for free! Solve cute bunny puzzles, relax with fun challenges, and enjoy hours of entertainment—start playing instantly in your browser.",
    "url": "https://jigsawplanet.online/jigsaw-rabbit",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/rabbit.webp",
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
      "@id": "https://jigsawplanet.online/jigsaw-rabbit"
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