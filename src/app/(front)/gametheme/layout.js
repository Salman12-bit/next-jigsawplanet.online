import React from 'react';

export const metadata = {
  title: "Game Theme - Customize Your Look on Jigsaw Planet",
  description:
    "Explore a variety of game themes on Jigsaw Planet. Choose from unique themes to enhance your gameplay experience with personalized visuals.",
  openGraph: {
    title: "Game Theme - Jigsaw Planet",
    description:
      "Discover and select game themes to personalize your Jigsaw Planet experience. From classic styles to modern designs, find the perfect look for your game.",
    url: "https://jigsawplanet.online/gametheme",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Explore game themes on Jigsaw Planet to personalize your game",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/gametheme",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Game Theme - Customize Your Look on Jigsaw Planet",
    "description":
      "Explore a variety of game themes on Jigsaw Planet. Choose from unique themes to enhance your gameplay experience with personalized visuals.",
    "url": "https://jigsawplanet.online/gametheme",
    "mainEntity": {
      "@type": "CollectionPage",
      "name": "Game Themes Collection",
      "description":
        "Discover and select game themes to personalize your Jigsaw Planet experience. From classic styles to modern designs, find the perfect look for your game.",
      "hasPart": [
        {
          "@type": "CreativeWork",
          "name": "Classic Game Theme",
          "description": "A timeless and elegant look for your gameplay.",
          "url": "https://jigsawplanet.online/gametheme/classic",
        },
        {
          "@type": "CreativeWork",
          "name": "Modern Game Theme",
          "description": "A sleek and contemporary design for a fresh gaming experience.",
          "url": "https://jigsawplanet.online/gametheme/modern",
        },
        {
          "@type": "CreativeWork",
          "name": "Customizable Game Theme",
          "description": "Create a personalized theme that matches your style.",
          "url": "https://jigsawplanet.online/gametheme/custom",
        },
      ],
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
