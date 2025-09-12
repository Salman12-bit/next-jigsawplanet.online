import React from 'react';

export const metadata = {
  title: "Rompecabezas para Niños Aprende Jugando",
  keywords :"rompecabezas para niñas,juego de rompecabezas para niños",
  description:
    "Descubre rompecabezas para niños que enseñan colores, letras y números. ¡Diviértete mientras aprenden con piezas seguras y coloridas!",
  openGraph: {
    title: "Rompecabezas para Niños Aprende Jugando",
    description:
      "Descubre rompecabezas para niños que enseñan colores, letras y números. ¡Diviértete mientras aprenden con piezas seguras y coloridas!",
    url: "https://jigsawplanet.online/rompecabezas-para",
    images: [
      {
        url: "https://jigsawplanet.online/images/jigsawjungle.webp",
        width: 1200,
        height: 630,
        alt: "Play game the puzzle on jigsawplanet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/rompecabezas-para",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Rompecabezas para Niños Aprende Jugando",
    "description":
      "Descubre rompecabezas para niños que enseñan colores, letras y números. ¡Diviértete mientras aprenden con piezas seguras y coloridas!",
    "url": "https://jigsawplanet.online/rompecabezas-para",
    "mainEntity": {
      "@type": "Online Game",
      "name": "game the puzzle",
      "genre": "Action, Puzzle",
      "publisher": {
        "@type": "Organization",
        "name": "puzzle",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jigsawplanet.online/images/jigsawjungle.webp",
          "width": 500,
          "height": 500,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/jigsawjungle.webp",
        "width": 1200,
        "height": 630,
      },
      "url": "https://jigsawplanet.online/rompecabezas-para",
      "playMode": "Double Player",
      "operatingSystem": "Web Browser",
      "applicationCategory": "Game",
    },
    "publisher": {
      "@type": "Organization",
      "name": "game the puzzle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/jigsawjungle.webp",
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
