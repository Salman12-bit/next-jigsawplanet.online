import React from 'react';

export const metadata = {
  title: "Spelling Bee Words: Master Your Spelling Today!",
  keywords: "spelling word,word game puzzles,bee",
  description:
    "Boost your spelling game with our curated list of spelling bee words! Ideal for practice, competitions, and fun challenges to enhance your skills.",
  openGraph: {
    title: "Spelling Bee Words: Master Your Spelling Today!",
    description:
      "Boost your spelling game with our curated list of spelling bee words! Ideal for practice, competitions, and fun challenges to enhance your skills.",
    url: "https://jigsawplanet.online/word-puzzle",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play word game puzzles",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/word-puzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Spelling Bee Words: Master Your Spelling Today!",
    "description":
      "Boost your spelling game with our curated list of spelling bee words! Ideal for practice, competitions, and fun challenges to enhance your skills.",
    "url": "https://jigsawplanet.online/word-puzzle",
    "mainEntity": {
      "@type": "Online Game",
      "name": "word game puzzles,",
      "genre": "Action, ",
      "publisher": {
        "@type": "Organization",
        "name": "Jigsawplanet",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/Puzzlle.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/Puzzlle.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/word-puzzle",
      "playMode": "Single Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/Puzzlle.webp",
      "width": 1200,
      "height": 630,
    },
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
