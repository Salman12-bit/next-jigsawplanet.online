import React from 'react';

export const metadata = {
  title: "Jigsawplanet Terms of Service",
  description:
    "Review the Terms of Service for Jigsawplanet. Learn the rules and guidelines for using Freezenova's interactive puzzles and services.",
  openGraph: {
    title: "Jigsawplanet | Terms of Service",
    description:
      "Understand the terms and policies for using Jigsawplanet. Solve puzzles, enjoy Freezenova games, and abide by our service rules.",
    url: "https://jigsawplanet.online/termofservices",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 600,
        height: 400,
        alt: "Jigsawplanet Terms of Service illustration",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/termofservices",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jigsawplanet Terms of Service",
    "description":
      "Review the Terms of Service for Jigsawplanet. Learn the rules and guidelines for using Jigsawplanet interactive puzzles and services.",
    "url": "https://jigsawplanet.online/termofservices",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the rules for using Jigsawplanet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Users must comply with the guidelines provided in the Terms of Service, ensuring respectful and fair usage of the platform."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use Jigsaw Planet for commercial purposes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jigsaw Planet is primarily for personal and non-commercial use unless explicitly stated otherwise in the Terms of Service."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I violate the Terms of Service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Violating the Terms of Service may lead to the suspension or termination of your account. Please review the full Terms for detailed consequences."
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
        "width": 600,
        "height": 400,
      },
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://jigsawplanet.online/images/Puzzlle.webp",
      "width": 600,
      "height": 400,
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
          "name": "Terms of Service",
          "item": "https://jigsawplanet.online/termofservices"
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
