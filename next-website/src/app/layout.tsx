import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Layout/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustav Evensson",
  description: "Hello there! I'm Gustav Evensson, a full-stack developer from Sweden.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gustavevensson.com",
    siteName: "Gustav Evensson",
    images: [
      {
        url: "https://gustavevensson.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gustav Evensson",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed grid-bg inset-0" />
          <ThemeProvider attribute="class" defaultTheme="light">
            <NavBar />
            {children}
            <Footer />
            <Toaster position="bottom-center" />
          </ThemeProvider>
      </body>
    </html>
  );
}
