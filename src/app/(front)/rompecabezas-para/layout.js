import React from 'react';

export const metadata = {
  title: "Rompecabezas para Niños – Juega Gratis en Línea",
  keywords: "rompecabezas para niñas,juego de rompecabezas para niños",
  description:
    "Juega rompecabezas para niños online gratis. Divertidos y educativos puzzles para todas las edades. ¡Comienza a jugar al instante en tu navegador!",
  openGraph: {
    title: "Rompecabezas para Niños – Juega Gratis en Línea",
    description:
      "Juega rompecabezas para niños online gratis. Divertidos y educativos puzzles para todas las edades. ¡Comienza a jugar al instante en tu navegador!",
    url: "https://jigsawplanet.online/rompecabezas-para",
    images: [
      {
        url: "https://jigsawplanet.online/images/jigsawjungle.webp",
        width: 1200,
        height: 630,
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
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Rompecabezas para Niños – Juega Gratis en Línea",
    "description":
      "Juega rompecabezas para niños online gratis. Divertidos y educativos puzzles para todas las edades. ¡Comienza a jugar al instante en tu navegador!",
    "url": "https://jigsawplanet.online/rompecabezas-para",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "es",
    "genre": ["Rompecabezas", "Educativo", "Niños"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://jigsawplanet.online/images/jigsawjungle.webp",
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "jigsawplanet",
      "url": "https://jigsawplanet.online"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/rompecabezas-para"
    }
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
