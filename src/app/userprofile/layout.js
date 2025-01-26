export const metadata = {
    title: "Change Role - jigsaw planet",
    description: "Welcome to jigsaw planet - the ultimate platform for puzzle lovers! Explore, play, and enjoy our vast selection of online jigsaw puzzles.",
    openGraph: {
        title: "Change Role - Jigsaw Planet",
        description: "Discover a world of puzzles on jigsawplanet! Start solving and sharing puzzles today, and join a community of puzzle enthusiasts.",
        url: "https://jigsawplanet.online/userprofile",
        images: [
            {
                url: "https://jigsawplanet.online/images/Puzzlle.webp",
                width: 1200,
                height: 630,
                alt: "Explore and play puzzles on jigsaw planet",
            },
        ],
    },
    alternates: {
        canonical: "https://jigsawplanet.online/login",
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
