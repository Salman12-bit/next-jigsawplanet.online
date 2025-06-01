import React from 'react';

export const metadata = {
  title: " Explore Aalphabet Magnets: Creative Play & Learning!",
  keywords :"flight alphebet,pictures of bubble letters",
  description:
    "Discover the magic of flight alphebet for creative play! Build words, spark imagination, and enhance learning with every magnetic letter piece.",
  openGraph: {
    title: " Explore Aalphabet Magnets: Creative Play & Learning!",
    description:
      "Discover the magic of flight alphebet for creative play! Build words, spark imagination, and enhance learning with every magnetic letter piece.",
    url: "https://jigsawplanet.online/alphabet-letter",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Enjoy pictures of bubble letters on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/alphabet-letter",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": " Explore Aalphabet Magnets: Creative Play & Learning!",
    "description":
      "Discover the magic of flight alphebet for creative play! Build words, spark imagination, and enhance learning with every magnetic letter piece.",
    "url": "https://jigsawplanet.online/alphabet-letter",
    "mainEntity": {
      "@type": "Online Game",
      "name": " pictures of bubble letters",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": " pictures of bubble letters",
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
      "url": "https://jigsawplanet.online/alphabet-letter",
      "playMode": "Single Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
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
