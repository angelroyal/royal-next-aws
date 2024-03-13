import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/styles/web/App.css";
import "../../../assets/styles/web/Hotel.css";

import Hotels from "@/Hotel/Pages/Hotels";
import Token from "@/components/General/Token";
import { TokenProvider } from "@/config/context/AuthContext";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";

export default function Home() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <Navigation />
          <Hotels />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
