import Token from "@/components/General/Token";
import FooterT from "@/components/Footer/FooterT";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import ItineraryLayout from "@/payment/itinerary/ItineraryLayout";
import { BookingProviderContext } from "@/payment/context/BookingContext";
import { ModalTaxesNotInclude } from "@/payment/itinerary/Alerts/ModalTaxesNotInclude";

export default function ItineraryPage() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <BookingProviderContext>
            <Token />
            <Navigation />
            <ItineraryLayout />
            <ModalTaxesNotInclude />
            <FooterT />
          </BookingProviderContext>
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
