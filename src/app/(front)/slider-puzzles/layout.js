import React from 'react';

export const metadata = {
  title: "Slide Through Slider Puzzles: Fun Brain Teasers",
  keywords :"slider puzzle,rosetta stone puzzle",
  description:
    "Challenge your mind with slider puzzle that blend fun and strategy. Enjoy brain-teasing challenges to boost your problem-solving skills!",
  openGraph: {
    title: "Slide Through Slider Puzzles: Fun Brain Teasers",
    description:
      "Challenge your mind with slider puzzle that blend fun and strategy. Enjoy brain-teasing challenges to boost your problem-solving skills!",
    url: "https://jigsawplanet.online/slider-puzzles",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play rosetta stone puzzle on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/slider-puzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Slide Through Slider Puzzles: Fun Brain Teasers",
    "description":
      "Challenge your mind with slider puzzle that blend fun and strategy. Enjoy brain-teasing challenges to boost your problem-solving skills!",
    "url": "https://jigsawplanet.online/slider-puzzles",
    "mainEntity": {
      "@type": "Online Game",
      "name": "rosetta stone puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "rosetta stone puzzle",
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
      "url": "https://jigsawplanet.online/slider-puzzles",
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
