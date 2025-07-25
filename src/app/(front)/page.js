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
      image: "/images/interactivepuzzle.webp",
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
          <p className="error">Loading....</p>
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
      <article className="article-content">
        <h1>Online Jigsawplanet A Digital Pause for Curious Minds</h1>

        <p>Each day, our focus is pulled in dozens of directions. Between work, messages, and constant updates, the mind barely gets a moment to reset. That’s where our platform offers something different — not just a puzzle activity, but a deliberate moment to disconnect from pressure and reconnect with thought.</p>

        <h2>Puzzle Time as a Thoughtful Escape</h2>

        <p>Unlike content that asks you to scroll endlessly, puzzles offer a destination. You start, progress, and finish — all without being bombarded by distractions. Online jigsawplanet uses this format to offer small, quiet victories. Each puzzle becomes a soft pause in a noisy world.</p>

        <p>This isn’t just about entertainment. It’s about reclaiming attention. A well-designed puzzle provides focus without stress, structure without pressure. It allows the brain to work gently — solving, noticing, and observing — instead of reacting to speed.</p>

        <h2>More Than Pieces: How Puzzles Tap Into Emotion</h2>

        <p>When people think of online jigsaw puzzles, they think just fitting pieces together. But emotionally, something deeper happens. The mind starts to predict, visualize, and make sense of complexity. This small act — of creating order — often brings a sense of comfort.</p>

        <p>Our platform understands this emotional undercurrent. That’s why each puzzle is designed not just for challenge, but for clarity. It’s less about winning and more about witnessing progress. Every piece placed brings a bit more calm, a bit more satisfaction.</p>

        <h2>Personal Time, Not Performance</h2>

        <p>In most online spaces, users are measured by clicks, likes, and speed. But on our platform, time moves differently. You’re not being watched or rated. You’re simply invited to enjoy the moment at your own pace.</p>

        <p>This is especially powerful for people seeking a break from digital noise. The experience feels personal — like journaling or taking a walk. You don’t need instructions. You have just begun. And that kind of simplicity is hard to find online.</p>

        <h2>From Curiosity to Calm: Who It's For</h2>

        <p>Anyone with a curious mind can enjoy this space. Young learners discover patterns and patience. Busy professionals find a moment of silence. Older users reconnect with a familiar rhythm from the past. It’s not just a site — it’s a practice.</p>

        <p>Many visitors make this a part of their weekly or daily routine. Some enjoy puzzles over coffee. Others use it as a way to wind down after work. There’s no wrong time to re-center your attention. No skill level is required to begin.</p>

        <h2>Creating Meaningful Screen Time</h2>

        <p>Not all screen time is created equal. Some leaves us drained. But time spent on our platform — even a few minutes — feels different. You walk away with clarity, not clutter. That’s the power of intention-driven interaction.</p>

        <p>Online jigsawplanet offers that kind of interaction. A space that rewards focus, not speed. Curiosity, not competition. And presence, not pressure. In a digital world full of distractions, this quiet little corner reminds us: one thoughtful task can go a long way.</p>

        <p>If you’d like to learn more about puzzle games, feel free to explore the articles below.</p>
      </article>
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
  );
}

