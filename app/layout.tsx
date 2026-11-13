import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XVIBE — Müasir Video Paylaşım Platforması",
  description: "Yüksək keyfiyyətli videoları kəşf et, izlə və kolleksiyanda saxla.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body style={{ backgroundColor: "#141E30", color: "#FFFFFF", margin: 0, padding: 0, overflowX: "hidden" }} className={inter.className}>
        <Navbar />
        <main style={{ width: "100%", overflowX: "hidden" }}>{children}</main>
      </body>
    </html>
  );
}