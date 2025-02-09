import React from 'react';

export const metadata = {
  title: "Explore Alphabet Puzzles: Unlock Your Word Skills",
  keywords :"alphabet slider puzzle,alphabet sliders, puzzles",
  description:
    "Discover the fun of alphabet puzzles that boost vocabulary and challenge your brain. Enjoy creative word games for all ages!",
  openGraph: {
    title: "Explore Alphabet Puzzles: Unlock Your Word Skills",
    description:
      "Discover the fun of alphabet puzzles that boost vocabulary and challenge your brain. Enjoy creative word games for all ages!",
    url: "https://jigsawplanet.online/alphabet-puzzles",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play alphabet slider puzzle game on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/alphabet-puzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Explore Alphabet Puzzles: Unlock Your Word Skills",
    "description":
      "Discover the fun of alphabet puzzles that boost vocabulary and challenge your brain. Enjoy creative word games for all ages!",
    "url": "https://jigsawplanet.online/alphabet-puzzles",
    "mainEntity": {
      "@type": "Online Game",
      "name": "Explore Alphabet Puzzles: Unlock Your Word Skills",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "alphabet sliders",
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
      "url": "https://jigsawplanet.online/alphabet-puzzles",
      "playMode": "Single Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "alphabet sliders,",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/Puzzlle.webp",
        "width": 500,
        "height": 500,
      },
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
