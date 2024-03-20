import "./globals.css";
import { Inter } from "next/font/google";
import LanguageProvider from "@/language/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Royal",
  description: "Royal ssr description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className={inter.className}>{children}</body>
      </LanguageProvider>
    </html>
  );
}
