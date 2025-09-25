import React from 'react';

export const metadata = {
  title: "Jigsaw Puzzles for Adults – Play Online Free",
  description:
    "Challenging jigsaw puzzles for adults available online. Play free, improve focus, and enjoy hours of puzzle-solving fun instantly.",
  openGraph: {
    title: "Jigsaw Puzzles for Adults – Play Online Free",
    description:
      "Challenging jigsaw puzzles for adults available online. Play free, improve focus, and enjoy hours of puzzle-solving fun instantly.",
    url: "https://jigsawplanet.online/zigsaw-puzzles",
    images: [
      {
        url: "https://jigsawplanet.online/images/riverboat.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/zigsaw-puzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Jigsaw Puzzles for Adults – Play Online Free",
    "description":
      "Challenging jigsaw puzzles for adults available online. Play free, improve focus, and enjoy hours of puzzle-solving fun instantly.",
    "url": "https://jigsawplanet.online/zigsaw-puzzles",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/riverboat.webp",
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
      "@id": "https://jigsawplanet.online/zigsaw-puzzles"
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
