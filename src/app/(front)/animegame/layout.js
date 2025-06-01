import React from 'react';

export const metadata = {
  title: "AnimeGame: Dive into Epic Adventures & Battles!",
  keywords :"jigsaw planet puzzles online,free jigsaws planet",
  description:
    "Explore AnimeGame for action-packed stories, epic battles, and stunning visuals. Join your favorite anime heroes in thrilling gameplay!",
  openGraph: {
    title: "AnimeGame: Dive into Epic Adventures & Battles!",
    description:
      "Explore AnimeGame for action-packed stories, epic battles, and stunning visuals. Join your favorite anime heroes in thrilling gameplay!",
    url: "https://jigsawplanet.online/aminegame",
    images: [
      {
        url: "https://jigsawplanet.online/images/aminegame.webp",
        width: 1200,
        height: 630,
        alt: "Play free jigsaws planet on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/aminegame",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AnimeGame: Dive into Epic Adventures & Battles!",
    "description":
      "Explore AnimeGame for action-packed stories, epic battles, and stunning visuals. Join your favorite anime heroes in thrilling gameplay!",
    "url": "https://jigsawplanet.online/aminegame",
    "mainEntity": {
      "@type": "Online Game",
      "name": "animegame puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "animegame puzzle",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/aminegame.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/aminegame.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/aminegame",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "animegame puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/aminegame.webp",
        "width": 500,
        "height": 500,
      },
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
