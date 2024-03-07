import type { Metadata } from "next";
import { Manrope, Forum } from "next/font/google";
import "./globals.css";

const forum = Forum({ subsets: ['latin'], weight: ['400'], display: 'swap', variable: '--font-forum' });
const manrope = Manrope({ subsets: ['latin'], weight: ['300','400', '500', '700'], display: 'swap', variable: '--font-manrope' });

export const metadata: Metadata = {
  title: "Generation Lab ",
  description: "Takehome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${forum.variable}`}>{children}</body>
    </html>
  );
}
