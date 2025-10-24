import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "../styles/globals.css";
import Stars from "../components/stars/Stars";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dani Melo | Portfolio',
  description: 'Personal portfolio of Dani Melo, web developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Stars />
        {children}
      </body>
    </html>
  );
}
