import { DM_Serif_Display } from 'next/font/google';
import './globals.css';


const dmSerifDisplay = DM_Serif_Display({
    subsets: ['latin'],
    weight: '400',
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-dm-serif',
});

const description = 'AI-native backend engineering portfolio featuring Go microservices, PostgreSQL hybrid search, AWS deployment, and AI-assisted clinical document extraction.';

export const metadata = {
    metadataBase: new URL('https://swarajreddy10.github.io'),
    title: 'Swaraj Reddy | Backend Software Engineer',
    description,
    alternates: { canonical: '/' },
    authors: [{ name: 'Swaraj Chandra Reddy M' }],
    creator: 'Swaraj Chandra Reddy M',
    robots: { index: true, follow: true },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        title: 'Swaraj Reddy | Backend Software Engineer',
        description,
        siteName: 'Swaraj Reddy | Engineering Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Swaraj Reddy | Backend Software Engineer',
        description,
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#FAF8EE',
    colorScheme: 'light',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={dmSerifDisplay.variable}>
            <body>{children}</body>
        </html>
    );
}