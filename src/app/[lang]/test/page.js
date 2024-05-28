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

import ClientDataT from "@/payment/Booking/ClientDataT";
import AlertPayment from "@/components/Alerts/LottiePay/AlertPayment";
// import ActivityFormT from "@/payment/Booking/ActivityFormT";
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

                <ClientDataT />
                {/* <ActivityFormT/> */}
                <AlertPayment></AlertPayment>
              </Container>

              <Footer />
            </div>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
