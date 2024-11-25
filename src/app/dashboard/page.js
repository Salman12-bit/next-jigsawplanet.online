"use client";

import React, { useState } from "react";
import "./dashboard.css";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(null); 

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const score = e.target[2].value;
    const content = e.target[3].value;
    const file = e.target[4].files[0];

    let imageUrl;
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "bagname");

      try {
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
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <div className="left-section motivational-text">
          <h3>Welcome to Your Blogging Journey!</h3>
          <p>Hey there, future storyteller! 🌟</p>
          <p>
           Whether it's your first post or your hundredth, every time you write, you have 
           the power to inspire, inform, and connect with people each over the world. This 
           space is yours to partake your voice, heartstrings, and unique perspective
          </p>
          <ul>
            <li>✍️ One post is the foundation of any great blog.</li>
            <li>🌱  Your growth is a trip. Each composition you write is a step toward getting a stronger pen.</li>
            <li>🚀 Consistency is your superpower. Stay committed and watch your impact grow.</li>
          </ul>
          <p className="highlight">Let’s get blogging! 🎉</p>
        </div>

        <div className="right-section">
          <form onSubmit={handleSubmit} className="form">
            {error && <p className="error-message">{error}</p>}
            <div className="input-container">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" placeholder="title" required className="input" />
            </div>
            <div className="input-container">
              <label htmlFor="desc">Description</label>
              <input type="text" name="desc" placeholder="desc" required className="input" />
            </div>
            <div className="input-container">
              <label htmlFor="score">Score</label>
              <input type="number" name="score" placeholder="score" required className="input" />
            </div>
            <div className="input-container">
              <label htmlFor="content">Content</label>
              <textarea type="text" name="content" placeholder="content" required className="input" />
            </div>
            <div className="input-container">
              <label htmlFor="file">Upload File</label>
              <input type="file" name="file" className="input" required />
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
