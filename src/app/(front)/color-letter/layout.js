import React from 'react';

export const metadata = {
  title: "Colored Letter Play Free Online Game",
  description:
    "Play Colored Letter Puzzle online for free! Match letters by color, solve fun puzzles, and enjoy an interactive educational letter game instantly.",
  openGraph: {
    title: "Colored Letter Play Free Online Game",
    description:
      "Play Colored Letter Puzzle online for free! Match letters by color, solve fun puzzles, and enjoy an interactive educational letter game instantly.",
    url: "https://jigsawplanet.online/color-letter",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/color-letter",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Colored Letter Play Free Online Game",
    "description":
      "Play Colored Letter Puzzle online for free! Match letters by color, solve fun puzzles, and enjoy an interactive educational letter game instantly.",
    "url": "https://jigsawplanet.online/color-letter",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/Puzzlle.webp",
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
      "@id": "https://jigsawplanet.online/color-letter"
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
