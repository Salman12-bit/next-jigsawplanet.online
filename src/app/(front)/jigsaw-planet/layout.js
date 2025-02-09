import React from 'react';

export const metadata = {
  title: "ABC Puzzle: Fun and Educational Games for All Ages",
  keywords :"abc games puzzle,alphabet",
  description:
    "Explore ABC puzzles that make learning fun! Perfect for kids and adults to boost memory, spelling, and problem-solving skills in an engaging way.",
  openGraph: {
    title: "ABC Puzzle: Fun and Educational Games for All Ages",
    description:
      "Explore ABC puzzles that make learning fun! Perfect for kids and adults to boost memory, spelling, and problem-solving skills in an engaging way.",
    url: "https://jigsawplanet.online/jigsaw-planet",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play abc games puzzle on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-planet",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "abc games puzzle - Play Online on jigsawplanet",
    "description":
      "Explore ABC puzzles that make learning fun! Perfect for kids and adults to boost memory, spelling, and problem-solving skills in an engaging way.",
    "url": "https://jigsawplanet.online/jigsaw-planet",
    "mainEntity": {
      "@type": "Online Game",
      "name": "abc games puzzle",
      "description":
        "Explore ABC puzzles that make learning fun! Perfect for kids and adults to boost memory, spelling, and problem-solving skills in an engaging way.",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "abc games puzzle",
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
      "url": "https://jigsawplanet.online/jigsaw-planet",
      "playMode": "Single Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "abc games puzzle",
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
