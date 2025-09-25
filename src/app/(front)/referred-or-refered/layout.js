import React from 'react';

export const metadata = {
  title: "Referred or Refered | Play Free Online Word Puzzle",
  description:
    "Play the referred or refered puzzle and test your spelling skills! Solve tricky word challenges, unlock fun levels, and enjoy a free interactive online game.",
  openGraph: {
    title: "Referred or Refered | Play Free Online Word Puzzle",
    description:
      "Play the referred or refered puzzle and test your spelling skills! Solve tricky word challenges, unlock fun levels, and enjoy a free interactive online game.",
    url: "https://jigsawplanet.online/referred-or-refered",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/referred-or-refered",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Referred or Refered | Play Free Online Word Puzzle",
    "description":
      "Play the referred or refered puzzle and test your spelling skills! Solve tricky word challenges, unlock fun levels, and enjoy a free interactive online game.",
    "url": "https://jigsawplanet.online/referred-or-refered",
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
      "@id": "https://jigsawplanet.online/referred-or-refered"
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
