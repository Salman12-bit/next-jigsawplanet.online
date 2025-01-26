export const metadata = {
    title: "jigsaw planet Forget-password",
    description: "Access your personal dashboard on jigsaw planet. Manage puzzles, track progress, and customize your profile.",
    openGraph: {
        title: "jigsaw planet Dashboard",
        description: "Explore your jigsaw planet dashboard to manage puzzles, view progress, and customize your experience.",
        url: "https://jigsawplanet.online/forgetpass",
        images: [
            {
                url: "https://jigsawplanet.online/images/Puzzlle.webp",
                width: 1200,
                height: 630,
                alt: "View your personalized dashboard on Jigsaw Planet to track and manage puzzles",
            },
        ],
    },
    alternates: {
        canonical: "https://jigsawplanet.online/forgetpass",
      },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
