import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/styles/web/App.css";
import "../../../assets/styles/web/Hotel.css";
import "../../../assets/styles/web/Tour.css";

import Token from "@/components/General/Token";
import { TokenProvider } from "@/config/context/AuthContext";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import ListTour from "@/services/Tours/components/Listing/ListTour";

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
          <ListTour />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}