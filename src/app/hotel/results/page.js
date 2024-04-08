import { useRouter } from "next/navigation";

import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import Hotels from "@/services/Hotels/components/Listing/Hotels";

// export async function generateMetadata() {
//   const router = useRouter();

//   const { destination, 'check-in': checkIn, 'check-out': checkOut } = router.query;

//   const decodedDestination = decodeURIComponent(destination || '');

//   return {
//     title: `Resultados para ${decodedDestination} - Royal Vacations Mexico`,
//     description:
//     `Encuentra los mejores hoteles en ${decodedDestination} del ${checkIn} al ${checkOut}. Explora con Royal Vacations Mexico.`,
//     keywords:
//       "Políticas de cancelaciones, Procedimiento de cambios, Proteccion de Datos Personales",
//     author: "StayWuw",
//   };
// }

export default function Home() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <Navigation />
          <Hotels />
          <Footer/>
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
