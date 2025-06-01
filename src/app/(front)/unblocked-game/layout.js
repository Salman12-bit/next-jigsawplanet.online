import React from 'react';

export const metadata = {
  title: "2048 Cupcakes Unblocked Sweet Puzzle Fun Anytime",
  keywords :"2048 unblocked games,2048 unblocked",
  description:
    "Play 2048 Cupcakes unblocked and enjoy addictive puzzle fun! Combine cupcakes and beat the game without restrictions anywhere.",
  openGraph: {
    title: "2048 Cupcakes Unblocked Sweet Puzzle Fun Anytime",
    description:
      "Play 2048 Cupcakes unblocked and enjoy addictive puzzle fun! Combine cupcakes and beat the game without restrictions anywhere.",
    url: "https://jigsawplanet.online/unblocked-game",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play on jigsawpalnet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/unblocked-game",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "2048 Cupcakes Unblocked Sweet Puzzle Fun Anytime",
    "description":
      "Play 2048 Cupcakes unblocked and enjoy addictive puzzle fun! Combine cupcakes and beat the game without restrictions anywhere.",
    "url": "https://jigsawplanet.online/unblocked-game",
    "mainEntity": {
      "@type": "Online Game",
      "name": "puzzle",
      "genre": "Action, Puzzle",
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
      "url": "https://jigsawplanet.online/unblocked-game",
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
