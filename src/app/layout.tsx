import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './ui/nav';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        Layout
        <Navbar />
          <div className="max-w-screen-md mx-auto">
            {children}
          </div>
        </body>
    </html>
  );
}
