import { Rubik, Inter } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/Common/PageLoader";
import CookieConsent from "@/components/Common/CookieConsent";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Funderama | Lending Solutions",
  description: "Customer-centric lending solutions for growing businesses.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} ${inter.variable}`}>
      <body className={rubik.className}>
        <PageLoader />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
