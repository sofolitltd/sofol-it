import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/nav-bar';
import Footer from '@/components/footer';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sofol IT',
  description: 'Success Begins Here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen flex flex-col`}>
        <Navbar />
        {/* Main content will grow and push the footer down if content is small */}
        <main className="flex-grow">{children}</main>
        {/* Footer within the body and at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
