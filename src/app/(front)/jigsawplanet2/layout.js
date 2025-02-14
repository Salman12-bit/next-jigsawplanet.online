import React from 'react';

export const metadata = {
  title: "ABC Puzzles: Fun and Educational Games for Kids",
  keywords :"a b c puzzle,abc puzzle online",
  description:
    "Discover ABC puzzles that make learning letters exciting! Perfect for kids to improve spelling, memory, and problem-solving skills in a fun way.",
  openGraph: {
    title: "ABC Puzzles: Fun and Educational Games for Kids",
    description:
      "Discover ABC puzzles that make learning letters exciting! Perfect for kids to improve spelling, memory, and problem-solving skills in a fun way.",
    url: "https://jigsawplanet.online/jigsawplanet2",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play abc puzzle online on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsawplanet2",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "a b c puzzle - Play Online on jigsawplanet",
    "description":
      "Discover ABC puzzles that make learning letters exciting! Perfect for kids to improve spelling, memory, and problem-solving skills in a fun way.",
    "url": "https://jigsawplanet.online/jigsawplanet2",
    "mainEntity": {
      "@type": "Online Game",
      "name": "a b c puzzle",
      "description":
        "Discover ABC puzzles that make learning letters exciting! Perfect for kids to improve spelling, memory, and problem-solving skills in a fun way.",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "a b c puzzle",
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
      "url": "https://jigsawplanet.online/jigsawplanet2",
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
