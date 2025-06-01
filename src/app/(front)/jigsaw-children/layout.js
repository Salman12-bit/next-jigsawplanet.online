import React from 'react';

export const metadata = {
  title: "Explore Jigsa Planet: Discover the Future",
  keywords :"online puzzles, childrens jigsaws, childrens jigsaws online, children",
  description:
    "Explore Jigsa Planet and dive into a world of fresh ideas. Learn about the latest trends and join a community passionate about innovation.",
  openGraph: {
    title: "Explore Jigsa Planet: Discover the Future",
    description:
      "Explore Jigsa Planet and dive into a world of fresh ideas. Learn about the latest trends and join a community passionate about innovation.",
    url: "https://jigsawplanet.online/jigsaw-children",
    images: [
      {
        url: "https://jigsawplanet.online/images/children.webp",
        width: 1200,
        height: 630,
        alt: "Play jigsa planet Game online on jigsawplanet",
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
    "@type": "WebPage",
    "name": "Explore Jigsa Planet: Discover the Future",
    "description":
      "Explore Jigsa Planet and dive into a world of fresh ideas. Learn about the latest trends and join a community passionate about innovation.",
    "url": "https://jigsawplanet.online/jigsaw-children",
    "mainEntity": {
      "@type": "Online Game",
      "name": "childrens jigsaws online",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "childrens jigsaws online",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/children.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/children.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/jigsaw-children",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "childrens jigsaws online",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/children.webp",
        "width": 500,
        "height": 500,
      },
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
