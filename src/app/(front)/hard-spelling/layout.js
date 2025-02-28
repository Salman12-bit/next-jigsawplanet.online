import React from 'react';

export const metadata = {
  title: "Master Hard Spelling Bee Words: Ace the Challenge",
  keywords: "word puzzle solver,puzzle love",
  description:
    "Discover a curated list of word puzzle solver to challenge your mind and boost your vocabulary. Ideal for spelling practice and competitions.",
  openGraph: {
    title: "Master Hard Spelling Bee Words: Ace the Challenge",
    description:
      "Discover a curated list of word puzzle solver to challenge your mind and boost your vocabulary. Ideal for spelling practice and competitions.",
    url: "https://jigsawplanet.online/hard-spelling",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play word puzzle solver",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/hard-spelling",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Master Hard Spelling Bee Words: Ace the Challenge",
    "description":
      "Discover a curated list of word puzzle solver to challenge your mind and boost your vocabulary. Ideal for spelling practice and competitions.",
    "url": "https://jigsawplanet.online/hard-spelling",
    "mainEntity": {
      "@type": "Online Game",
      "name": "word puzzle solver",
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
      "url": "https://jigsawplanet.online/hard-spelling",
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
