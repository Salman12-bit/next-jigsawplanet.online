import React from 'react';

export const metadata = {
  title: "Interactive Jigsaw Planet – Play Engaging Online Puzzle Games",
  keywords: "jigsaw piece puzzle,jigsaw frame",
  description:
    "Enjoy the Interactive Jigsaw Planet experience with free, fun, and challenging online jigsaw puzzles. Perfect for all ages and skill levels – start solving now!",
  openGraph: {
    title: "Interactive Jigsaw Planet – Play Engaging Online Puzzle Games",
    description:
      "Enjoy the Interactive Jigsaw Planet experience with free, fun, and challenging online jigsaw puzzles. Perfect for all ages and skill levels – start solving now!",
    url: "https://jigsawplanet.online/A-digital-haven-for-puzzle-follower",
    images: [
      {
        url: "https://jigsawplanet.online/images/interactivepuzzle.webp",
        width: 1200,
        height: 630,
        alt: "read this article on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/A-digital-haven-for-puzzle-follower",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/A-digital-haven-for-puzzle-follower"
    },
    "headline": "Interactive Jigsaw Planet – Play Engaging Online Puzzle Games",
    "description":
      "Enjoy the Interactive Jigsaw Planet experience with free, fun, and challenging online jigsaw puzzles. Perfect for all ages and skill levels – start solving now!",
    "keywords":
      "Interactive jigsaw planet tips, puzzle guide, benefits of interactive puzzles, puzzle ideas, puzzle hacks, stress relief games, family puzzles",
    "image": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/interactivepuzzle.webp",
      "width": 1200,
      "height": 630
    },
    "publisher": {
      "@type": "Organization",
      "name": "Puzzle ABC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/interactivepuzzle.webp",
        "width": 500,
        "height": 500
      }
    },
    "datePublished": "2025-07-05",
    "dateModified": "2024-07-23",
    "articleSection": "Puzzle Tips, Brain Health, Family Activities, Mind Games",
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

