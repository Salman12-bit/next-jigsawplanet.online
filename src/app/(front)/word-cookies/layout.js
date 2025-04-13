import React from 'react';

export const metadata = {
  title: "Word Cookies Daily Puzzle: Tasty Brain Workout!",
  keywords: "english word puzzle game,large print word search puzzles",
  description:
    "Play Word Cookies Daily Puzzle and sharpen your mind with sweet word challenges. A fun, tasty way to boost your vocabulary every day!",
  openGraph: {
    title: "Word Cookies Daily Puzzle: Tasty Brain Workout!",
    description:
      "Play Word Cookies Daily Puzzle and sharpen your mind with sweet word challenges. A fun, tasty way to boost your vocabulary every day!",
    url: "https://jigsawplanet.online/word-cookies",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play Word Cookies Daily Puzzle",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/word-cookies",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Word Cookies Daily Puzzle: Tasty Brain Workout!",
    "description":
      "Play Word Cookies Daily Puzzle and sharpen your mind with sweet word challenges. A fun, tasty way to boost your vocabulary every day!",
    "url": "https://jigsawplanet.online/word-cookies",
    "mainEntity": {
      "@type": "Online Game",
      "name": "english word puzzle game",
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
      "url": "https://jigsawplanet.online/word-cookies",
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
