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
    {
      "image": "/images/jigsaw-plaet.webp",
      link: '/jigsaw-plaet'
    },
    {
      "image": "/images/jigsawtruck.webp",
      link: '/jigsaw-plante'
    },
    {
      "image": "/images/burjkhalifa.webp",
      link: '/jisaw-planet'
    },
    {
      "image": "/images/jigsawjungle.webp",
      link: '/rompecabezas-para'
    },
    {
      "image": "/images/riverboat.webp",
      link: '/zigsaw-puzzles'
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

  const puzzleGame = [
    {
      image: "/images/children.webp",
      link: '/A-digital-haven-for-puzzle-follower',
      text: "In today’s quick-paced digital world, where happiness is just a click away, traditional hobbies like jigsaw puzzles have found a new life of joy. One of the most astonishing venues for puzzle fans is Jigsaw puzzle, a jigsaw puzzle utilized for many years.",
    },
    {
      image: "/images/jigsawpuzzles.webp",
      link: '/play-free-online-jigsaw-puzzles',
      text: "In today’s quick-paced digital world, where happiness is just a click away, traditional hobbies like jigsaw puzzles have found a new life of joy. One of the most astonishing venues for puzzle fans is the jigsaw puzzle, which has been utilized for many years.",
    },
    {
      image: "/images/whenfinished.webp",
      link: '/top-10-creative-ideas-when-finished',
      text: "Completing a jigsaw puzzle shows a satisfying feeling of accomplishment. After spending hours—or sometimes days—fitting together hundreds or even thousands of tiny pieces, you finally see the finished picture in all its glory. But then the question arises: What do you do with a jigsaw puzzle once it’s completed?",
    },
    {
      image: "/images/multiplayer.webp",
      link: '/multiplayer-connecting-people',
      text: "Jigsaw puzzles have been a favorite pastime for decades, offering relaxation, cognitive stimulation, and pure enjoyment. But in the modern digital world, puzzles are no longer just a solo hobby. Thanks to multiplayer technology, jigsaw puzzles have evolved into a collaborative, real-time, and often global experience.",
    },
    {
      image: "/images/abcpuzzle.webp",
      link: '/best-alphabet-puzzle-games',
      text: "In the world of early childhood education, one of the most fundamental lessons every child must learn is the alphabet. While traditional methods like flashcards and alphabet songs have served their purpose for generations, the digital age has opened doors to new and exciting ways to learn.",
    },
    {
      image: "/images/wordpuzzle.webp",
      link: '/best-word-puzzle-game-ever',
      text: "Let’s be honest—who doesn’t love a good word puzzle? Whether it’s solving crosswords over morning coffee or flexing your brain on Wordle during lunch, word puzzle games are an evergreen source of entertainment and mental stimulation. They've been around forever, and they’re only obtaining better.",
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
      
      <div>
        <div className="puzzle-article">
          {puzzleGame.map((item, index) => (
            <div key={index} className="puzzle-article-card fade-in">
              <Link href={item.link} className="puzzle-image-wrapper">
                <img src={item.image} alt={`Puzzle ${index + 1}`} className="puzzle-article-image" />
              </Link>
              <p className="puzzle-article-title">{item.text}</p>
              <Link href={item.link}>
                <button className="read-more-button">Read More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

