import React from 'react';

export const metadata = {
  title: "Word Hunt Puzzle Game Find Words, Boost Your Brain",
  keywords: "word search puzzles printable hard,word puzzle games printable",
  description:
    "Play the Word Hunt puzzle game to sharpen your mind and expand your vocabulary. A fun and relaxing challenge for all ages!",
  openGraph: {
    title: "Word Hunt Puzzle Game Find Words, Boost Your Brain",
    description:
      "Play the Word Hunt puzzle game to sharpen your mind and expand your vocabulary. A fun and relaxing challenge for all ages!",
    url: "https://jigsawplanet.online/word-hunt",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play word puzzle games printable",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/word-hunt",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Word Hunt Puzzle Game Find Words, Boost Your Brain",
    "description":
      "Play the Word Hunt puzzle game to sharpen your mind and expand your vocabulary. A fun and relaxing challenge for all ages!",
    "url": "https://jigsawplanet.online/word-hunt",
    "mainEntity": {
      "@type": "Online Game",
      "name": "jigsawplanet",
      "genre": "Action, ",
      "publisher": {
        "@type": "Organization",
        "name": "Jigsawplanet",
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
      "url": "https://jigsawplanet.online/word-hunt",
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
