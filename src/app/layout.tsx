import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StackCuts",
  description: "High-Converting Video Ads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        /* FIX: Added suppressHydrationWarning here to stop Grammarly/Extension errors */
        className={`${inter.className} bg-white dark:bg-gray-950 text-slate-900 dark:text-white antialiased transition-colors duration-300`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
