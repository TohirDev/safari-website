import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../app/components/Footer";
import Navbar from "../app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Safari Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ngv5iej.css" />
      </head>

      <body
        className={inter.className}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
