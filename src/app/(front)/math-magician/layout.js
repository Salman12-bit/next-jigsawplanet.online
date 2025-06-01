import React from 'react';

export const metadata = {
  title: "Math Magician Master Math Facts the Fun Way!",
  keywords :"reading games for 5th grade,1 grade games",
  description:
    "Become a Math Magician! Practice addition, subtraction, multiplication, and division with fast, fun games that boost speed and accuracy.",
  openGraph: {
    title: "Math Magician Master Math Facts the Fun Way!",
    description:
      "Become a Math Magician! Practice addition, subtraction, multiplication, and division with fast, fun games that boost speed and accuracy.",
    url: "https://jigsawplanet.online/math-magician",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play 1 grade games",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/math-magician",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Math Magician Master Math Facts the Fun Way!",
    "description":
      "Become a Math Magician! Practice addition, subtraction, multiplication, and division with fast, fun games that boost speed and accuracy.",
    "url": "https://jigsawplanet.online/math-magician",
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
      "url": "https://jigsawplanet.online/math-magician",
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
