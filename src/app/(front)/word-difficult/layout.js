import React from 'react';

export const metadata = {
  title: " Difficult Word Search Puzzles for Brainiacs!",
  keywords: "android word puzzle games,adult word search puzzles",
  description:
    "Challenge your mind with difficult word search puzzles! Perfect for puzzle lovers who want a serious brain workout and hours of fun.",
  openGraph: {
    title: " Difficult Word Search Puzzles for Brainiacs!",
    description:
      "Challenge your mind with difficult word search puzzles! Perfect for puzzle lovers who want a serious brain workout and hours of fun.",
    url: "https://jigsawplanet.online/word-difficult",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play android word puzzle games",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/word-difficult",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": " Difficult Word Search Puzzles for Brainiacs!",
    "description":
      "Challenge your mind with difficult word search puzzles! Perfect for puzzle lovers who want a serious brain workout and hours of fun.",
    "url": "https://jigsawplanet.online/word-difficult",
    "mainEntity": {
      "@type": "Online Game",
      "name": "android word puzzle games",
      "genre": "Action, ",
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
      "url": "https://jigsawplanet.online/word-difficult",
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
