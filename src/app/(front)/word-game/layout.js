import React from 'react';

export const metadata = {
  title: "Play Word Game: Boost Your Brain with Fun Puzzles",
  keywords: "word hunt online free,spelling words,CHOCOLATE,life",
  description:
    "Challenge your mind with our exciting word game. Solve puzzles, learn new words, and boost your vocabulary in a fun and engaging way!",
  openGraph: {
    title: "Play Word Game: Boost Your Brain with Fun Puzzles",
    description:
      "Challenge your mind with our exciting word game. Solve puzzles, learn new words, and boost your vocabulary in a fun and engaging way!",
    url: "https://jigsawplanet.online/word-game",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play word hunt online free",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/word-game",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Play Word Game: Boost Your Brain with Fun Puzzles",
    "description":
      "Challenge your mind with our exciting word game. Solve puzzles, learn new words, and boost your vocabulary in a fun and engaging way!",
    "url": "https://jigsawplanet.online/word-game",
    "mainEntity": {
      "@type": "Online Game",
      "name": "word hunt online free",
      "genre": "Action, ",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/Puzzlle.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/Puzzlle.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/word-game",
      "playMode": "Single Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/Puzzlle.webp",
      "width": 1200,
      "height": 630,
    },
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
