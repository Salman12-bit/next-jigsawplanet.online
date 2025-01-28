import React from 'react';

export const metadata = {
  title: "Planet jigsaw: Endless Fun with Free Online",
  keywords :"puzzle men,planet puzzle online,jigsaw planet puzzles",
  description:
    "Explore planet jigsaw and enjoy solving, sharing, and creating puzzle men online. Perfect for puzzle lovers of all ages to challenge their minds",
  openGraph: {
    title: "Free puzzle men - Play Online",
    description:
      "Explore puzzle men and enjoy solving, sharing, and creating planet jigsaw online. Perfect for puzzle lovers of all ages to challenge their minds",
    url: "https://jigsawplanet.online/planet-jigsaw",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play planet men Game online on jigsaw planet puzzles",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/planet-jigsaw",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "puzzle men - Play Online on word puzzle",
    "description":
      "Dive into the thrilling puzzle men on Jigsaw Planet. Enjoy action-packed gameplay, puzzles, and challenges!",
    "url": "https://jigsawplanet.online/planet-jigsaw",
    "mainEntity": {
      "@type": "Online Game",
      "name": "puzzle men",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle men",
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
      "url": "https://jigsawplanet.online/planet-jigsaw",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jigsaw Planet",
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
      {/* Render the children */}
      {children}

      {/* JSON-LD Script for Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
