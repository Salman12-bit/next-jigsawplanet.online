import React from 'react';

export const metadata = {
  title: "Rompecabezas Fun and Challenging Puzzles for All ",
  keywords :"rompecabezas en ingles,rompecabezas gratis",
  description:
    "Enjoy rompecabezas for fun and learning! Solve colorful, challenging puzzles that boost your brain and offer hours of entertainment.",
  openGraph: {
    title: "Rompecabezas Fun and Challenging Puzzles for All ",
    description:
      "Enjoy rompecabezas for fun and learning! Solve colorful, challenging puzzles that boost your brain and offer hours of entertainment.",
    url: "https://jigsawplanet.online/rompecabezas",
    images: [
      {
        url: "https://jigsawplanet.online/images/rompecabezas.webp",
        width: 1200,
        height: 630,
        alt: "Play rompecabezas gratis on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/rompecabezas",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Rompecabezas Fun and Challenging Puzzles for All ",
    "description":
      "Enjoy rompecabezas for fun and learning! Solve colorful, challenging puzzles that boost your brain and offer hours of entertainment.",
    "url": "https://jigsawplanet.online/rompecabezas",
    "mainEntity": {
      "@type": "Online Game",
      "name": "rompecabezas gratis",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "jigsawplanet",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/rompecabezas.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/rompecabezas.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/rompecabezas",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "planet puzzle jigsaws",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/rompecabezas.webp",
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
