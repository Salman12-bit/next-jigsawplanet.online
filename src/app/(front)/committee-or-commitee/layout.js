import React from 'react';

export const metadata = {
  title: "Committee or Commitee – Play Free Spelling Word Game",
  description:
    "Play the Committee or Commitee spelling game online! Test your grammar skills, choose the right spelling, and learn through fun challenges.",
  openGraph: {
    title: "Committee or Commitee – Play Free Spelling Word Game",
    description:
      "Play the Committee or Commitee spelling game online! Test your grammar skills, choose the right spelling, and learn through fun challenges.",
    url: "https://jigsawplanet.online/committee-or-commitee",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/committee-or-commitee",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Committee or Commitee – Play Free Spelling Word Game",
    "description":
      "Play the Committee or Commitee spelling game online! Test your grammar skills, choose the right spelling, and learn through fun challenges.",
    "url": "https://jigsawplanet.online/committee-or-commitee",
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
      "@id": "https://jigsawplanet.online/committee-or-commitee"
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
