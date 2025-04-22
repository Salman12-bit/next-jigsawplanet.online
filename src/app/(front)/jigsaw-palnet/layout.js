import React from 'react';

export const metadata = {
  title: "Jigsaw Palnet Explore Fun & Free Online Puzzles",
  keywords :"planet puzzle jigsaw,jigsaw planet jigsaw puzzles",
  description:
    "Discover Jigsaw Palnet and enjoy free online puzzles that challenge your brain and offer relaxing fun for all ages. Start solving today!",
  openGraph: {
    title: "Jigsaw Palnet Explore Fun & Free Online Puzzles",
    description:
      "Discover Jigsaw Palnet and enjoy free online puzzles that challenge your brain and offer relaxing fun for all ages. Start solving today!",
    url: "https://jigsawplanet.online/jigsaw-palnet",
    images: [
      {
        url: "https://jigsawplanet.online/images/jigsawsand.webp",
        width: 1200,
        height: 630,
        alt: "Play planet puzzle jigsaw on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-palnet",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jigsaw Palnet Explore Fun & Free Online Puzzles",
    "description":
      "Discover Jigsaw Palnet and enjoy free online puzzles that challenge your brain and offer relaxing fun for all ages. Start solving today!",
    "url": "https://jigsawplanet.online/jigsaw-palnet",
    "mainEntity": {
      "@type": "Online Game",
      "name": "planet puzzle jigsaw",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "planet puzzle jigsaw",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/jigsawsand.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/jigsawsand.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jigsaw-palnet",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "planet puzzle jigsaws",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/jigsawsand.webp",
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
