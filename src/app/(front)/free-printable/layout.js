import React from 'react';

export const metadata = {
  title: "Free Printable Word Searches Fun Puzzles to Print Now",
  keywords: "free printable word search,words to free fallin game",
  description:
    "Enjoy free printable word searches for all ages! Perfect for learning, relaxing, or passing time with challenging and fun puzzles.",
  openGraph: {
    title: "Free Printable Word Searches Fun Puzzles to Print Now",
    description:
      "Enjoy free printable word searches for all ages! Perfect for learning, relaxing, or passing time with challenging and fun puzzles.",
    url: "https://jigsawplanet.online/free-printable",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play word puzzle games printable",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/free-printable",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Printable Word Searches Fun Puzzles to Print Now",
    "description":
      "Enjoy free printable word searches for all ages! Perfect for learning, relaxing, or passing time with challenging and fun puzzles.",
    "url": "https://jigsawplanet.online/free-printable",
    "mainEntity": {
      "@type": "Online Game",
      "name": "puzzle",
      "genre": "Action, ",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle",
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
      "url": "https://jigsawplanet.online/free-printable",
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
