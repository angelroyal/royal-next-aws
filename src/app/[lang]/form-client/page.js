import Token from "@/components/General/Token";
import FooterT from "@/components/Footer/FooterT";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import ItineraryLayout from "@/payment/itinerary/ItineraryLayout";
import { BookingProviderContext } from "@/payment/context/BookingContext";
import { ModalTaxesNotInclude } from "@/payment/itinerary/Alerts/ModalTaxesNotInclude";
import FormClientBooking from "@/payment/Booking/FormClientBooking";
import { PaymentProviderContext } from "@/payment/context/PaymentContext";

export default function FormClientPage() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
         <PaymentProviderContext>
         <BookingProviderContext>
            <Token />
            <Navigation />
            <FormClientBooking />
            <ModalTaxesNotInclude />
            <FooterT />
          </BookingProviderContext>
         </PaymentProviderContext>
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
