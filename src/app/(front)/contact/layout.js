export const metadata = {
    title: "Contact Us - jigsaw planet",
    description: "Get in touch with the jigsaw planet team. Reach out for support, inquiries, and feedback.",
    openGraph: {
        title: "Contact Us - Jigsaw Planet",
        description: "Have questions or need assistance? Contact the jigsaw planet team for support, inquiries, and feedback.",
        url: "https://example.com/contact",
        images: [
            {
                url: "https://example.com/images/jigsaw-planet-contact.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Jigsaw Planet for support and inquiries",
            },
        ],
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
