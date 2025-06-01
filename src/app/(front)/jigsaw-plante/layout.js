import React from 'react';

export const metadata = {
  title: "Jigsaw Plante Play & Create Beautiful Puzzles",
  keywords :"game the puzzle,dora the explorer puzzle games",
  description:
    "Explore Jigsaw Plante for relaxing puzzle play! Solve vibrant jigsaws, make your own, and enjoy endless creativity online.",
  openGraph: {
    title: "Jigsaw Plante Play & Create Beautiful Puzzles",
    description:
      "Explore Jigsaw Plante for relaxing puzzle play! Solve vibrant jigsaws, make your own, and enjoy endless creativity online.",
    url: "https://jigsawplanet.online/jigsaw-plante",
    images: [
      {
        url: "https://jigsawplanet.online/images/jigsawtruck.webp",
        width: 1200,
        height: 630,
        alt: "Play game the puzzle on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-plante",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jigsaw Plante Play & Create Beautiful Puzzles",
    "description":
      "Explore Jigsaw Plante for relaxing puzzle play! Solve vibrant jigsaws, make your own, and enjoy endless creativity online.",
    "url": "https://jigsawplanet.online/jigsaw-plante",
    "mainEntity": {
      "@type": "Online Game",
      "name": "game the puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/jigsawtruck.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/jigsawtruck.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jigsaw-plante",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "game the puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/jigsawtruck.webp",
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
