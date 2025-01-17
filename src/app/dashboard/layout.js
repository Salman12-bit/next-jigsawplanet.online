export const metadata = {
    title: "jigsaw planet Dashboard",
    description: "Access your personal dashboard on jigsaw planet. Manage puzzles, track progress, and customize your profile.",
    openGraph: {
        title: "jigsaw planet Dashboard",
        description: "Explore your jigsaw planet dashboard to manage puzzles, view progress, and customize your experience.",
        url: "https://jigsawplanet.online/dashboard",
        images: [
            {
                url: "https://jigsawplanet.online/images/Puzzlle.jpeg",
                width: 1200,
                height: 630,
                alt: "View your personalized dashboard on Jigsaw Planet to track and manage puzzles",
            },
        ],
    },
    alternates: {
        canonical: "https://jigsawplanet.online/dashboard",
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
