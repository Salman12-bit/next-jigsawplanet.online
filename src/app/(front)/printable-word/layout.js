import React from 'react';

export const metadata = {
  title: "Printable Word Search Puzzles Free Fun for All",
  keywords: "hard word search puzzles printable,printable word search puzzles for adults",
  description:
    "Free printable word search puzzles! Great for kids and adults to enjoy brain-boosting fun anytime at home, school, or on the go.",
  openGraph: {
    title: "Printable Word Search Puzzles Free Fun for All",
    description:
      "Free printable word search puzzles! Great for kids and adults to enjoy brain-boosting fun anytime at home, school, or on the go.",
    url: "https://jigsawplanet.online/printable-word",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play printable word search puzzles for adults",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/printable-word",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Printable Word Search Puzzles Free Fun for All",
    "description":
      "Free printable word search puzzles! Great for kids and adults to enjoy brain-boosting fun anytime at home, school, or on the go.",
    "url": "https://jigsawplanet.online/printable-word",
    "mainEntity": {
      "@type": "Online Game",
      "name": "printable word search puzzles for adults",
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
      "url": "https://jigsawplanet.online/printable-word",
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
