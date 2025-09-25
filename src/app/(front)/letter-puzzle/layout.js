import React from 'react';

export const metadata = {
  title: "Letter Puzzle – Fun & Free Online Puzzle Game",
  description:
    "Enjoy free letter puzzle games online. Test your brain with single-letter challenges, improve your skills, and play instantly for fun and learning.",
  openGraph: {
    title: "Letter Puzzle – Fun & Free Online Puzzle Game",
    description:
      "Enjoy free letter puzzle games online. Test your brain with single-letter challenges, improve your skills, and play instantly for fun and learning.",
    url: "https://jigsawplanet.online/letter-puzzle",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/letter-puzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Letter Puzzle – Fun & Free Online Puzzle Game",
    "description":
      "Enjoy free letter puzzle games online. Test your brain with single-letter challenges, improve your skills, and play instantly for fun and learning.",
    "url": "https://jigsawplanet.online/letter-puzzle",
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
      "@id": "https://jigsawplanet.online/letter-puzzle"
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
