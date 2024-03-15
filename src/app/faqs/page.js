import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/web/App.css";

import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import FrequentQuestions from "@/pages/others/FrequentQuestions";

export default function Home() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <Navigation />
          <FrequentQuestions/>
          {/* <div className="hidden lg:block">
            <FaqsWeb />
          </div>
          <div className="lg:hidden block">
            <FaqsWeb />
          </div> */}
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
