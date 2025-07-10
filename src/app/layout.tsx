import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elevate Hair Salon | Luxury Hair Services in Southern California",
  description: "Experience the pinnacle of hair artistry at Elevate Hair Salon. Precision cuts, color mastery, and styling excellence in Southern California. Book your appointment today.",
  keywords: "hair salon, luxury hair, Southern California, hair cuts, hair color, styling, hair treatments",
  authors: [{ name: "Elevate Hair Salon" }],
  openGraph: {
    title: "Elevate Hair Salon | Luxury Hair Services",
    description: "Experience the pinnacle of hair artistry at Elevate Hair Salon. Precision cuts, color mastery, and styling excellence in Southern California.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Hair Salon | Luxury Hair Services",
    description: "Experience the pinnacle of hair artistry at Elevate Hair Salon. Precision cuts, color mastery, and styling excellence in Southern California.",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
