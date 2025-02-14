import React from 'react';

export const metadata = {
  title: "Discover Jigsaplanet: Where Innovation Meets Fun",
  keywords :"jigsawplanet puzzles,jigsaw plnet, jigsaw rabbit, rabbit",
  description:
    "Step into Jigsaplanet and discover a digital world where creativity, tech, and fun collide. Explore innovative ideas and engaging experiences today!",
  openGraph: {
    title: "Discover Jigsaplanet: Where Innovation Meets Fun",
    description:
      "Step into Jigsaplanet and discover a digital world where creativity, tech, and fun collide. Explore innovative ideas and engaging experiences today!",
    url: "https://jigsawplanet.online/jigsaw-rabbit",
    images: [
      {
        url: "https://jigsawplanet.online/images/rabbit.webp",
        width: 1200,
        height: 630,
        alt: "Play jigsaw plnet Game online on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/jigsaw-rabbit",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Discover Jigsaplanet: Where Innovation Meets Fun",
    "description":
      "Step into Jigsaplanet and discover a digital world where creativity, tech, and fun collide. Explore innovative ideas and engaging experiences today!",
    "url": "https://jigsawplanet.online/jigsaw-rabbit",
    "mainEntity": {
      "@type": "Online Game",
      "name": "jigsawplanet puzzles",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "jigsawplanet puzzles online",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/rabbit.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/rabbit.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jigsaw-rabbit",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/rabbit.webp",
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
