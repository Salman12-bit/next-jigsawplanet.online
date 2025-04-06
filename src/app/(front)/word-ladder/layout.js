import React from 'react';

export const metadata = {
  title: "Word Ladder Game: Build Words, One Step at a Time",
  keywords: "word ladder solver,word scramble",
  description:
    "Challenge your brain with a fun word ladder! Change one letter at a time to reach the final word. Great for learning and brain training!",
  openGraph: {
    title: "Word Ladder Game: Build Words, One Step at a Time",
    description:
      "Challenge your brain with a fun word ladder! Change one letter at a time to reach the final word. Great for learning and brain training!",
    url: "https://jigsawplanet.online/word-ladder",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play word ladder solver game",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/word-ladder",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Word Ladder Game: Build Words, One Step at a Time",
    "description":
      "Challenge your brain with a fun word ladder! Change one letter at a time to reach the final word. Great for learning and brain training!",
    "url": "https://jigsawplanet.online/word-ladder",
    "mainEntity": {
      "@type": "Online Game",
      "name": "cross word puzzle maker",
      "genre": "Action, ",
      "publisher": {
        "@type": "Organization",
        "name": "Jigsawplanet",
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
      "url": "https://jigsawplanet.online/word-ladder",
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
