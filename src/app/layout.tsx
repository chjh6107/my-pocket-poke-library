import { MainContainer } from '@/components';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '마이 포켓 포켓몬 라이브러리',
  description: '나만의 포켓몬 도감',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#ffcc00' />
        <meta name='msapplication-TileColor' content='#ffc40d' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <body className={inter.className}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
