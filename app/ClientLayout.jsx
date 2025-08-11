    'use client';

    export default function ClientLayout({ children }) {
    return (
        <>
        <style jsx global>{`
            :root {
            --font-outfit: 'Outfit', sans-serif;
            --font-ovo: 'Ovo', serif;
            }
            body {
            font-family: var(--font-outfit);
            }
            h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-ovo);
            }
        `}</style>
        {children}
        </>
    );
    }
