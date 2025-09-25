import React from 'react';

export const metadata = {
  title: "Eiffel Tower Jigsaw Puzzle – Play Free Online Game",
  description:
    "Play the Eiffel Tower jigsaw puzzle online for free! Solve Paris-themed puzzles, enjoy relaxing challenges, and start playing instantly in your browser today.",
  openGraph: {
    title: "Eiffel Tower Jigsaw Puzzle – Play Free Online Game",
    description:
      "Play the Eiffel Tower jigsaw puzzle online for free! Solve Paris-themed puzzles, enjoy relaxing challenges, and start playing instantly in your browser today.",
    url: "https://jigsawplanet.online/jigsaw-eiffel",
    images: [
      {
        url: "https://jigsawplanet.online/images/eiffel.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-eiffel",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Eiffel Tower Jigsaw Puzzle – Play Free Online Game",
    "description":
      "Play the Eiffel Tower jigsaw puzzle online for free! Solve Paris-themed puzzles, enjoy relaxing challenges, and start playing instantly in your browser today.",
    "url": "https://jigsawplanet.online/jigsaw-eiffel",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/eiffel.webp",
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "jigsawplanet",
      "url": "https://jigsawplanet.online"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/jigsaw-eiffel"
    }
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