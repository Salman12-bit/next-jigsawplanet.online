import React from 'react';

export const metadata = {
  title: "Jigsawplanet blog for jigsaw player",
  keywords :"jigsaw player,jigsaw lover,jigsaw creator",
  description:
    "This platform is best for jigsaw players and the image to assemble. However, all puzzle methods clearly stand out. Discover them!",
  openGraph: {
    title: "Jigsawplanet blog for jigsaw player",
    description:
      "This platform is best for jigsaw players and the image to assemble. However, all puzzle methods clearly stand out. Discover them!",
    url: "https://jigsawplanet.online/jigsawblog",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Read this is article on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsawblog",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jigsawplanet blog for jigsaw player",
    "description":
      "This platform is best for jigsaw players and the image to assemble. However, all puzzle methods clearly stand out. Discover them!",
    "url": "https://jigsawplanet.online/jigsawblog",
    "mainEntity": {
      "@type": "Online Game",
      "name": "jigsaw player",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "jigsawplanet",
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
      "url": "https://jigsawplanet.online/jigsawblog",
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
