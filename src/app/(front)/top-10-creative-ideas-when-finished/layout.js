import React from 'react';

export const metadata = {
  title: "The Ultimate Jigsaw Puzzle Guide Tips, Benefits & Fun",
  keywords: "jigsaw puzzle piece,jigsaw pieces",
  description:
    "Discover how jigsaw puzzles boost brainpower, relieve stress, and bring families together. Learn pro tips to pick, set up, and solve puzzles with ease.",
  openGraph: {
    title: "The Ultimate Jigsaw Puzzle Guide: Tips, Benefits & Fun",
    description:
      "Discover how jigsaw puzzles boost brainpower, relieve stress, and bring families together. Learn pro tips to pick, set up, and solve puzzles with ease.",
    url: "https://jigsawplanet.online/top-10-creative-ideas-when-finished",
    images: [
      {
        url: "https://jigsawplanet.online/images/whenfinished.webp",
        width: 1200,
        height: 630,
        alt: "read this article on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/top-10-creative-ideas-when-finished",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/top-10-creative-ideas-when-finished"
    },
    "headline": "The Ultimate Jigsaw Puzzle Guide: Tips, Benefits & Fun",
    "description":
      "Discover how jigsaw puzzles boost brainpower, relieve stress, and bring families together. Learn pro tips to pick, set up, and solve puzzles with ease.",
    "keywords":
      "jigsaw puzzle tips, puzzle guide, benefits of puzzles, puzzle ideas, puzzle hacks, stress relief games, family puzzles, puzzle brain exercise",
    "image": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/whenfinished.webp",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": "Game Developer",
      "url": "https://jigsawplanet.online/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Puzzle ABC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/whenfinished.webp",
        "width": 500,
        "height": 500
      }
    },
    "datePublished": "2025-07-05",
    "dateModified": "2025-07-23",
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

