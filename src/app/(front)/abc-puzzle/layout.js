import React from 'react';

export const metadata = {
  title: "Explore ABCDEFGHIJKLMNOP Game: Brainy Fun for Everyone",
  keywords :"puzzle abc,abc alphabet puzzle, puzzle",
  description:
    "Dive into the ABCDEFGHIJKLMNOP Game, where letters meet fun challenges! Perfect for brain workouts and playful learning sessions.",
  openGraph: {
    title: "Explore ABCDEFGHIJKLMNOP Game: Brainy Fun for Everyone",
    description:
      "Dive into the ABCDEFGHIJKLMNOP Game, where letters meet fun challenges! Perfect for brain workouts and playful learning sessions.",
    url: "https://jigsawplanet.online/abc-puzzle",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play abc alphabet puzzle game on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/abc-puzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Explore ABCDEFGHIJKLMNOP Game: Brainy Fun for Everyone",
    "description":
      "Discover the fun of alphabet puzzles that boost vocabulary and challenge your brain. Enjoy creative word games for all ages!",
    "url": "https://jigsawplanet.online/abc-puzzle",
    "mainEntity": {
      "@type": "Online Game",
      "name": "abc alphabet puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle abc",
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
      "url": "https://jigsawplanet.online/abc-puzzle",
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
