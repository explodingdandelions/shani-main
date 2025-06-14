import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { inter } from './fonts';

export const metadata: Metadata = {
  title: 'Shani Zhang',
  description: 'Journalism | Live Painting | FAQ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased text-slate-900`}>
        <Header />
        <div className='flex flex-col items-center justify-items-center w-full flex-shrink-0 md:p-8 pb-20 p-4 '>
          <main className='flex flex-col gap-8 w-full h-full md:max-w-5xl mx-auto'>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
