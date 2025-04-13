import React from 'react';

export const metadata = {
  title: "Puzzle Slider: Fun Tile Game to Boost Your Brain ",
  keywords :"abc slider puzzle,slide puzzle solver",
  description:
    "Try the puzzle slider game! Move tiles to solve each challenge while improving focus, logic, and problem-solving skills. Fun for all ages!",
  openGraph: {
    title: "Puzzle Slider: Fun Tile Game to Boost Your Brain ",
    description:
      "Try the puzzle slider game! Move tiles to solve each challenge while improving focus, logic, and problem-solving skills. Fun for all ages!",
    url: "https://jigsawplanet.online/puzzleslider",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play slide puzzle solver on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/puzzleslider",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Puzzle Slider: Fun Tile Game to Boost Your Brain",
    "description":
      "Try the puzzle slider game! Move tiles to solve each challenge while improving focus, logic, and problem-solving skills. Fun for all ages!",
    "url": "https://jigsawplanet.online/puzzleslider",
    "mainEntity": {
      "@type": "Online Game",
      "name": "slide puzzle solver",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "slide puzzle solver",
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
      "url": "https://jigsawplanet.online/puzzleslider",
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
