import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MAX ELITE",
  description: "At Max Elite, we believe every space tells a story. Our interior design solutions combine innovation, style, and comfort to craft unique environments that reflect your personality. Whether it’s your home, office, or commercial space, we bring design dreams to life with creativity and craftsmanship.",
  icons: {
    icon: "/icon.png", // path inside public/
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
