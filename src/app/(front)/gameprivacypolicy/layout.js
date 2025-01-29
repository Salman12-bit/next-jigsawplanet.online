import React from 'react';

export const metadata = {
  title: "Jigsaw Planet Privacy Policy",
  keywords: "privacy policy, data protection, Jigsawplanet privacy, user data policy",
  description:
    "Read the Privacy Policy for Jigsaw Planet. Learn how your data is handled while you enjoy Jigsawplanet interactive puzzles.",
  openGraph: {
    title: "Jigsawplanet | Privacy Policy",
    description:
      "Understand the data privacy measures on Jigsawplanet. Explore Jigsawplanet games, solve puzzles, and know your privacy is protected.",
    url: "https://jigsawplanet.online/gameprivacypolicy",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Jigsawplanet Privacy Policy illustration",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/gameprivacypolicy",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jigsawplanet Privacy Policy",
    "description":
      "Read the Privacy Policy for Jigsawplanet. Learn how your data is handled while you enjoy Freezenova's interactive puzzles.",
    "url": "https://jigsawplanet.online/gameprivacypolicy",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What data does Jigsawplanet collect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jigsawplanetcollects data necessary to provide interactive puzzle features and improve user experience. Please refer to the full Privacy Policy for details."
          }
        },
        {
          "@type": "Question",
          "name": "How does Jigsawplanet use my data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your data is used to enhance gameplay, improve user experience, and ensure secure access to our platform."
          }
        },
        {
          "@type": "Question",
          "name": "Is my data shared with third parties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jigsawplanet does not sell your data. Limited sharing may occur with trusted partners as outlined in the Privacy Policy."
          }
        }
      ]
    },
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
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/Puzzlle.webp",
      "width": 1200,
      "height": 630,
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://jigsawplanet.online"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Privacy Policy",
          "item": "https://jigsawplanet.online/gameprivacypolicy"
        }
      ]
    }
  };

  return (
    <>
      {/* Render the children */}
      {children}

      {/* JSON-LD Script for Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
