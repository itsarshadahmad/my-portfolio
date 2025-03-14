import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

const title = "Arshad's Portfolio";
const description =
    "Hello, I'm a full-stack developer with a Master's in Computer Applications and six months of professional experience. I specialize in both front-end and back-end development, focusing on building efficient and scalable digital solutions. My portfolio highlights projects that reflect my technical expertise, attention to detail, and commitment to continuous improvement. Thank you for visiting my site.";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title,
    description,
    openGraph: {
        title,
        description,
        url: baseUrl,
        siteName: title,
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cx(
                "text-black bg-white dark:text-white dark:bg-black",
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <head>
                <link rel="icon" href="/icon/icon.ico" sizes="any" />
            </head>
            <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    <Navbar />
                    {children}
                    <Footer />
                    <Analytics />
                    <SpeedInsights />
                </main>
            </body>
        </html>
    );
}
