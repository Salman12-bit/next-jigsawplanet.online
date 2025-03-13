import React from 'react';

export const metadata = {
  title: "Play Slider Game: Fun and Challenging Puzzles!",
  keywords :"picture to puzzle,puzzlee,abc",
  description:
    " Test your skills with a picture to puzzle! Solve tricky tile puzzles, boost your logic, and enjoy hours of brain-teasing fun. Play now!",
  openGraph: {
    title: "Play Slider Game: Fun and Challenging Puzzles!",
    description:
      " Test your skills with a picture to puzzle! Solve tricky tile puzzles, boost your logic, and enjoy hours of brain-teasing fun. Play now!",
    url: "https://jigsawplanet.online/slider-game",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play picture to puzzle on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/slider-game",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Play Slider Game: Fun and Challenging Puzzles!",
    "description":
      " Test your skills with a picture to puzzle! Solve tricky tile puzzles, boost your logic, and enjoy hours of brain-teasing fun. Play now!",
    "url": "https://jigsawplanet.online/slider-game",
    "mainEntity": {
      "@type": "Online Game",
      "name": "picture to puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "picture to puzzle",
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
      "url": "https://jigsawplanet.online/slider-game",
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
