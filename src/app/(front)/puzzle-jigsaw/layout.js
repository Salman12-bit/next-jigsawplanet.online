import React from 'react';

export const metadata = {
  title: "Enjoy Puzzles Jigsaw: Fun Challenges for All Ages",
  keywords :"jiggsaw planet,disney puzzles online,online game",
  description:
    " Discover exciting jigsaw puzzles that test your skills and creativity. Solve beautiful, engaging puzzles for endless fun and relaxation!",
  openGraph: {
    title: "Enjoy Puzzles Jigsaw: Fun Challenges for All Ages",
    description:
      " Discover exciting jigsaw puzzles that test your skills and creativity. Solve beautiful, engaging puzzles for endless fun and relaxation!",
    url: "https://jigsawplanet.online/puzzle-jigsaw",
    images: [
      {
        url: "https://jigsawplanet.online/images/nightstar.webp",
        width: 1200,
        height: 630,
        alt: "Play disney puzzles online on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/puzzle-jigsaw",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Enjoy Puzzles Jigsaw: Fun Challenges for All Ages",
    "description":
      " Discover exciting jigsaw puzzles that test your skills and creativity. Solve beautiful, engaging puzzles for endless fun and relaxation!",
    "url": "https://jigsawplanet.online/puzzle-jigsaw",
    "mainEntity": {
      "@type": "Online Game",
      "name": "disney puzzles online",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "disney puzzles online",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/nightstar.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/nightstar.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/puzzle-jigsaw",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "disney puzzles online",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/nightstar.webp",
        "width": 500,
        "height": 500,
      },
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/nightstar.webp",
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
