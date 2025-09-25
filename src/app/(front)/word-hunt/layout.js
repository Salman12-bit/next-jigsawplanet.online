import React from 'react';

export const metadata = {
  title: "Word Hunt Puzzle Game | Play Free Online Now",
  description:
    "Play the ultimate word hunt puzzle game online! Solve scrambled words, unlock levels, and enjoy a fun brain-teasing challenge for kids and adults.",
  openGraph: {
    title: "Word Hunt Puzzle Game | Play Free Online Now",
    description:
      "Play the ultimate word hunt puzzle game online! Solve scrambled words, unlock levels, and enjoy a fun brain-teasing challenge for kids and adults.",
    url: "https://jigsawplanet.online/word-hunt",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/word-hunt",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Word Hunt Puzzle Game | Play Free Online Now",
    "description":
      "Play the ultimate word hunt puzzle game online! Solve scrambled words, unlock levels, and enjoy a fun brain-teasing challenge for kids and adults.",
    "url": "https://jigsawplanet.online/word-hunt",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Word"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/wordpuzzle.webp",
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
      "@id": "https://jigsawplanet.online/word-hunt"
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
