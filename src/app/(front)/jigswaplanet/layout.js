import React from 'react';

export const metadata = {
  title: "Explore Jigswaplanet: Puzzles, Fun & Discovery!",
  keywords :" jigsaw puzzels,dora puzzle",
  description:
    "Step into dora puzzle and enjoy a world of creative puzzles, fun challenges, and endless entertainment for curious minds of all ages.",
  openGraph: {
    title: "Explore Jigswaplanet: Puzzles, Fun & Discovery!",
    description:
      "Step into dora puzzle and enjoy a world of creative puzzles, fun challenges, and endless entertainment for curious minds of all ages.",
    url: "https://jigsawplanet.online/jigswaplanet",
    images: [
      {
        url: "https://jigsawplanet.online/images/dorapuzzle.webp",
        width: 1200,
        height: 630,
        alt: "Play dora puzzle online on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigswaplanet",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Explore Jigswaplanet: Puzzles, Fun & Discovery!",
    "description":
      "Step into dora puzzle and enjoy a world of creative puzzles, fun challenges, and endless entertainment for curious minds of all ages.",
    "url": "https://jigsawplanet.online/jigswaplanet",
    "mainEntity": {
      "@type": "Online Game",
      "name": "dora puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "dora puzzle",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/dorapuzzle.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/dorapuzzle.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jigswaplanet",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "dora puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/dorapuzzle.webp",
        "width": 500,
        "height": 500,
      },
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/dorapuzzle.webp",
      "width": 1200,
      "height": 630,
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
