import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import Footer from "@/components/Footer/Footer";
import Token from "@/components/General/Token";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import LanguageProvider from "@/language/LanguageProvider";
import Privacy from "@/pages/others/Privacy";

export default function Home() {
    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />
            <Privacy/>
            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  }
  