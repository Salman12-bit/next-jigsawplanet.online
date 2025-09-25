import React from 'react';

export const metadata = {
  title: "Jigsawplanet – Play Jigsaw Puzzles & Create Your Own",
  keywords: "jigsaw puzzle,jigsaw",
  description:
    "Play jigsaw puzzles online at jigsawplanet! Solve, create, and share thousands of free jigsaw puzzles for kids, teens, and adults. Start your puzzle now!",
  openGraph: {
    title: "Jigsawplanet – Play Jigsaw Puzzles & Create Your Own",
    description:
      "Play jigsaw puzzles online at jigsawplanet! Solve, create, and share thousands of free jigsaw puzzles for kids, teens, and adults. Start your puzzle now!",
    url: "https://jigsawplanet.online/",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Explore and play puzzles on Jigsaw Planet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jigsawplanet – Play Jigsaw Puzzles & Create Your Own",
    "url": "https://jigsawplanet.online",
    "description":
      "Play jigsaw puzzles online at jigsawplanet! Solve, create, and share thousands of free jigsaw puzzles for kids, teens, and adults. Start your puzzle now!",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://jigsawplanet.online/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jigsaw Planet",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/Puzzlle.webp",
        "width": 500,
        "height": 500,
      },
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
