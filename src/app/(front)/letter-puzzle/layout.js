import React from 'react';

export const metadata = {
  title: "Fun Letter Puzzle: Boost Your Brain Now!",
  keywords :"puzzle a b c,letter puzzles, puzzles",
  description:
    "Solve exciting letter puzzles and boost your vocabulary! Enjoy a fun challenge that sharpens your mind with every word you solve.",
  openGraph: {
    title: "Fun Letter Puzzle: Boost Your Brain Now!",
    description:
      "Solve exciting letter puzzles and boost your vocabulary! Enjoy a fun challenge that sharpens your mind with every word you solve.",
    url: "https://jigsawplanet.online/letter-puzzle",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play puzzle a b c game on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/letter-puzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Fun Letter Puzzle: Boost Your Brain Now!",
    "description":
      "Solve exciting letter puzzles and boost your vocabulary! Enjoy a fun challenge that sharpens your mind with every word you solve.",
    "url": "https://jigsawplanet.online/letter-puzzle",
    "mainEntity": {
      "@type": "Online Game",
      "name": "puzzle a b c",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle a b c",
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
      "url": "https://jigsawplanet.online/letter-puzzle",
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
