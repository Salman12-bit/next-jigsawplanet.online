import React from 'react';

export const metadata = {
  title: "Alphabet Puzzle Game: Fun Learning for Mans & Womens",
  keywords :"abcdefghijklmnopqrstuvwxyz,abcdefghijklmnopqrstuvwxyz game",
  description:
    "Play an engaging alphabet puzzle game to boost letter recognition and spelling skills. Perfect for kids and adults to learn while having fun!",
  openGraph: {
    title: "Alphabet Puzzle Game: Fun Learning for Mans & Womens",
    description:
      "Play an engaging alphabet puzzle game to boost letter recognition and spelling skills. Perfect for kids and adults to learn while having fun!",
    url: "https://jigsawplanet.online/jigsawplanet3",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play abcdefghijklmnopqrstuvwxyz game on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsawplanet3",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "abcdefghijklmnopqrstuvwxyz game - Play Online on jigsawplanet",
    "description":
      "Play an engaging alphabet puzzle game to boost letter recognition and spelling skills. Perfect for kids and adults to learn while having fun!",
    "url": "https://jigsawplanet.online/jigsawplanet3",
    "mainEntity": {
      "@type": "Online Game",
      "name": "abcdefghijklmnopqrstuvwxyz game",
      "description":
        "Play an engaging alphabet puzzle game to boost letter recognition and spelling skills. Perfect for kids and adults to learn while having fun!",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "abcdefghijklmnopqrstuvwxyz",
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
      "url": "https://jigsawplanet.online/jigsawplanet3",
      "playMode": "Single Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/Puzzlle.webp",
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
