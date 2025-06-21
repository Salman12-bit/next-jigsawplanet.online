import React from 'react';

export const metadata = {
  title: "Multiplayer Jigsaw Puzzles Solve Together Online",
  keywords: "jigsaw puzzle online,jigsaw piece",
  description:
    "Play multiplayer jigsaw puzzles online with friends or family! Team up to piece together fun, beautiful images in real-time from anywhere.",
  openGraph: {
    title: "Multiplayer Jigsaw Puzzles Solve Together Online",
    description:
      "Play multiplayer jigsaw puzzles online with friends or family! Team up to piece together fun, beautiful images in real-time from anywhere.",
    url: "https://jigsawplanet.online/multiplayer-connecting-people",
    images: [
      {
        url: "https://jigsawplanet.online/images/multiplayer.webp",
        width: 1200,
        height: 630,
        alt: "read this article on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/multiplayer-connecting-people",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/multiplayer-connecting-people"
    },
    "headline": "Multiplayer Jigsaw Puzzles Solve Together Online",
    "description":
      "Play multiplayer jigsaw puzzles online with friends or family! Team up to piece together fun, beautiful images in real-time from anywhere.",
    "image": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/multiplayer.webp",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": "Game developer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/multiplayer.webp",
        "width": 500,
        "height": 500
      }
    },
    "datePublished": "2024-05-10", 
    "dateModified": "2024-05-10" 
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
