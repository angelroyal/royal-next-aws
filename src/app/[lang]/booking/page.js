
import Payment from "@/payment/Payment";
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import { BookingProviderContext } from "@/payment/context/BookingContext";

export default function Home() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <BookingProviderContext>
            <Token />
            <Navigation />
            <Payment />
            <Footer />
          </BookingProviderContext>
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
