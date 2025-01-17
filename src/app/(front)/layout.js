export const metadata = {
    title: "Home - Free Online Jigsaw Puzzles For You",
    description: "Welcome to jigsaw planet - the ultimate platform for puzzle lovers! Explore, play, and enjoy our vast selection of online jigsaw puzzles.",
    openGraph: {
        title: "Home - Free Online Jigsaw Puzzles For You",
        description: "Discover a world of puzzles on jigsawplanet! Start solving and sharing puzzles today, and join a community of puzzle enthusiasts.",
        url: "https://jigsawplanet.online/",
        images: [
            {
                url: "https://jigsawplanet.online/images/Puzzlle.jpeg",
                width: 1200,
                height: 630,
                alt: "Explore and play puzzles on jigsaw planet",
            },
        ],
    },
    alternates: {
        canonical: "https://jigsawplanet.online",  
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
