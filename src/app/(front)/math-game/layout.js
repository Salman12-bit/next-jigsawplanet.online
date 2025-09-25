import React from 'react';

export const metadata = {
  title: "ABC Math Games Online – Learn and Play for Free",
  description:
    "Play ABC math puzzle games free online. Combine alphabet fun with math challenges designed to improve learning and problem-solving for children.",
  openGraph: {
    title: "ABC Math Games Online – Learn and Play for Free",
    description:
      "Play ABC math puzzle games free online. Combine alphabet fun with math challenges designed to improve learning and problem-solving for children.",
    url: "https://jigsawplanet.online/math-game",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/math-game",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "ABC Math Games Online – Learn and Play for Free",
    "description":
      "Play ABC math puzzle games free online. Combine alphabet fun with math challenges designed to improve learning and problem-solving for children.",
    "url": "https://jigsawplanet.online/math-game",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/jigsaw-plaet.webp",
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
      "@id": "https://jigsawplanet.online/math-game"
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
