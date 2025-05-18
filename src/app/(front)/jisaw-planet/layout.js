import React from 'react';

export const metadata = {
  title: "JisawPlanet Create & Solve Online Jigsaw Puzzles",
  keywords :"puzzles pictures,puzzle pic,burjkhalifa",
  description:
    "Discover JisawPlanet—an interactive space to enjoy, design, and share beautiful jigsaw puzzles. Relax, play, and challenge your brain!",
  openGraph: {
    title: "JisawPlanet Create & Solve Online Jigsaw Puzzles",
    description:
      "Discover JisawPlanet—an interactive space to enjoy, design, and share beautiful jigsaw puzzles. Relax, play, and challenge your brain!",
    url: "https://jigsawplanet.online/jisaw-planet",
    images: [
      {
        url: "https://jigsawplanet.online/images/burjkhalifa.webp",
        width: 1200,
        height: 630,
        alt: "Play game the puzzle on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jisaw-planet",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "JisawPlanet Create & Solve Online Jigsaw Puzzles",
    "description":
      "Discover JisawPlanet—an interactive space to enjoy, design, and share beautiful jigsaw puzzles. Relax, play, and challenge your brain!",
    "url": "https://jigsawplanet.online/jisaw-planet",
    "mainEntity": {
      "@type": "Online Game",
      "name": "game the puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "jigsawplanet",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/burjkhalifa.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/burjkhalifa.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jisaw-planet",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "game the puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/burjkhalifa.webp",
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
