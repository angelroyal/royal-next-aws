import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/Navigation/Navigation";
import LanguageProvider from "@/language/LanguageProvider";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import Token from "@/components/General/Token";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Royal",
  description: "Royal ssr description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <TokenProvider>
            <CartAxiosProvider>
              <Token />
              <Navigation />
              {children}
            </CartAxiosProvider>
          </TokenProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
