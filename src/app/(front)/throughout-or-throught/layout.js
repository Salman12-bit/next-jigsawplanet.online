import React from 'react';

export const metadata = {
  title: "Throughout or Throught Word Puzzle | Fun Online Game",
  description:
    "Enjoy a spelling twist with the throughout or throught puzzle! Play free online, practice tricky words, and solve creative challenges to improve your word power.",
  openGraph: {
    title: "Throughout or Throught Word Puzzle | Fun Online Game",
    description:
      "Enjoy a spelling twist with the throughout or throught puzzle! Play free online, practice tricky words, and solve creative challenges to improve your word power.",
    url: "https://jigsawplanet.online/throughout-or-throught",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/throughout-or-throught",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Throughout or Throught Word Puzzle | Fun Online Game",
    "description":
      "Enjoy a spelling twist with the throughout or throught puzzle! Play free online, practice tricky words, and solve creative challenges to improve your word power.",
    "url": "https://jigsawplanet.online/throughout-or-throught",
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
      "@id": "https://jigsawplanet.online/throughout-or-throught"
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
