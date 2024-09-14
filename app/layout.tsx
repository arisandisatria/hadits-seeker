import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hadits Seeker",
  description: "Sebuah website untuk mencari hadits sesuai dengan mood kalian",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Kamu juga bisa menambahkan favicon dengan format lain seperti png */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
      </head>
      <body
        className={`${outfit.className} antialiased dark text-white h-full`}
      >
        {children}
      </body>
    </html>
  );
}
