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

  const puzzleGames = [
    {
      "image": "/images/Puzzle3.webp",
      link: '/jigsaw-puzzle'
    },
    {
      "image": "/download.webp",
      link: '/jigsaw-men'
    },
    {
      "image": "/flower.webp",
      link: '/jigsaw-flower'
    },
    {
      "image": "/images/children.webp",
      link: '/jigsaw-children'
    },
    {
      "image": "/images/rabbit.webp",
      link: '/jigsaw-rabbit'
    },
    {
      "image": "/images/eiffel.webp",
      link: '/jigsaw-eiffel'
    },
    {
      "image": "/images/place.webp",
      link: '/jigsaw-place'
    },
    {
      "image": "/images/homewater.webp",
      link: '/jigsaw-water'
    },
    {
      "image": "/images/nightstar.webp",
      link: '/puzzle-jigsaw'
    },
    {
      "image": "/images/dorapuzzle.webp",
      link: '/jigswaplanet'
    },
    {
      "image": "/images/animegame.webp",
      link: '/animegame'
    },
    {
      "image": "/images/jigsawsand.webp",
      link: '/jigsaw-palnet'
    },
    {
      "image": "/images/rompecabezas.webp",
      link: '/rompecabezas'
    },
  ];


  const wordgame = [
    {
      "image": "/images/word.webp",
      link: '/printable-word-puzzles'
    },
    {
      "image": "/images/friend.webp",
      link: '/puzzle-words'
    },
    {
      "image": "/images/wordchildren.webp",
      link: '/word-game'
    },
    {
      "image": "/images/bee.webp",
      link: '/word-puzzle'
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

  return (
    <div className="home-container">
      <marquee className="marquee">
        🎉 New Puzzle Levels Every Friday! Stay Tuned for More Challenges! 🎉
      </marquee>
      <div className="puzzle-games">
        {puzzleGames.map((item, index) => (
          <div key={index} className="puzzle-game-card">
            <img src={item.image} alt={`Puzzle ${index + 1}`} className="puzzle-game-image" />
            <p className="puzzle-game-title">Click on the button to start playing</p>
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
      <div className="word-games">
        {wordgame.map((item, index) => (
          <div key={index} className="word-game-card">
            <img src={item.image} alt={`Puzzle ${index + 1}`} className="word-game-image" />
            <Link href={item.link}><button className="puzzle-game-button">Play Now</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
