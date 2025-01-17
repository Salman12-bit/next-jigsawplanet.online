export const metadata = {
    title: "Play jigsaw planet Game - Free Online Puzzles",
    description: "Experience endless fun with free online jigsaw puzzles on jigsaw planet. Challenge yourself with a variety of puzzle designs and difficulty levels.",
    openGraph: {
        title: "Play jigsawplanet Game - Free Online Puzzles",
        description: "Join Jigsaw Planet for an immersive puzzle experience. Choose from a wide range of free puzzles and sharpen your skills with exciting challenges.",
        url: "https://jigsawplanet.online/jigsaw-planet",
        images: [
            {
                url: "https://jigsawplanet.online/images/Puzzlle.jpeg",
                width: 1200,
                height: 630,
                alt: "Play free online jigsaw puzzles on jigsawplanet",
            },
        ],
    },
    alternates: {
        canonical: "https://jigsawplanet.online/jigsaw-planet",  
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
