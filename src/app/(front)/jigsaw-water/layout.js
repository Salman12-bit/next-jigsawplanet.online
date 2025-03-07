import React from 'react';

export const metadata = {
  title: "Explore Planet Puzzle: Fun Challenges Await!",
  keywords :"jisaw planet, puzzles jigsaw planet, online, game",
  description:
    "Dive into jisaw planet and unlock fun brain-teasers that challenge your logic and creativity. Perfect for puzzle lovers of all ages!",
  openGraph: {
    title: "Explore Planet Puzzle: Fun Challenges Await!",
    description:
      "Dive into jisaw planet and unlock fun brain-teasers that challenge your logic and creativity. Perfect for puzzle lovers of all ages!",
    url: "https://jigsawplanet.online/jigsaw-water",
    images: [
      {
        url: "https://jigsawplanet.online/images/homewater.webp",
        width: 1200,
        height: 630,
        alt: "Play puzzles jigsaw planet on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-water",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Explore Planet Puzzle: Fun Challenges Await!",
    "description":
      "Dive into jisaw planet and unlock fun brain-teasers that challenge your logic and creativity. Perfect for puzzle lovers of all ages!",
    "url": "https://jigsawplanet.online/jigsaw-water",
    "mainEntity": {
      "@type": "Online Game",
      "name": "puzzles jigsaw planet",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "puzzles jigsaw planet",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/homewater.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/homewater.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jigsaw-water",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "puzzles jigsaw planet",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/homewater.webp",
        "width": 500,
        "height": 500,
      },
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/homewater.webp",
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
