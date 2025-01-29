import React from 'react';
import './about.css';

const About = () => {
  // Define the WebPage schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Jigsaw Planet",
    "description": "Learn more about Jigsaw Planet, a platform offering exciting jigsaw puzzles for all ages. Designed and developed to deliver a seamless experience.",
    "url": "https://jigsawplanet.online/aboutus", 
    "publisher": {
      "@type": "Organization",
      "name": "Muhammad Salman",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/Puzzlle.webp", 
        "width": 500,
        "height": 500
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/aboutus"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "About Us",
      "email": "msalman39707@gmail.com", 
      "telephone": "340-6297732", 
      "url": "https://jigsawplanet.online/aboutus", 
    },
  };

  return (
    <div className='about-container'>
      <div className='about-content'>
        <h1 className='welcome-content'>Welcome to Jigsaw Planet</h1>
        <p>
          At Jigsaw Planet, we are passionate about bringing joy and creativity to puzzle enthusiasts around the world.
          Our platform allows you to explore, create, and solve stunning jigsaw puzzles that cater to all ages and interests.
        </p>
        <p>
          As a full-stack developer specializing in React.js, Next.js, and PHP, I have meticulously crafted this website to deliver
          a seamless user experience, robust functionality, and lightning-fast performance.
        </p>
        <p>
          Whether you are here to unwind, challenge your mind, or share your custom puzzles with others, Jigsaw Planet is
          designed to meet your needs and exceed your expectations. We sincerely appreciate your support and engagement with our platform!
        </p>
      </div>

      {/* JSON-LD Script for Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </div>
  );
};

export default About;
