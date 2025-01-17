export const metadata = {
    title: "jigsaw planet Register Information",
    description: "This is the register page for jigsaw planet.",
    openGraph: {
        title: "Jigsaw Planet register",
        description: "Register in to access jigsaw planet and start your puzzle journey.",
        url: "https://jigsawplanet.online/register",
        images: [
            {
                url: "https://jigsawplanet.online/images/Puzzlle.jpeg",
                width: 1200,
                height: 630,
                alt: "Register to jigsaw planet and start your puzzle journey",
            },
        ],
    },
    alternates: {
        canonical: "https://jigsawplanet.online/register",
      },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
