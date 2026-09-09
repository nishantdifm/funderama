import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata = {
  title: "Funderama | Lending Solutions",
  description: "Customer-centric lending solutions for growing businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
