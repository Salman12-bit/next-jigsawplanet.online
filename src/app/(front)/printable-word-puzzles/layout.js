import React from 'react';

export const metadata = {
  title: "Hard Word Search Puzzles: Challenge Your Mind Today",
  keywords: "printable word puzzles, free printable word puzzles",
  description:
    "Test your skills with hard word search puzzles! Enjoy challenging puzzles that will keep your mind sharp and entertained for hours.",
  openGraph: {
    title: "Hard Word Search Puzzles: Challenge Your Mind Today",
    description:
      "Test your skills with hard word search puzzles! Enjoy challenging puzzles that will keep your mind sharp and entertained for hours.",
    url: "https://jigsawplanet.online/printable-word-puzzles",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play printable word puzzles",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/printable-word-puzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hard Word Search Puzzles: Challenge Your Mind Today",
    "description":
      "Test your skills with hard word search puzzles! Enjoy challenging puzzles that will keep your mind sharp and entertained for hours.",
    "url": "https://jigsawplanet.online/printable-word-puzzles",
    "mainEntity": {
      "@type": "Online Game",
      "name": "Hard Word Search",
      "genre": "Action, ",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle",
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
      "url": "https://jigsawplanet.online/printable-word-puzzles",
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
