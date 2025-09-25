import React from 'react';

export const metadata = {
  title: "Play Difficult Jigsaw Puzzles Online – Challenge Yourself Now",
  description:
    "Play difficult jigsaw puzzles online for free. Test your skills with hard puzzle levels and enjoy a challenging experience right in your browser.",
  openGraph: {
    title: "Play Difficult Jigsaw Puzzles Online – Challenge Yourself Now",
    description:
      "Play difficult jigsaw puzzles online for free. Test your skills with hard puzzle levels and enjoy a challenging experience right in your browser.",
    url: "https://jigsawplanet.online/jigsaw-difficult",
    images: [
      {
        url: "https://jigsawplanet.online/images/jigsaw-plaet.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-difficult",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Play Difficult Jigsaw Puzzles Online – Challenge Yourself Now",
    "description":
      "Play difficult jigsaw puzzles online for free. Test your skills with hard puzzle levels and enjoy a challenging experience right in your browser.",
    "url": "https://jigsawplanet.online/jigsaw-difficult",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/jigsaw-plaet.webp",
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
      "@id": "https://jigsawplanet.online/jigsaw-difficult"
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