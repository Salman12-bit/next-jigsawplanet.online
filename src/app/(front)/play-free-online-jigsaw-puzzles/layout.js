import React from 'react';

export const metadata = {
  title: "Exploring the World of JigsawPuzzles – History, Benefits, and Tips for Enthusiasts",
  keywords :"jigsaw puzzle,jigsaw puzzle jigsaw puzzle",
  description:
    "Dive into the fascinating world of jigsawpuzzles! Learn about their history, benefits, and tips to enhance your puzzle-solving experience. Perfect for enthusiasts!.",
  openGraph: {
    title: "Exploring the World of JigsawPuzzles – History, Benefits, and Tips for Enthusiasts",
    description:
      "Dive into the fascinating world of jigsawpuzzles! Learn about their history, benefits, and tips to enhance your puzzle-solving experience. Perfect for enthusiasts!",
    url: "https://jigsawplanet.online/play-free-online-jigsaw-puzzles",
    images: [
      {
        url: "https://jigsawplanet.online/images/jigsawpuzzles.webp",
        width: 1200,
        height: 630,
        alt: "read this article on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/play-free-online-jigsaw-puzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Exploring the World of JigsawPuzzles – History, Benefits, and Tips for Enthusiasts",
    "description":
      "Dive into the fascinating world of jigsawpuzzles! Learn about their history, benefits, and tips to enhance your puzzle-solving experience. Perfect for enthusiasts!",
    "url": "https://jigsawplanet.online/play-free-online-jigsaw-puzzles",
    "mainEntity": {
      "@type": "Online Game",
      "name": "abc alphabet puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle abc",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/jigsawpuzzles.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/jigsawpuzzles.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/play-free-online-jigsaw-puzzles",
      "playMode": "Single Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
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
