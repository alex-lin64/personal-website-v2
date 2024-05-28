import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import styles from "./layout.module.scss";
import "./globals.scss";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { ThemeProvider } from "../../context/themeContext";

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
    <html lang="en">
      <ThemeProvider>
        <body className={GeistSans.className}>
          <div className={styles.container}>
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
