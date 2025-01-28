import React from 'react';

export const metadata = {
  title: "Change Role - jigsawPlanet",
  description:
    "Welcome to jigsawPlanet - the ultimate platform for puzzle lovers! Explore, play, and enjoy our vast selection of online jigsaw puzzles.",
  openGraph: {
    title: "Change Role - jigsawPlanet",
    description:
      "Discover a world of puzzles on JigsawPlanet! Start solving and sharing puzzles today, and join a community of puzzle enthusiasts.",
    url: "https://jigsawplanet.online/userprofile",
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
    canonical: "https://jigsawplanet.online/login",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Change Role - jigsawPlanet",
    "description":
      "Change your role on JigsawPlanet to enjoy different features and manage your puzzle preferences.",
    "url": "https://jigsawplanet.online/userprofile",
    "mainEntity": {
      "@type": "WebApplication",
      "name": "jigsawPlanet Change Role",
      "description":
        "A page where you can change your role to access different features on JigsawPlanet.",
      "applicationCategory": "Game",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://jigsawplanet.online/userprofile",
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
          "name": "Change Role",
          "item": "https://jigsawplanet.online/userprofile",
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
