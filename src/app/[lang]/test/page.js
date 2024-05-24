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
import LottiePayment from "@/components/Alerts/LottiePay/LottiePayment";
import LottieProcessing from "@/components/Alerts/LottiePay/LottieProcessing";
import LottieStayWuw from "@/components/Alerts/LottiePay/LottieStayWuw";
export default function Home() {
  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <div className="bg-[#f6f6f6]">
              <Navigation />

              <Container>

                <DestinationReady />

                <OrderRecommendation />

                <KeepExploring />
                
                <div className="flex gap-[10px] max-lg:flex-col">
                  <LottiePayment />
                  <LottieProcessing />
                  <LottieStayWuw/>
                </div>

              </Container>

              <Footer />
            </div>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
