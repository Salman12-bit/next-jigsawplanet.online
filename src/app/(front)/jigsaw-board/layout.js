import React from 'react';

export const metadata = {
  title: "Jigsaw Puzzle Board Online – Play Free Brain Game",
  description:
    "Boost your thinking with the jigsaw puzzle board! Play free online, solve image puzzles, and enjoy an interactive, mind-training game.",
  openGraph: {
    title: "Jigsaw Puzzle Board Online – Play Free Brain Game",
    description:
      "Boost your thinking with the jigsaw puzzle board! Play free online, solve image puzzles, and enjoy an interactive, mind-training game.",
    url: "https://jigsawplanet.online/jigsaw-board",
    images: [
      {
        url: "https://jigsawplanet.online/images/jigsawbox.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-board",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Jigsaw Puzzle Board Online – Play Free Brain Game",
    "description":
      "Boost your thinking with the jigsaw puzzle board! Play free online, solve image puzzles, and enjoy an interactive, mind-training game.",
    "url": "https://jigsawplanet.online/jigsaw-board",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/jigsawbox.webp",
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
      "@id": "https://jigsawplanet.online/jigsaw-board"
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
