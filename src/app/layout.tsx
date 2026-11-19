import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "iHash Studios – Innovation Through Software",
    template: "%s | iHash Studios",
  },
  description:
    "iHash Studios is a software development studio that transforms business ideas into practical digital solutions. From web applications to Windows desktop software, we build technology that helps businesses work smarter and grow faster.",
  keywords: [
    "iHash Studios",
    "software development studio",
    "web application development",
    "Windows desktop application development",
    "custom business software",
    "business process automation",
    "billing software",
    "garment manufacturing software",
    "inventory management systems",
    "JavaFX desktop software",
    "React web development",
  ],
  authors: [{ name: "iHash Studios", url: siteConfig.url }],
  creator: "iHash Studios",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "iHash Studios – Innovation Through Software",
    description:
      "Transforming business ideas into practical digital solutions. Web applications, Windows desktop software, and custom business management systems.",
    siteName: "iHash Studios",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 685,
        alt: "iHash Studios - Innovation Through Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iHash Studios – Innovation Through Software",
    description:
      "Transforming business ideas into practical digital solutions. Web applications, Windows desktop software, and business automation.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/logo.png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0D132A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAFF] text-[#141B33] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
