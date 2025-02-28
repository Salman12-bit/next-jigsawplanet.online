import React from 'react';

export const metadata = {
  title: " Unlock Jigswa Planet: Your Digital Adventure Awaits",
  keywords :"gratuit,planet jigsaw puzzle,place",
  description:
    " Dive into the world of Jigswa Planet where technology meets fun. Experience a universe of digital creativity and endless discovery.",
  openGraph: {
    title: " Unlock Jigswa Planet: Your Digital Adventure Awaits",
    description:
      " Dive into the world of Jigswa Planet where technology meets fun. Experience a universe of digital creativity and endless discovery.",
    url: "https://jigsawplanet.online/jigsaw-place",
    images: [
      {
        url: "https://jigsawplanet.online/images/place.webp",
        width: 1200,
        height: 630,
        alt: "Play planet jigsaw puzzle on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-place",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": " Unlock Jigswa Planet: Your Digital Adventure Awaits",
    "description":
      "Dive into the world of Jigswa Planet where technology meets fun. Experience a universe of digital creativity and endless discovery.",
    "url": "https://jigsawplanet.online/jigsaw-place",
    "mainEntity": {
      "@type": "Online Game",
      "name": "planet jigsaw puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "planet jigsaw puzzle",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/place.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/place.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jigsaw-place",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "planet jigsaw puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/place.webp",
        "width": 500,
        "height": 500,
      },
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/place.webp",
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
