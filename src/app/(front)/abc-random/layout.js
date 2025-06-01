import React from 'react';

export const metadata = {
  title: "123ABC Learn Numbers & Letters Through Play",
  keywords :"abcya random name picker,123abc games",
  description:
    "Explore 123ABC activities that make learning numbers and letters fun! Great for early learners building counting and reading skills.",
  openGraph: {
    title: "123ABC Learn Numbers & Letters Through Play",
    description:
      "Explore 123ABC activities that make learning numbers and letters fun! Great for early learners building counting and reading skills.",
    url: "https://jigsawplanet.online/abc-random",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play abcya random name picker",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/abc-random",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "123ABC Learn Numbers & Letters Through Play",
    "description":
      "Explore 123ABC activities that make learning numbers and letters fun! Great for early learners building counting and reading skills.",
    "url": "https://jigsawplanet.online/abc-random",
    "mainEntity": {
      "@type": "Online Game",
      "name": "puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle",
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
      "url": "https://jigsawplanet.online/abc-random",
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
