import React from 'react';

export const metadata = {
  title: "JigsawPlaet Solve, Create & Share Puzzles Online",
  keywords :"easy puzzle,jigsaw puzzle generator,building,beautiful",
  description:
    "Dive into JigsawPlaet—create custom puzzles, challenge friends, and enjoy relaxing breaks with beautiful, interactive jigsaw games",
  openGraph: {
    title: "JigsawPlaet Solve, Create & Share Puzzles Online",
    description:
      "Dive into JigsawPlaet—create custom puzzles, challenge friends, and enjoy relaxing breaks with beautiful, interactive jigsaw games",
    url: "https://jigsawplanet.online/jigsaw-plaet",
    images: [
      {
        url: "https://jigsawplanet.online/images/jigsaw-plaet.webp",
        width: 1200,
        height: 630,
        alt: "Play easy puzzle on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-plaet",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "JigsawPlaet Solve, Create & Share Puzzles Online",
    "description":
      "Dive into JigsawPlaet—create custom puzzles, challenge friends, and enjoy relaxing breaks with beautiful, interactive jigsaw games",
    "url": "https://jigsawplanet.online/jigsaw-plaet",
    "mainEntity": {
      "@type": "Online Game",
      "name": "easy puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "jigsawplanet",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/jigsaw-plaet.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/jigsaw-plaet.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jigsaw-plaet",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "easy puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/jigsaw-plaet.webp",
        "width": 500,
        "height": 500,
      },
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
