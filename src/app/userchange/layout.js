import React from 'react';

export const metadata = {
  title: "User Change - jigsawPlanet",
  description:
    "Welcome to jigsawPlanet - the ultimate platform for puzzle lovers! Explore, play, and enjoy our vast selection of online jigsaw puzzles.",
  openGraph: {
    title: "User Change - jigsawPlanet",
    description:
      "Discover a world of puzzles on JigsawPlanet! Start solving and sharing puzzles today, and join a community of puzzle enthusiasts.",
    url: "https://jigsawplanet.online/userchange",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Explore and play puzzles on jigsawPlanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/userchange",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "User Change - jigsawPlanet",
    "description":
      "Change your role on JigsawPlanet to enjoy different features and manage your puzzle preferences.",
    "url": "https://jigsawplanet.online/userchange",
    "mainEntity": {
      "@type": "WebApplication",
      "name": "jigsawPlanet User Change",
      "description":
        "A page where you can change your role to access different features on JigsawPlanet.",
      "applicationCategory": "Game",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://jigsawplanet.online/userchange",
      },
    },
    "publisher": {
      "@type": "Organization",
      "name": "JigsawPlanet",
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
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://jigsawplanet.online",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "User Change",
          "item": "https://jigsawplanet.online/userchange",
        },
      ],
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
