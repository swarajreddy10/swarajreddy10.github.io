import './globals.css';

export const metadata = {
  title: 'Swaraj Reddy | Engineering Portfolio',
  description:
    'AI-native backend engineering portfolio featuring Go microservices, PostgreSQL hybrid search, AWS deployment, and AI-assisted clinical document extraction.',
  keywords:
    'Swaraj Reddy, Backend Software Engineer, Go, PostgreSQL, AWS, Terraform, pgvector, hybrid search, distributed systems, intelligent document processing, Dexaminds, Hyderabad, India',
  authors: [{ name: 'Swaraj Chandra Reddy M' }],
  creator: 'Swaraj Chandra Reddy M',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swarajreddy10.github.io',
    title: 'Swaraj Reddy | Engineering Portfolio',
    description:
      'AI-native backend engineering across Go microservices, PostgreSQL hybrid search, AWS deployment, and AI-assisted clinical document extraction.',
    siteName: 'Swaraj Reddy | Engineering Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swaraj Reddy | Engineering Portfolio',
    description:
      'AI-native backend engineering across Go microservices, PostgreSQL hybrid search, AWS deployment, and AI-assisted clinical document extraction.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F5F2DC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased overflow-x-hidden bg-[#F5F2DC] text-[#550003]">
        {children}
      </body>
    </html>
  );
}
