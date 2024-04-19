// import "../../assets/styles/web/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import HomeHotel from "@/pages/Home/HomeHotel";
import SearchBox from "@/hooks/SearchBox";
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import { Container } from "@/config/Others/Container";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import SearchTransport from "@/services/Transport/components/Search/SearchTransport";
import { BannerHomeTransport } from "@/services/Transport/components/bannerTransport";
import TipsBooking from "@/services/Transport/components/tipsBooking";

export const metadata = {
  title: "StayWuw.com | Únete a los Tours Más Emocionantes de México",
  description: "Descubre México con StayWuw: desde lujosos hoteles hasta tours emocionantes y traslados cómodos. Planifica tu escapada perfecta con opciones personalizadas para explorar los destinos más emblemáticos. Todo lo que necesitas para unas vacaciones inolvidables, en un solo lugar.",
  keywords: "Vacaciones en México, Hoteles de Lujo, Tours Aventureros, Servicio de Traslados, Viajes Personalizados, Destinos Emblemáticos, Planificación de Viajes",
  author: "StayWuw",
  content:'width=device-width, initial-scale=1.0',
};

export default function HomeTransport() {
  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />

            {/* <SearchTransport/> */}
            <SearchTransport/>
            
            <Container>
              {/* <BannerHomeTour />
              <BannerCallHotelT />
              <PopularState tour={true}/>
              <TopActivities />
              <BannerFooterTour />
              <ContactUs/> */}
              <BannerHomeTransport/>
              <TipsBooking/>
            </Container>
            {/* END LP */}

            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
