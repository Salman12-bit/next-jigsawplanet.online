import React from "react";
import "./contact.css";
import Button from "@/components/Button/Button";

const Contact = () => {
  // Define WebPage schema for the contact page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us",
    "description": "Get in touch with us to solve your queries through this contact form.",
    "url": "https://jigsawplanet.online/contact", // Replace with the actual URL of your contact page
    "publisher": {
      "@type": "Organization",
      "name": "Jigsaw Planet",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/Puzzlle.webp", // Replace with the logo URL
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/contact"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "msalman39707@gmail.com", // Add your actual support email
      "telephone": "340-6297732", // Add your actual support phone number
      "url": "https://jigsawplanet.online/contact", // Replace with the actual URL
    },
  };

  return (
    <div className="imgformat">
      <h1 className="title">Let Solve Your Quries</h1>
      <div className="content">
        <form className="form">
          <input type="text" placeholder="name" className="input" />
          <input type="text" placeholder="email" className="input" />
          <textarea
            className="textarea"
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>

      {/* JSON-LD Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </div>
  );
};

export default Contact;
