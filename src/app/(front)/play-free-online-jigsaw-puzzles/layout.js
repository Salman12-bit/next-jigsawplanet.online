import React from 'react';

export const metadata = {
  title: "Exploring the World of JigsawPuzzles – History, Benefits, and Tips for Enthusiasts",
  keywords: "jigsaw puzzle,jigsaw puzzle jigsaw puzzle",
  description:
    "Dive into the fascinating world of jigsawpuzzles! Learn about their history, benefits, and tips to enhance your puzzle-solving experience. Perfect for enthusiasts!",
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
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/play-free-online-jigsaw-puzzles"
    },
    "headline": "Exploring the World of JigsawPuzzles – History, Benefits, and Tips for Enthusiasts",
    "description": "Dive into the fascinating world of jigsawpuzzles! Learn about their history, benefits, and tips to enhance your puzzle-solving experience. Perfect for enthusiasts!",
    "image": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/jigsawpuzzles.webp",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": "Game developer" 
    },
    "publisher": {
      "@type": "Organization",
      "name": "jigsaw puzzle jigsaw puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/jigsawpuzzles.webp",
        "width": 500,
        "height": 500
      }
    },
    "datePublished": "2024-04-029", 
    "dateModified": "2024-05-04" 
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
