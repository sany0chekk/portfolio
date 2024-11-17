import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Link from "next/link";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "O.Veselyi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased overflow-x-hidden`}>
        <div className="pb-4 flex flex-col min-h-screen">
          <Header />
          <div>{children}</div>
          <div className="mt-auto flex flex-col items-center">
            <p className="font-black opacity-30">
              @2024 | All rights reserved.
            </p>
            <p className="font-black opacity-50">
              Developed by{" "}
              <Link
                href="https://www.linkedin.com/in/o-veselyi/"
                className="underline transition-opacity hover:opacity-50"
              >
                Oleksandr Veselyi
              </Link>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
