'use client'
import Footer from "@/app/Footer";
import Header from "@/app/Header";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContextProvider>
      <Header />
      {children}
      <Footer/>
      </AuthContextProvider>
      </body>
      
    </html>
  );
}
