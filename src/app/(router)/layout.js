
'use client'
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Header/>
      <div>{children}</div>
      <Footer/>
    </html>
  );
}
