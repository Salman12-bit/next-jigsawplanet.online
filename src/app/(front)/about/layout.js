export const metadata = {
  title: "Jigsaw Planet About us",
  description: "Enjoy the thrilling Freezenova game on Jigsaw Planet. Solve interactive puzzles, enhance cognitive skills, and embrace the ultimate challenge.",
  openGraph: {
    title: "jigsawplanet  | About Us",
    description: "Dive into the Freezenova adventure with Jigsaw Planet. Play free puzzles, sharpen your mind, and conquer exciting challenges today!",
    url: "https://jigsawplanet.online/about",
    images: [
      {
        url: "https://jigsawplanet.online/images/Puzzlle.webp",
        width: 600,
        height: 400,
        alt: "planet jigsaw puzzle game on Jigsaw Planet",
      },
    ],
  },
  alternates: {
    canonical: "https://jigsawplanet.online/about",
  },
};


export default function Layout({ children }) {
  return <>{children}</>;
}
