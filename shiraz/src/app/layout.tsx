'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Splashscreen from "@/components/Splashscreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans", 
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isloading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isloading) return
  }, [isloading])

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-new-gr-c-s-check-loaded="14.1223.0"
        data-gr-ext-installed="">
        {isloading && isHome ? (
          <Splashscreen finishloading={() => setIsLoading(false)}/> //..
        ) : (
          <>
          <Navbar />          
          {children}
          <Footer/>
          </>        
       )}

    </body>
    </html >
  );
}
