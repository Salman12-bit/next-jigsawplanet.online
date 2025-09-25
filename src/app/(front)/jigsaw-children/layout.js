import React from 'react';

export const metadata = {
  title: "Childrens Jigsaws Online – Play Free Kids Puzzle Games",
  description:
    "Play childrens jigsaws online for free! Fun and educational puzzles designed for kids. Choose colorful themes, solve easily, and start playing instantly in your browser.",
  openGraph: {
    title: "Childrens Jigsaws Online – Play Free Kids Puzzle Games",
    description:
      "Play childrens jigsaws online for free! Fun and educational puzzles designed for kids. Choose colorful themes, solve easily, and start playing instantly in your browser.",
    url: "https://jigsawplanet.online/jigsaw-children",
    images: [
      {
        url: "https://jigsawplanet.online/images/children.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-children",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Childrens Jigsaws Online – Play Free Kids Puzzle Games",
    "description":
      "Play childrens jigsaws online for free! Fun and educational puzzles designed for kids. Choose colorful themes, solve easily, and start playing instantly in your browser.",
    "url": "https://jigsawplanet.online/jigsaw-children",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/children.webp",
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
      "@id": "https://jigsawplanet.online/jigsaw-children"
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
