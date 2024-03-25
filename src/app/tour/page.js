// import "../../assets/styles/web/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import HomeHotel from "@/pages/Home/HomeHotel";
import Token from "@/components/General/Token";
import Navigation from "@/components/Navigation/Navigation";
import LanguageProvider from "@/language/LanguageProvider";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import Footer from "@/components/Footer/Footer";
import { BannerHomeTour } from "@/services/Tours/Home/bannerTour";
import { Container } from "@/config/Others/Container";

export default function Home() {
  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />
            <Container>
              <BannerHomeTour />
            </Container>
            {/* <HomeHotel /> */}
            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
