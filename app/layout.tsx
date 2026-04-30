import type { Metadata } from 'next';
import './globals.css';
import { geistMono, geistSans } from './fonts';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Saranju Bule',
    description:
        'Portfolio of Saranju Bule – Senior Frontend Engineer, Full-stack Engineer, and tech enthusiast. Explore projects, skills, and contact information.',

    keywords: [
        'Saranju Bule',
        'Portfolio',
        'Senior Frontend Engineer',
        'Full-stack Engineer',
        'Web Developer',
        'Next.js',
        'React',
        'JavaScript',
        'TypeScript',
        'Python',
        'Software Engineer',
    ],

    authors: [{ name: 'Saranju Bule' }],
    creator: 'Saranju Bule',

    openGraph: {
        title: 'Saranju Bule – Senior Frontend Engineer & Full-Stack Engineer',
        description:
            'Explore the work, projects, and skills of Frontend Engineer Saranju Bule.',
        url: 'https://saranju.vercel.app/',
        siteName: 'Saranju Bule Portfolio',
        images: [
            {
                url: 'https://saranju.vercel.app/android-chrome-512x512.png',
                width: 1200,
                height: 630,
                alt: 'Saranju Bule Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    icons: {
        icon: 'https://saranju.vercel.app/android-chrome-192x192.png',
        apple: 'https://saranju.vercel.app/apple-touch-icon.png',
    },

    metadataBase: new URL('https://saranju.vercel.app/'),

    alternates: {
        canonical: 'https://saranju.vercel.app/',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Load Google Analytics script */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-62W25D8BR5"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-62W25D8BR5');`}
                </Script>

                {/* Load Microsoft Clarity script */}
                <Script id="microsoft-clarity" strategy="afterInteractive">
                    {`(function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "wjqiky4bok");`}
                </Script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
