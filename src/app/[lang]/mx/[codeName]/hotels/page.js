import { useRouter } from "next/navigation";

import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import Hotels from "@/services/Hotels/components/Listing/Hotels";

// region LISTING HOTEL
export async function generateMetadata({ searchParams }) {
  const destination = searchParams.destination || 'México';
  const checkIn = searchParams.checkIn;
  const checkOut = searchParams.checkOut;

  return {
    title: `Descubre ${destination}: Encuentra los Mejores Tours con ${process.env.NEXT_NAME_COMPANY}.com`,
    description: `Encuentra los mejores hoteles en ${destination} del ${checkIn} al ${checkOut}. Explora con ${process.env.NEXT_NAME_COMPANY}`,
    keywords: `hoteles en ${destination}, mejores hoteles ${destination}, reservación de hoteles ${destination}, ofertas de hoteles en ${destination}, hoteles todo incluido ${destination}`,
    author: `${process.env.NEXT_NAME_COMPANY}`,
  };
}

export default function Home() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <Navigation />
          <Hotels />
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
