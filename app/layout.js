import './globals.css';

export const metadata = {
  title: 'Portfolio - Swaraj Reddy',
  description: 'Personal portfolio of Swaraj Reddy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Ovo&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white">
        {children}
      </body>
    </html>
  );
}
