export const metadata = {
    title: "Jigsaw Planet: Discover the Best Free Game Platform",
    keywords:"jigsaw,jigsaw puzzles,puzzle,jigsaw planet ",
    description: "Visit the ultimate destination for the jigsaw planet puzzle! Solve, create, and share fun jigsaw puzzles online for free. Perfect for all ages",
    openGraph: {
        title: "Free jigsaw planet for all",
        description: "Visit the ultimate destination for jigsaw planet puzzle! Solve, create, and share fun jigsaw puzzles online for free. Perfect for all ages",
        url: "https://jigsawplanet.online/",
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
        canonical: "https://jigsawplanet.online",  
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
