import React from "react";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import styles from "./layout.module.scss";
import "./globals.scss";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { ThemeProvider } from "next-themes";

import NextTopLoader from "nextjs-toploader";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Alex Lin",
  description: "Alex Lin's Site v2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={GeistSans.className}>
        <ThemeProvider>
          <NextTopLoader
            showSpinner={false}
            color="var(--primary)"
            height={2}
          />
          <div className={styles.container}>
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
