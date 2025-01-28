import React from 'react';

export const metadata = {
  title: "JigsawPlanet account Information",
  description: "This is the register page for JigsawPlanet.",
  openGraph: {
    title: "JigsawPlanet account",
    description: "Register to access JigsawPlanet and start your puzzle journey.",
    url: "https://jigsawplanet.online/register",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Register to JigsawPlanet and start your puzzle journey",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/register",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "JigsawPlanet account",
    "description":
      "Register to access JigsawPlanet and start your puzzle journey. Create an account to manage puzzles, track progress, and customize your profile.",
    "url": "https://jigsawplanet.online/register",
    "mainEntity": {
      "@type": "WebApplication",
      "name": "JigsawPlanet Registration",
      "description":
        "The registration portal for creating your JigsawPlanet account to manage puzzles and track progress.",
      "applicationCategory": "Game",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://jigsawplanet.online/register",
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
          "name": "Register",
          "item": "https://jigsawplanet.online/register",
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
