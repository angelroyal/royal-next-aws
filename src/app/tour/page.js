// import "../../assets/styles/web/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import HomeHotel from "@/pages/Home/HomeHotel";
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import { Container } from "@/config/Others/Container";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import TopActivities from "@/services/Tours/Home/TopActivities";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import { BannerHomeTour } from "@/services/Tours/Home/bannerTour";
import BannerCallHotelT from "@/components/bannerJsx/bannerCallHotelT";
import { PopularState } from "@/services/Hotels/components/home/PopularEstates";
import BannerFooterTour from "@/services/Tours/Home/bannerFooterTour";
import BannerHeaderTour from "@/services/Tours/Home/bannerHeaderTour";
import SearchBox from "@/hooks/SearchBox";
// import CartHotelT from "@/components/Cart/CartHotelT";
import CartOpen from "@/components/Cart/CartOpen";
export default function Home() {
  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />
            {/* LP */}
            <div className="relative flex justify-center align-center mb-[224px] lg:mb-[118px]">
              <BannerHeaderTour />
              <div className="absolute top-[67%] sm:top-[60%] md:top-[44%] lg:top-[73%] xl:top-[80%] 2xl:top-[69%] w-full flex flex-col items-center">
                <SearchBox />
              </div>
            </div>
            <Container>
              <BannerHomeTour />
              <BannerCallHotelT />
              <PopularState />
              <TopActivities />
              <BannerFooterTour />
              <CartOpen />
              {/* <CartHotelT /> */}
            </Container>
            {/* END LP */}

            {/* <HomeHotel /> */}
            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
