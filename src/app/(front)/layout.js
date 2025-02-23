import React from 'react';

export const metadata = {
  title: "Jigsaw Planet: Discover the Best Free Game Platform",
  keywords: "jigsawplanet,jigsaw,jigsaw puzzles,puzzle",
  description:
    "Visit the ultimate destination for the Jigsaw Planet puzzle! Solve, create, and share fun jigsaw puzzles online for free. Perfect for all ages.",
  openGraph: {
    title: "Jigsaw Planet: Discover the Best Free Game Platform",
    description:
      "Visit the ultimate destination for Jigsaw Planet puzzle! Solve, create, and share fun jigsaw puzzles online for free. Perfect for all ages.",
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
    "name": "Jigsaw Planet",
    "url": "https://jigsawplanet.online",
    "description":
      "Visit the ultimate destination for the Jigsaw Planet puzzle! Solve, create, and share fun jigsaw puzzles online for free. Perfect for all ages.",
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
