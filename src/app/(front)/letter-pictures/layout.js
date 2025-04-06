import React from 'react';

export const metadata = {
  title: "Letter I Pictures: Fun Images for Early Learners",
  keywords :"bingo slide cards,abc pic",
  description:
    "Discover bingo slide cards to help kids learn the alphabet! Fun and colorful images make learning letters easy and exciting.",
  openGraph: {
    title: "Letter I Pictures: Fun Images for Early Learners",
    description:
      "Discover bingo slide cards to help kids learn the alphabet! Fun and colorful images make learning letters easy and exciting.",
    url: "https://jigsawplanet.online/letter-pictures",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play bingo slide cards on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/letter-pictures",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Letter I Pictures: Fun Images for Early Learners",
    "description":
      "Discover bingo slide cards to help kids learn the alphabet! Fun and colorful images make learning letters easy and exciting.",
    "url": "https://jigsawplanet.online/letter-pictures",
    "mainEntity": {
      "@type": "Online Game",
      "name": "bingo slide cards",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "bingo slide cards",
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
      "url": "https://jigsawplanet.online/letter-pictures",
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
