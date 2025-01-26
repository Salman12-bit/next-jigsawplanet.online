export const metadata = {
    title: "jigsaw planet Login Information",
    description: "This is the login page for jigsaw planet.",
    openGraph: {
        title: "Jigsaw Planet Login",
        description: "Log in to access jigsaw planet and start your puzzle journey.",
        url: "https://jigsawplanet.online/login",
        images: [
            {
                url: "https://jigsawplanet.online/images/Puzzlle.webp",
                width: 1200,
                height: 630,
                alt: "Login to jigsaw planet and start your puzzle journey",
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
