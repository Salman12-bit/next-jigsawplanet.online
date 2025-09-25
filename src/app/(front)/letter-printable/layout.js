import React from 'react';

export const metadata = {
  title: "Printable Letter Puzzles Play Free Online Game",
  keywords: "a b c puzzle,abc puzzle online",
  description:
    "Play printable letter puzzles free online! A fun educational game for kids to match letters, learn the alphabet, and boost vocabulary while playing.",
  openGraph: {
    title: "Printable Letter Puzzles Play Free Online Game",
    description:
      "Play printable letter puzzles free online! A fun educational game for kids to match letters, learn the alphabet, and boost vocabulary while playing.",
    url: "https://jigsawplanet.online/letter-printable",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/letter-printable",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Printable Letter Puzzles Play Free Online Game",
    "description":
      "Play printable letter puzzles free online! A fun educational game for kids to match letters, learn the alphabet, and boost vocabulary while playing.",
    "url": "https://jigsawplanet.online/letter-printable",
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
      "@id": "https://jigsawplanet.online/letter-printable"
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
