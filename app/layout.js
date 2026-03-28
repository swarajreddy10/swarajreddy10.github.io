import './globals.css';

export const metadata = {
  title: 'Swaraj Reddy | Full-Stack Software Developer',
  description:
    'Full-Stack Software Developer building production-grade systems with React, Spring Boot, FastAPI, and AWS. Open to new roles in 2026.',
  keywords:
    'Swaraj Reddy, Full Stack Developer, React, Next.js, Spring Boot, Python, FastAPI, AWS, AI, Hyderabad, Portfolio',
  authors: [{ name: 'Swaraj Chandra Reddy M' }],
  creator: 'Swaraj Chandra Reddy M',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swarajreddy10.github.io',
    title: 'Swaraj Reddy | Full-Stack Software Developer',
    description:
      'Building production-grade systems at Dexaminds. React · Spring Boot · FastAPI · AWS.',
    siteName: 'Swaraj Reddy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swaraj Reddy | Full-Stack Software Developer',
    description:
      'Building production-grade systems at Dexaminds. React · Spring Boot · FastAPI · AWS.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C8622A',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden bg-[#09080A] text-[#F2EDE8]">
        {children}
      </body>
    </html>
  );
}
