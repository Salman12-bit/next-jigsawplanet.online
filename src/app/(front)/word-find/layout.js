import React from 'react';

export const metadata = {
  title: " Play Word Find Puzzle: Fun Brain-Boosting Challenge",
  keywords: "immaculate puzzle,cross word puzzle maker,immaculate",
  description:
    "Sharpen your mind with a immaculate puzzle! Search, discover, and solve exciting word challenges to improve vocabulary and have fun.",
  openGraph: {
    title: " Play Word Find Puzzle: Fun Brain-Boosting Challenge",
    description:
      "Sharpen your mind with a immaculate puzzle! Search, discover, and solve exciting word challenges to improve vocabulary and have fun.",
    url: "https://jigsawplanet.online/word-find",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play cross word puzzle maker game",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/word-find",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": " Play Word Find Puzzle: Fun Brain-Boosting Challenge",
    "description":
      "Sharpen your mind with a immaculate puzzle! Search, discover, and solve exciting word challenges to improve vocabulary and have fun.",
    "url": "https://jigsawplanet.online/word-find",
    "mainEntity": {
      "@type": "Online Game",
      "name": "cross word puzzle maker",
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
      "url": "https://jigsawplanet.online/word-find",
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
