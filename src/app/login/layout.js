import React from 'react';

export const metadata = {
  title: "JigsawPlanet sign-in Information",
  keywords : "puzzle journey,",
  description: "This is the sign-in page for JigsawPlanet.",
  openGraph: {
    title: "JigsawPlanet sign-in",
    description: "Log in to access JigsawPlanet and start your puzzle journey.",
    url: "https://jigsawplanet.online/sign-in",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "sign-in to JigsawPlanet and start your puzzle journey",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/sign-in",
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
    "url": "https://jigsawplanet.online/sign-in",
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
        "url": "https://jigsawplanet.online/sign-in",
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
          "item": "https://jigsawplanet.online/sign-in",
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
