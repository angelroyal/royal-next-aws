import SearchBox from "@/hooks/SearchBox";
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import { Container } from "@/config/Others/Container";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import KeepExploring from "@/components/Recommended/KeepExploring";
import DestinationReady from "@/components/Recommended/DestinationReady";
import OrderRecommendation from "@/components/Recommended/OrderRecommendation";

export default function Home() {
  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />

            <div className="bg-[#f6f6f6]">
              <Container>

                <DestinationReady />

                <OrderRecommendation/>

                <KeepExploring/>
        
              </Container>
            </div>

            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
