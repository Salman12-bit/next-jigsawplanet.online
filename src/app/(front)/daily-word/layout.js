import React from 'react';

export const metadata = {
  title: "4 Pics One Word Daily Puzzle – Fresh Brain Teasers!",
  keywords: "winter word search puzzle,harry potter word puzzles",
  description:
    "Solve the 4 Pics One Word daily puzzle to test your logic and guess the word! New challenges every day to keep your brain sharp and engaged.",
  openGraph: {
    title: "4 Pics One Word Daily Puzzle – Fresh Brain Teasers!",
    description:
      "Solve the 4 Pics One Word daily puzzle to test your logic and guess the word! New challenges every day to keep your brain sharp and engaged.",
    url: "https://jigsawplanet.online/daily-word",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play winter word search puzzle",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/daily-word",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "4 Pics One Word Daily Puzzle – Fresh Brain Teasers!",
    "description":
      "Solve the 4 Pics One Word daily puzzle to test your logic and guess the word! New challenges every day to keep your brain sharp and engaged.",
    "url": "https://jigsawplanet.online/daily-word",
    "mainEntity": {
      "@type": "Online Game",
      "name": "jigsawplanet",
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
      "url": "https://jigsawplanet.online/daily-word",
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
