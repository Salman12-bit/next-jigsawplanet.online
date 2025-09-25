import React from 'react';

export const metadata = {
  title: "Play Hard Spelling Words Game | Free Word Challenge",
  description:
    "Master hard spelling words with our free online puzzle game. Rearrange tricky letters, test your skills, and unlock exciting levels in a fun word challenge.",
  openGraph: {
    title: "Play Hard Spelling Words Game | Free Word Challenge",
    description:
      "Master hard spelling words with our free online puzzle game. Rearrange tricky letters, test your skills, and unlock exciting levels in a fun word challenge.",
    url: "https://jigsawplanet.online/hard-spelling",
    images: [
      {
        url: "https://jigsawplanet.online/images/wordpuzzle.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/hard-spelling",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Play Hard Spelling Words Game | Free Word Challenge",
    "description":
      "Master hard spelling words with our free online puzzle game. Rearrange tricky letters, test your skills, and unlock exciting levels in a fun word challenge.",
    "url": "https://jigsawplanet.online/hard-spelling",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Word"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/wordpuzzle.webp",
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
      "@id": "https://jigsawplanet.online/hard-spelling"
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

