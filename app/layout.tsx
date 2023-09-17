import { Permanent_Marker } from 'next/font/google';

import type { Metadata } from 'next';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';

import './globals.css';

const font = Permanent_Marker({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Godable',
  description: 'Godable',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
