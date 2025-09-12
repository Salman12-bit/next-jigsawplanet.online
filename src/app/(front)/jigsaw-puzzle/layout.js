import React from "react";

export const metadata = {
  title: "Play Free Jigsaw Puzzle Online – Fun & Relaxing Game Anytime",
  description:
    "Play free jigsaw puzzle online! Relax, solve stunning images, and enjoy fun brain-boosting puzzles for all ages – no download needed.",
  openGraph: {
    title: "Play Free Jigsaw Puzzle Online – Fun & Relaxing Game Anytime",
    description:
      "Play free jigsaw puzzle online! Relax, solve stunning images, and enjoy fun brain-boosting puzzles for all ages – no download needed.",
    url: "https://jigsawplanet.online/jigsaw-puzzle",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzle3.webp",
        width: 1200,
        height: 630,
        alt: "ABC puzzle game with colorful letters for kids learning online",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-puzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Play Free Jigsaw Puzzle Online – Fun & Relaxing Game Anytime",
    "description":
      "Play free jigsaw puzzle online! Relax, solve stunning images, and enjoy fun brain-boosting puzzles for all ages – no download needed.",
    "url": "https://jigsawplanet.online/jigsaw-puzzle",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/Puzzle3.webp",
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
      "@id": "https://jigsawplanet.online/jigsaw-puzzle"
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
