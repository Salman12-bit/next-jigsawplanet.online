import React from 'react';

export const metadata = {
  title: "Alphabet Games for Kids Fun Learning Activities",
  keywords :"alphabet game categories,alphabet games online",
  description:
    "Explore alphabet games for kids that make learning letters fun and easy! Boost early reading skills with engaging, hands-on activities.",
  openGraph: {
    title: "Alphabet Games for Kids Fun Learning Activities",
    description:
      "Explore alphabet games for kids that make learning letters fun and easy! Boost early reading skills with engaging, hands-on activities.",
    url: "https://jigsawplanet.online/alphabet-game",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play alphabet game categories",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/alphabet-game",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Alphabet Games for Kids Fun Learning Activities",
    "description":
      "Explore alphabet games for kids that make learning letters fun and easy! Boost early reading skills with engaging, hands-on activities.",
    "url": "https://jigsawplanet.online/alphabet-game",
    "mainEntity": {
      "@type": "Online Game",
      "name": "alphabet game categories",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "alphabet game categories",
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
      "url": "https://jigsawplanet.online/alphabet-game",
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
