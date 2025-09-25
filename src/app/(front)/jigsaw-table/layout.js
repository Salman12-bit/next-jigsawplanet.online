import React from 'react';

export const metadata = {
  title: "Best Jigsaw Puzzle Tabletop – Play Instantly for Free",
  description:
    "Play jigsaw puzzle tabletop online for free! Solve fun puzzles, relax your mind, and enjoy hours of challenging tabletop puzzle gameplay today.",
  openGraph: {
    title: "Best Jigsaw Puzzle Tabletop – Play Instantly for Free",
    description:
      "Play jigsaw puzzle tabletop online for free! Solve fun puzzles, relax your mind, and enjoy hours of challenging tabletop puzzle gameplay today.",
    url: "https://jigsawplanet.online/jigsaw-table",
    images: [
      {
        url: "https://jigsawplanet.online/images/burjkhalifa.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-table",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Best Jigsaw Puzzle Tabletop – Play Instantly for Free",
    "description":
      "Play jigsaw puzzle tabletop online for free! Solve fun puzzles, relax your mind, and enjoy hours of challenging tabletop puzzle gameplay today.",
    "url": "https://jigsawplanet.online/jigsaw-table",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/burjkhalifa.webp",
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
      "@id": "https://jigsawplanet.online/jigsaw-table"
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
