import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenzp Test",
  description: "I hope i pass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
