import React from 'react';

export const metadata = {
  title: "JigsawPlanet Login Information",
  keywords : "puzzle journey,",
  description: "This is the login page for JigsawPlanet.",
  openGraph: {
    title: "JigsawPlanet Login",
    description: "Log in to access JigsawPlanet and start your puzzle journey.",
    url: "https://jigsawplanet.online/login",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Login to JigsawPlanet and start your puzzle journey",
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
    "name": "JigsawPlanet Login",
    "description":
      "Log in to access JigsawPlanet and start your puzzle journey. Manage your puzzles, track progress, and customize your profile.",
    "url": "https://jigsawplanet.online/login",
    "mainEntity": {
      "@type": "WebApplication",
      "name": "JigsawPlanet Login",
      "description": "The login portal for accessing your JigsawPlanet account to manage puzzles and track progress.",
      "applicationCategory": "Game",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://jigsawplanet.online/login",
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
          "name": "Login",
          "item": "https://jigsawplanet.online/login",
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
