import React from 'react';

export const metadata = {
  title: "Summer Word Search Puzzles to Keep You Entertained",
  keywords: "summer word puzzles,summer word search puzzle",
  description:
    "Enjoy summer word search puzzles filled with sunny themes! A great way to relax, stay sharp, and celebrate the season with word fun.",
  openGraph: {
    title: "Summer Word Search Puzzles to Keep You Entertained",
    description:
      "Enjoy summer word search puzzles filled with sunny themes! A great way to relax, stay sharp, and celebrate the season with word fun.",
    url: "https://jigsawplanet.online/summer-word",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play summer word puzzles",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/summer-word",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Summer Word Search Puzzles to Keep You Entertained",
    "description":
      "Enjoy summer word search puzzles filled with sunny themes! A great way to relax, stay sharp, and celebrate the season with word fun.",
    "url": "https://jigsawplanet.online/summer-word",
    "mainEntity": {
      "@type": "Online Game",
      "name": "puzzle",
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
      "url": "https://jigsawplanet.online/summer-word",
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
