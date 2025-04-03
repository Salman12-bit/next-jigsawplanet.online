import React from "react";
import "./contact.css";
import Button from "@/components/Button/Button";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us",
    "description": "Get in touch with us to solve your queries through this contact form.",
    "url": "https://jigsawplanet.online/contact", 
    "publisher": {
      "@type": "Organization",
      "name": "Muhammad Salman",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/Puzzlle.webp", 
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jigsawplanet.online/contact"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "msalman39707@gmail.com", 
      "telephone": "340-6297732", 
      "url": "https://jigsawplanet.online/contact", 
    },
  };

  return (
    <div className="imgformat">
      <h1 className="title-text">Let Solve Your Quries</h1>
      <div className="content-text">
        <form className="form">
          <input type="text" placeholder="name" className="input-text" />
          <input type="text" placeholder="email" className="input-text" />
          <textarea
            className="textarea"
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
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
