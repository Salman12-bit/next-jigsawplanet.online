"use client";

import React, { useState } from "react";
import "./dashboard.css";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [score, setScore] = useState("");
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!file) {
      setError("Please upload a valid file.");
      setLoading(false);
      return;
    }

    let imageUrl;
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "bagname");

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/dz7m8luug/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!cloudinaryResponse.ok) {
        throw new Error("Failed to upload image.");
      }

      const cloudinaryData = await cloudinaryResponse.json();
      imageUrl = cloudinaryData.secure_url;
    } catch (error) {
      setError("Failed to upload image. Please try again.");
      setLoading(false);
      return;
    }

    const payload = {
      title,
      desc,
      score,
      content,
      file: imageUrl,
    };

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.status === 201) {
        router.push("/");
      } else {
        const errorData = await res.text();
        setError(`Failed to create post: ${errorData}`);
      }
    } catch (err) {
      setError("An error occurred while submitting the form");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <div className="left-section motivational-text">
          <h3>Welcome to Your Blogging Journey!</h3>
          <p>Hey there, future storyteller! 🌟</p>
          <p>
            Whether it's your first post or your hundredth, every time you
            write, you have the power to inspire, inform, and connect with
            people all over the world. This space is yours to share your voice,
            passions, and unique perspective.
          </p>
          <ul>
            <li>✍️ Every great blog starts with a single post.</li>
            <li>🌱 Your growth is a journey. Each article you write is a step toward becoming a stronger writer.</li>
            <li>🚀 Consistency is your superpower. Stay committed and watch your impact grow.</li>
          </ul>
          <p className="highlight">Let’s get blogging! 🎉</p>
        </div>

        <div className="right-section">
          <form onSubmit={handleSubmit} className="form">
            {error && <p className="error-message">{error}</p>}
            <div className="input-container">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="input"
              />
            </div>
            <div className="input-container">
              <label htmlFor="desc">Description</label>
              <input
                type="text"
                name="desc"
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
                className="input"
              />
            </div>
            <div className="input-container">
              <label htmlFor="score">Score</label>
              <input
                type="number"
                name="score"
                placeholder="Score"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                required
                className="input"
              />
            </div>
            <div className="input-container">
              <label htmlFor="file">Upload File</label>
              <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="input"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="content">Content</label>
              <ReactQuill
                value={content}
                onChange={(value) => setContent(value)}
                className="bg-[#262626] placeholder:text-sm min-h-52 dark:placeholder:text-black"
              />
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Loading..." : "Post Article"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
