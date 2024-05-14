import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import ContactUs from "@/components/General/ContactUs";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import HomeHotel from "@/services/Hotels/components/home/HomeHotel";
import { FormContactClient } from "@/components/Alerts/FormContactClient";

export default function Home() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <Navigation />
          <HomeHotel />
          <ContactUs />
          <FormContactClient/>
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
