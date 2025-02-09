import React from 'react';

export const metadata = {
  title: "Jig saw planet: Your Go-To Spot for Free Online game",
  keywords :"online puzzles, jigsaw puzzles play, free puzzle",
  description:
    "Dive into Jig saw planet and enjoy solving, creating, and sharing free puzzle online. Perfect for jigsa planet of all ages and skill levels.",
  openGraph: {
    title: "Jig saw planet: Your Go-To Spot for Free Online game",
    description:
      "Dive into Jig saw planet and enjoy solving, creating, and sharing free puzzle online. Perfect for jigsa planet of all ages and skill levels.",
    url: "https://jigsawplanet.online/jigsaw-puzzle",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzle3.webp",
        width: 1200,
        height: 630,
        alt: "Play jigsa planet Game online on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-puzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "free puzzle - Play Online on word puzzle",
    "description":
      "Dive into Jig saw planet and enjoy solving, creating, and sharing free puzzle online. Perfect for jigsa planet of all ages and skill levels.",
    "url": "https://jigsawplanet.online/jigsaw-puzzle",
    "mainEntity": {
      "@type": "Online Game",
      "name": "free puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "free puzzle",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/Puzzle3.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/Puzzle3.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jigsaw-puzzle",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "free puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/Puzzle3.webp",
        "width": 500,
        "height": 500,
      },
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/Puzzle3.webp",
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
