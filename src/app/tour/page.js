import "../../assets/styles/web/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import HomeHotel from "@/pages/Home/HomeHotel";
import Token from "@/components/General/Token";
import Navigation from "@/components/Navigation/Navigation";
import LanguageProvider from "@/language/LanguageProvider";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />
            {/* <HomeHotel /> */}
            <Footer/>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
