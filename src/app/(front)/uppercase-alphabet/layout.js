import React from 'react';

export const metadata = {
  title: "Play Uppercase Alphabet Puzzle Online – Free Fun Game",
  description:
    "Play the uppercase alphabet puzzle online! Kids can arrange A to Z letters, solve fun challenges, and boost letter recognition while learning.",
  openGraph: {
    title: "Play Uppercase Alphabet Puzzle Online – Free Fun Game",
    description:
      "Play the uppercase alphabet puzzle online! Kids can arrange A to Z letters, solve fun challenges, and boost letter recognition while learning.",
    url: "https://jigsawplanet.online/math-magician",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/math-magician",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Play Uppercase Alphabet Puzzle Online – Free Fun Game",
    "description":
      "Play the uppercase alphabet puzzle online! Kids can arrange A to Z letters, solve fun challenges, and boost letter recognition while learning.",
    "url": "https://jigsawplanet.online/math-magician",
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
      "@id": "https://jigsawplanet.online/math-magician"
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
