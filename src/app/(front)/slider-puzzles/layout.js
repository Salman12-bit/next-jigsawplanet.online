import React from 'react';

export const metadata = {
  title: "Alphabet Puzzle Game Online – Play Free Learning Challenge",
  description:
    "Try the alphabet puzzle game online! Solve ABC challenges, arrange letters, and enjoy a fun way for children to boost memory and learning skills.",
  openGraph: {
    title: "Alphabet Puzzle Game Online – Play Free Learning Challenge",
    description:
      "Try the alphabet puzzle game online! Solve ABC challenges, arrange letters, and enjoy a fun way for children to boost memory and learning skills.",
    url: "https://jigsawplanet.online/slider-puzzles",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/slider-puzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Alphabet Puzzle Game Online – Play Free Learning Challenge",
    "description":
      "Try the alphabet puzzle game online! Solve ABC challenges, arrange letters, and enjoy a fun way for children to boost memory and learning skills.",
    "url": "https://jigsawplanet.online/slider-puzzles",
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
      "@id": "https://jigsawplanet.online/slider-puzzles"
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
