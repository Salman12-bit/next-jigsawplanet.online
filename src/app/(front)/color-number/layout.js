import React from 'react';

export const metadata = {
  title: "Color by Number Printable Fun Pages for Kids!",
  keywords :"color by number,printable color by number",
  description:
    "Play free color by number printables! A fun, easy way for kids to learn numbers and colors while being creative at home or school.",
  openGraph: {
    title: "Color by Number Printable Fun Pages for Kids!",
    description:
      "Play free color by number printables! A fun, easy way for kids to learn numbers and colors while being creative at home or school.",
    url: "https://jigsawplanet.online/color-number",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Play printable color by number",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/color-number",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Color by Number Printable Fun Pages for Kids!",
    "description":
      "Play free color by number printables! A fun, easy way for kids to learn numbers and colors while being creative at home or school.",
    "url": "https://jigsawplanet.online/color-number",
    "mainEntity": {
      "@type": "Online Game",
      "name": "printable color by number",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "printable color by number",
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
      "url": "https://jigsawplanet.online/color-number",
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
