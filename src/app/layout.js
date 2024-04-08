import "./globals.css";
import { Inter } from "next/font/google";
import LanguageProvider from "@/language/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StayWuw.com | Hoteles, tours, transporte y experiencias de viaje excepcionales ",
  description: "Descubre México con Royal Vacations: desde lujosos hoteles hasta tours emocionantes y traslados cómodos. Planifica tu escapada perfecta con opciones personalizadas para explorar los destinos más emblemáticos. Todo lo que necesitas para unas vacaciones inolvidables, en un solo lugar.",
  keywords: "Vacaciones en México, Hoteles de Lujo, Tours Aventureros, Servicio de Traslados, Viajes Personalizados, Destinos Emblemáticos, Planificación de Viajes",
  author: "StayWuw",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
