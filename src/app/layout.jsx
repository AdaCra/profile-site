"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import Heading from "@/components/Heading/Heading";
import BackgroundGrid from "@/components/Background/BackgroundGrid";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of AH ",
  description: "Fullstack Web development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Heading/>
        {children}</body>
    </html>
  );
}
