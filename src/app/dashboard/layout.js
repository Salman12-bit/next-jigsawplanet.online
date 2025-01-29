import React from 'react';

export const metadata = {
  title: "JigsawPlanet post-article",
  description:
    "Access your personal post-article on JigsawPlanet. Manage puzzles, track progress, and customize your profile.",
  openGraph: {
    title: "JigsawPlanet post-article",
    description:
      "Explore your JigsawPlanet post-article to manage puzzles, view progress, and customize your experience.",
    url: "https://jigsawplanet.online/poast-article",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "View your personalized post-article on JigsawPlanet to track and manage puzzles",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/poast-article",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "JigsawPlanet post-article",
    "description":
      "Access your personal post-article on JigsawPlanet. Manage puzzles, track progress, and customize your profile.",
    "url": "https://jigsawplanet.online/poast-article",
    "mainEntity": {
      "@type": "CollectionPage",
      "name": "User post-article",
      "about": "A personalized area for managing puzzles, tracking achievements, and customizing the JigsawPlanet experience.",
      "hasPart": [
        {
          "@type": "CreativeWork",
          "name": "Profile Customization",
          "description": "Customize your user profile for a tailored experience.",
          "url": "https://jigsawplanet.online/images/Puzzlle.webp",
        },
      ],
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
          "name": "post-article",
          "item": "https://jigsawplanet.online/poast-article",
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
