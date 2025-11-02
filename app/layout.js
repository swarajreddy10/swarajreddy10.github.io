import './globals.css';

export const metadata = {
  title: 'Swaraj Reddy | Full Stack Developer & AI Engineer',
  description: 'Computer Science Graduate specializing in Full Stack Development, Cloud Technologies, and AI/ML. Building production-ready applications with React, Next.js, Python, and AWS.',
  keywords: 'Swaraj Reddy, Full Stack Developer, React, Next.js, Python, AWS, AI/ML, Computer Science, Portfolio',
  authors: [{ name: 'Swaraj Reddy' }],
  creator: 'Swaraj Reddy',
  publisher: 'Swaraj Reddy',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swarajreddy10.github.io',
    title: 'Swaraj Reddy | Full Stack Developer & AI Engineer',
    description: 'Computer Science Graduate specializing in Full Stack Development, Cloud Technologies, and AI/ML.',
    siteName: 'Swaraj Reddy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swaraj Reddy | Full Stack Developer & AI Engineer',
    description: 'Computer Science Graduate specializing in Full Stack Development, Cloud Technologies, and AI/ML.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Ovo&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden bg-black text-white">
        {children}
      </body>
    </html>
  );
}
