import React from 'react';

export const metadata = {
  title: "Zigsaw Puzzles Relax and Solve Fun Picture Games",
  keywords :"building puzzles,adult jigsaw puzzle",
  description:
    "Enjoy zigsaw puzzles that calm the mind and challenge your brain. Piece together beautiful images anytime, anywhere for pure fun!",
  openGraph: {
    title: "Zigsaw Puzzles Relax and Solve Fun Picture Games",
    description:
      "Enjoy zigsaw puzzles that calm the mind and challenge your brain. Piece together beautiful images anytime, anywhere for pure fun!",
    url: "https://jigsawplanet.online/zigsaw-puzzles",
    images: [
      {
        url: "https://jigsawplanet.online/images/riverboat.webp",
        width: 1200,
        height: 630,
        alt: "Play adult jigsaw puzzle on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/zigsaw-puzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Zigsaw Puzzles Relax and Solve Fun Picture Games",
    "description":
      "Enjoy zigsaw puzzles that calm the mind and challenge your brain. Piece together beautiful images anytime, anywhere for pure fun!",
    "url": "https://jigsawplanet.online/zigsaw-puzzles",
    "mainEntity": {
      "@type": "Online Game",
      "name": "game the puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/riverboat.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/riverboat.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/zigsaw-puzzles",
      "playMode": "single player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "game the puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/riverboat.webp",
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
