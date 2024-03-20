import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import Footer from "@/components/Footer/Footer";
import Token from "@/components/General/Token";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import TermsConditions from "@/pages/others/TermsConditions";

export default function Home() {
    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />
            <TermsConditions/>
            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  }
  