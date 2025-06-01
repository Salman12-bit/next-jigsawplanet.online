import React from 'react';

export const metadata = {
  title: "Discover Planet Jigsaws: Fun Puzzles Await!",
  keywords :"jigsaw plane,jigsaw plant,eiffel jigsaws online, eiffel",
  description:
    " Explore planet jigsaws and piece together your puzzle skills! Enjoy a mix of challenging and entertaining jigsaw puzzles for a fun brain workout.",
  openGraph: {
    title: "Discover Planet Jigsaws: Fun Puzzles Await!",
    description:
      " Explore planet jigsaws and piece together your puzzle skills! Enjoy a mix of challenging and entertaining jigsaw puzzles for a fun brain workout.",
    url: "https://jigsawplanet.online/jigsaw-eiffel",
    images: [
      {
        url: "https://jigsawplanet.online/images/eiffel.webp",
        width: 1200,
        height: 630,
        alt: "Play jigsaw plane online on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-eiffel",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Discover Planet Jigsaws: Fun Puzzles Await!",
    "description":
      " Explore planet jigsaws and piece together your puzzle skills! Enjoy a mix of challenging and entertaining jigsaw puzzles for a fun brain workout.",
    "url": "https://jigsawplanet.online/jigsaw-eiffel",
    "mainEntity": {
      "@type": "Online Game",
      "name": "eiffel jigsaws online",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "eiffel jigsaws online",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/eiffel.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/eiffel.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jigsaw-eiffel",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "childrens jigsaws online",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/eiffel.webp",
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
