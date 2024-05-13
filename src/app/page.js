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
          <div className="w-20 flex">
            <picture className="w-10">
              <source
                srcSet="https://via.placeholder.com/150"
                media="(min-width: 768px)"
              />
              <img
                className="w-full h-auto"
                src="https://via.placeholder.com/150"
                alt="Placeholder"
              />
            </picture>
            <picture className="w-10">
              <source
                srcSet="https://via.placeholder.com/150"
                media="(min-width: 768px)"
              />
              <img
                className="w-full h-auto"
                src="https://via.placeholder.com/150"
                alt="Placeholder"
              />
            </picture>
          </div>
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
