export const metadata = {
    title: "Home - jigsaw planet",
    description: "Welcome to jigsaw planet - the ultimate platform for puzzle lovers! Explore, play, and enjoy our vast selection of online jigsaw puzzles.",
    openGraph: {
        title: "Home - Jigsaw Planet",
        description: "Discover a world of puzzles on jigsawplanet! Start solving and sharing puzzles today, and join a community of puzzle enthusiasts.",
        url: "https://example.com",
        images: [
            {
                url: "https://example.com/images/jigsaw-planet-home.jpg",
                width: 1200,
                height: 630,
                alt: "Explore and play puzzles on jigsaw planet",
            },
        ],
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
