import Payment from "@/payment/Payment";
import Token from "@/components/General/Token";
// import Footer from "@/components/Footer/Footer";
import FooterT from "@/components/Footer/FooterT";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import { BookingProviderContext } from "@/payment/context/BookingContext";
import { PaymentProviderContext } from "@/payment/context/PaymentContext";
import { ModalTaxesNotInclude } from "@/payment/itinerary/Alerts/ModalTaxesNotInclude";

export default function Home() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <BookingProviderContext>
            <Token />
            <Navigation />
            <PaymentProviderContext>
              <Payment />
            </PaymentProviderContext>

            <ModalTaxesNotInclude/>
            
            <FooterT />
          </BookingProviderContext>
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
