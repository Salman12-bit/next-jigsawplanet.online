"use client";

import "./home.css";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const [timeLeft, setTimeLeft] = useState(null);

  const puzzleGames = [
    {
      "image": "/images/Puzzle3.webp",
      link: '/jig-saw-planet'
    },
    {
      "image": "/download.webp",
      link: '/planet-jigsaw'
    },
    {
      "image": "/flower.webp",
      link: '/jigsaw-puzzle-planet'
    },
  ];

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/posts", {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      setData(data);
      setErr(false);
    } catch (error) {
      setErr(true);
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const startOfFriday = new Date(now);
      startOfFriday.setDate(now.getDate() + ((5 - now.getDay() + 7) % 7)); // Set to next Friday
      startOfFriday.setHours(0, 0, 0, 0); // Friday 00:00:00

      const endOfFriday = new Date(startOfFriday);
      endOfFriday.setHours(23, 59, 59, 999); // Friday 23:59:59

      if (now >= startOfFriday && now <= endOfFriday) {
        // If it's Friday, start countdown from 23:59:59
        setTimeLeft(endOfFriday - now);
      } else {
        // Hide countdown on other days
        setTimeLeft(null);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    if (ms <= 0) return "00:00:00"; // Prevent negative values
    const hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="home-container">
      <marquee className="marquee">
        🎉 New Puzzle Levels Every Friday! Stay Tuned for More Challenges! 🎉
      </marquee>
      {timeLeft !== null && (
        <div className="countdown">
          ⏳ New Level in: {formatTime(timeLeft)} ⏳
        </div>
      )}

      <div className="puzzle-games">
        {puzzleGames.map((item, index) => (
          <div key={index} className="puzzle-game-card">
            <img src={item.image} alt={`Puzzle ${index + 1}`} className="puzzle-game-image" />
            <h3 className="puzzle-game-title">Puzzle Game</h3>
            <p>Click on the button below to start playing</p>
            <Link href={item.link}><button className="puzzle-game-button">Play Now</button></Link>
          </div>
        ))}
      </div>
      <div className="posts">
        {isLoading ? (
          <div className="loader"><div className="spinner"></div></div>
        ) : err ? (
          <p className="error">Error loading posts.</p>
        ) : (
          data?.map((post) => (
            <div className="post" key={post._id}>
              <div className="imgContainer">
                <Link href={`/${post._id}`}><img className="img" src={post.file} alt={post.title} loading="lazy" /></Link>
              </div>
              <Link href="/jigsaw-planet" className="button1">Play Game</Link>
              <div className="postContentContainer">
                <h1 className="postTitle">{post.title}</h1>
                <p className="postContent">{post.desc}</p>
                <h3 className="postScore">Score: {post.score}</h3>
                {session && session.user?.role === "admin" && (
                  <button className="delete" onClick={() => handleDelete(post._id)}>Delete</button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
