import React from 'react';

export const metadata = {
  title: "JigsawPlanet Forget Password",
  description:
    "Recover access to your JigsawPlanet account. Reset your password and regain access to manage puzzles and track progress.",
  openGraph: {
    title: "JigsawPlanet Forget Password",
    description:
      "Recover your JigsawPlanet account by resetting your password. Secure and easy password recovery process.",
    url: "https://jigsawplanet.online/forgetpass",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 1200,
        height: 630,
        alt: "Reset your password on JigsawPlanet to regain access to your account.",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/forgetpass",
  },
};

export default function Layout({ children }) {
  // Define the structured data schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "JigsawPlanet Forget Password",
    "description":
      "Recover access to your JigsawPlanet account. Reset your password and regain access to manage puzzles and track progress.",
    "url": "https://jigsawplanet.online/forgetpass",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I reset my JigsawPlanet password?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To reset your password, visit the forget password page, enter your registered email, and follow the instructions sent to your email.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I change my password after logging in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, after logging in, you can go to your account settings to change your password for enhanced security.",
          },
        },
      ],
    },
    "publisher": {
      "@type": "Organization",
      "name": "JigsawPlanet",
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
          "item": "https://jigsawplanet.online",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Forget Password",
          "item": "https://jigsawplanet.online/forgetpass",
        },
      ],
    },
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
