import type { Metadata } from "next";
import { firaCode, inter, figtree } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";
import MotionStalker from "@/components/motion-stalker";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title: "Gustav Evensson",
  description: "Hello, I'm Gustav Evensson, a fullstack developer based in Sweden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        className={`${firaCode.variable} ${inter.variable} ${figtree.variable} bg-background antialiased text-foreground`}
      >
        <Navbar />
        {children}
        <MotionStalker />
        <Toaster position="bottom-center" />
        <Footer />
      </ThemeProvider>
    </html>
  );
}
