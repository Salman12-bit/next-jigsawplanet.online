import React from 'react';

export const metadata = {
  title: "Interested or Intrested | Play Free Online Word Puzzle",
  description:
    "Test your spelling with the interested or intrested puzzle! Play free online, solve tricky challenges, and sharpen your vocabulary while enjoying fun play.",
  openGraph: {
    title: "Interested or Intrested | Play Free Online Word Puzzle",
    description:
      "Test your spelling with the interested or intrested puzzle! Play free online, solve tricky challenges, and sharpen your vocabulary while enjoying fun play.",
    url: "https://jigsawplanet.online/interested-or-intrested",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/interested-or-intrested",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Interested or Intrested | Play Free Online Word Puzzle",
    "description":
      "Test your spelling with the interested or intrested puzzle! Play free online, solve tricky challenges, and sharpen your vocabulary while enjoying fun play.",
    "url": "https://jigsawplanet.online/interested-or-intrested",
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
      "@id": "https://jigsawplanet.online/interested-or-intrested"
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