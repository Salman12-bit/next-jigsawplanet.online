import React from 'react';

export const metadata = {
  title: "Color by Number Printables to Spark Creative Fun",
  keywords :"color by number free printables,free color by number printables",
  description:
    "Download color by number printables and enjoy a relaxing, creative activity that blends art with simple number matching. Perfect screen-free fun!",
  openGraph: {
    title: "Color by Number Printables to Spark Creative Fun",
    description:
      "Download color by number printables and enjoy a relaxing, creative activity that blends art with simple number matching. Perfect screen-free fun!",
    url: "https://jigsawplanet.online/number-printables",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play free color by number printables",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/number-printables",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Color by Number Printables to Spark Creative Fun",
    "description":
      "Download color by number printables and enjoy a relaxing, creative activity that blends art with simple number matching. Perfect screen-free fun!",
    "url": "https://jigsawplanet.online/number-printables",
    "mainEntity": {
      "@type": "Online Game",
      "name": "puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle",
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
      "url": "https://jigsawplanet.online/number-printables",
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
