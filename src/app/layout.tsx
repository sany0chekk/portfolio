import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

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
        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 flex flex-col">
          <Header />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
