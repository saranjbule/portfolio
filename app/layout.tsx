import type { Metadata } from 'next';
import './globals.css';
import { geistMono, geistSans } from './fonts';

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
        url: 'https://yourdomain.com',
        siteName: 'Saranju Bule Portfolio',
        images: [
            {
                url: 'https://yourdomain.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Saranju Bule Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    icons: {
        icon: '/favicon.ico',
        apple: '/favicon.ico',
    },

    metadataBase: new URL('https://yourdomain.com'),
    alternates: {
        canonical: 'https://yourdomain.com',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
