import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Technique - Frontend",
  description:
    "Chez Saabre, nous concevons des outils éditoriaux et des interfaces interactives pour accompagner nos lecteurs dans leurs choix de mobilité électrique.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
