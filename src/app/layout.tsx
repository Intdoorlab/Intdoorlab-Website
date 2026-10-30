import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider, THEME_INIT_SCRIPT } from '@/components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'IntDoorLab — Independent Software Studio',
    template: '%s — IntDoorLab',
  },
  description:
    'IntDoorLab is an independent software studio focused on building useful, ambitious, and experimental digital products across software engineering, AI, desktop applications, and automation.',
  metadataBase: new URL('https://intdoorlab.com'),
  openGraph: {
    title: 'IntDoorLab — Independent Software Studio',
    description:
      'Building software beyond the obvious. Software development, artificial intelligence, desktop applications, and experimental interfaces.',
    url: 'https://intdoorlab.com',
    siteName: 'IntDoorLab',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

