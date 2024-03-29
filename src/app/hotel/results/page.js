
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import Hotels from "@/services/Hotels/components/Listing/Hotels";

export const metadata = {
  title: "Resultados - Royal Vacations Mexico",
  description: "Royal ssr description",
};

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
