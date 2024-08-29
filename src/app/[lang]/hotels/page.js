import Token from "@/components/General/Token";
import FooterT from "@/components/Footer/FooterT";
import ContactUs from "@/components/General/ContactUs";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import HomeHotel from "@/services/Hotels/components/home/HomeHotel";

export default function Home() {
  
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <div className="max-md:overflow-x-hidden">
            <Navigation />
            <HomeHotel />
            <ContactUs />
          </div>
          <FooterT />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
