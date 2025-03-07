import React from 'react';

export const metadata = {
  title: "Puzzle Women: Empower Your Brain with Creative Puzzles",
  keywords: "word puzzle,women of the hour, women",
  description:
    "Dive into Puzzle Women where creative puzzles challenge your mind and boost inspiration. Enjoy fun brain teasers that empower and engage you!",
  openGraph: {
    title: "Puzzle Women: Empower Your Brain with Creative Puzzles",
    description:
      "Dive into Puzzle Women where creative puzzles challenge your mind and boost inspiration. Enjoy fun brain teasers that empower and engage you!",
    url: "https://jigsawplanet.online/puzzle-women",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play women of the hour game",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/puzzle-women",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Puzzle Women: Empower Your Brain with Creative Puzzles",
    "description":
      "Dive into Puzzle Women where creative puzzles challenge your mind and boost inspiration. Enjoy fun brain teasers that empower and engage you!",
    "url": "https://jigsawplanet.online/puzzle-women",
    "mainEntity": {
      "@type": "Online Game",
      "name": "women of the hour",
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
      "url": "https://jigsawplanet.online/puzzle-women",
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
