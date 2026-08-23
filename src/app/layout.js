import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
