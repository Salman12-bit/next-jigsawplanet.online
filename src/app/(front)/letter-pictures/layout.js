import React from 'react';

export const metadata = {
  title: "Letter I Pictures Online – Learn Letters & Play Free",
  description:
    "Play with Letter I pictures online for free. A fun educational game for kids to recognize words, match images, and learn the alphabet interactively.",
  openGraph: {
    title: "Letter I Pictures Online – Learn Letters & Play Free",
    description:
      "Play with Letter I pictures online for free. A fun educational game for kids to recognize words, match images, and learn the alphabet interactively.",
    url: "https://jigsawplanet.online/letter-pictures",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/letter-pictures",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Letter I Pictures Online – Learn Letters & Play Free",
    "description":
      "Play with Letter I pictures online for free. A fun educational game for kids to recognize words, match images, and learn the alphabet interactively.",
    "url": "https://jigsawplanet.online/letter-pictures",
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
      "@id": "https://jigsawplanet.online/letter-pictures"
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
