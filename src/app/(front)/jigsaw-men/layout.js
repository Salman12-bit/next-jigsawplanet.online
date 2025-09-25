import React from 'react';

export const metadata = {
  title: "Play Jigsaw Men Puzzle Online – Free & Addictive Brain Game",
  description:
    "Play Jigsaw Men puzzle online for free! Enjoy relaxing yet challenging jigsaw fun, boost your focus, and start solving instantly on any device.",
  openGraph: {
    title: "Play Jigsaw Men Puzzle Online – Free & Addictive Brain Game",
    description:
      "Play Jigsaw Men puzzle online for free! Enjoy relaxing yet challenging jigsaw fun, boost your focus, and start solving instantly on any device.",
    url: "https://jigsawplanet.online/jigsaw-men",
    images: [
      {
        url: "https://jigsawplanet.online/download.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-men",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Play Free Jigsaw Puzzle Online – Fun & Relaxing Game Anytime",
    "description":
      "Play Jigsaw Men puzzle online for free! Enjoy relaxing yet challenging jigsaw fun, boost your focus, and start solving instantly on any device.",
    "url": "https://jigsawplanet.online/jigsaw-men",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/download.webp",
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
      "@id": "https://jigsawplanet.online/jigsaw-men"
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
