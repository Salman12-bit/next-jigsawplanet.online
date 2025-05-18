import React from 'react';

export const metadata = {
  title: "ABC Puzzle Game Fun Alphabet Learning Activity",
  keywords: "alphabet puzzle games,alphabet puzzle for kids",
  description:
    "Try the alphabet puzzle for kids to help kids learn letters while playing! A colorful, hands-on way to boost early reading and recognition skills.",
  openGraph: {
    title: "ABC Puzzle Game Fun Alphabet Learning Activity",
    description:
      "Try the alphabet puzzle for kids to help kids learn letters while playing! A colorful, hands-on way to boost early reading and recognition skills.",
    url: "https://jigsawplanet.online/best-alphabet-puzzle-games",
    images: [
      {
        url: "https://jigsawplanet.online/images/abcpuzzle.webp",
        width: 1200,
        height: 630,
        alt: "read this article on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/best-alphabet-puzzle-games",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/best-alphabet-puzzle-games"
    },
    "headline": "ABC Puzzle Game Fun Alphabet Learning Activity",
    "description":
      "Try the alphabet puzzle for kids to help kids learn letters while playing! A colorful, hands-on way to boost early reading and recognition skills.",
    "image": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/abcpuzzle.webp",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": "Game developer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "puzzle abc",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/abcpuzzle.webp",
        "width": 500,
        "height": 500
      }
    },
    "datePublished": "2024-05-18", 
    "dateModified": "2024-05-18" 
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
