import { DM_Serif_Display } from 'next/font/google';
import GoatCounter from '../components/GoatCounter';
import { PROFILE } from '../data/site';
import './globals.css';


const dmSerifDisplay = DM_Serif_Display({
    subsets: ['latin'],
    weight: '400',
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-dm-serif',
});

const { description } = PROFILE;
const title = `${PROFILE.name} | ${PROFILE.role}`;

export const metadata = {
    metadataBase: new URL('https://swarajreddy10.github.io'),
    title,
    description,
    alternates: { canonical: '/' },
    authors: [{ name: PROFILE.fullName }],
    creator: PROFILE.fullName,
    robots: { index: true, follow: true },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        title,
        description,
        siteName: `${PROFILE.name} | Engineering Portfolio`,
    },
    twitter: {
        card: 'summary_large_image',
        title,
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
            <body>
                {children}
                <GoatCounter />
            </body>
        </html>
    );
}