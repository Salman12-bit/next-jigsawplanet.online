import React from 'react';

export const metadata = {
  title: "Math Quiz Game Fun Practice for Quick Thinking",
  keywords :"abc123 game,math quiz",
  description:
    "Try a math quiz game to test your skills with numbers! Great for kids and adults to sharpen mental math in a playful, fast-paced way.",
  openGraph: {
    title: "Math Quiz Game Fun Practice for Quick Thinking",
    description:
      "Try a math quiz game to test your skills with numbers! Great for kids and adults to sharpen mental math in a playful, fast-paced way.",
    url: "https://jigsawplanet.online/math-game",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play math quiz with alphabet and number learning games",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/math-game",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Math Quiz Game Fun Practice for Quick Thinking",
    "description":
      "Try a math quiz game to test your skills with numbers! Great for kids and adults to sharpen mental math in a playful, fast-paced way.",
    "url": "https://jigsawplanet.online/math-game",
    "mainEntity": {
      "@type": "Online Game",
      "name": "jigsawplanet",
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
      "url": "https://jigsawplanet.online/math-game",
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
