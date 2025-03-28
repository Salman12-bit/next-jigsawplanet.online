import React from "react";
import "./home.css";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const res = await fetch(`${process.env.LIVE_LINK}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null; 
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  try {
    const post = await getData(params.id);

    if (!post) {
      return {
        title: "Post Not Found",
        description: "This post could not be found.",
        alternates: {
          canonical: `https://jigsawplanet.online/404`,
        },
      };
    }

    return {
      title: post.title || "Untitled Post",
      description: post.desc || "No description available",
      openGraph: {
        title: post.title,
        description: post.desc,
        url: `https://jigsawplanet.online/${params.id}`,
        images: [
          {
            url: post.file,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      alternates: {
        canonical: `https://jigsawplanet.online/${params.id}`,
      },
      additionalMetadata: {
        datePublished: post.datePublished,
        dateModified: post.dateModified,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Post Not Found",
      description: "This post could not be found.",
      alternates: {
        canonical: `https://jigsawplanet.online/404`,
      },
    };
  }
}

const BlogPost = async ({ params }) => {
  const post = await getData(params.id);

  if (!post) {
    notFound(); 
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title || "Untitled Post",
    "description": post.desc || "No description available",
    "datePublished": post.datePublished || new Date().toISOString(),
    "dateModified": post.dateModified || post.datePublished || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": "Muhammad Salman",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jigsaw Planet",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jigsawplanet.online/images/Puzzle.webp",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jigsawplanet.online/${params.id}`,
    },
    "image": {
      "@type": "ImageObject",
      "url": post.file || "https://jigsawplanet.online/images/Puzzle.webp", 
      "width": 1200,
      "height": 630,
    },
  };

  return (
    <div className="container">
      <div className="top">
        <div className="info">
          <h1 className="title">{post.title}</h1>
          <p className="desc">{post.desc}</p>
          <div className="author">
            <img
              src={post.file}
              alt="Author Avatar"
              width={700}
              height={400}
              className="avatar"
            />
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
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

export default BlogPost;
