import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactSection from "@/app/components/contact";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rishikesh | Full Stack Developer & Engineer",
  description: "Portfolio of a Mechanical Engineer turned Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-[#0a0a0a] text-yellow-400 antialiased`}>
        <Navbar />
        <div className="pt-20"> {/* Adds spacing so content doesn't hide under fixed navbar */}
          {children}
        </div>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}