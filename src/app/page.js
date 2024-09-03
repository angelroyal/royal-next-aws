import axios from "axios";
import BannersHeaderHome, {
  BannersHomeExclusiveDiscounts,
  BannersHomeOffers,
  BannersHomeOffersNow,
} from "@/components/Home/BannersHome";
import SearchBox from "@/hooks/SearchBox";
import Token from "@/components/General/Token";
import FooterT from "@/components/Footer/FooterT";
import WaveLine from "@/components/Home/WaveHome";
import Page404 from "@/components/General/Page404";
import ChainsHome from "@/components/Home/ChainsHome";
import { Container } from "@/config/Others/Container";
import ContactUs from "@/components/General/ContactUs";
import LanguageProvider from "@/language/LanguageProvider";
import EnjoyStayHome from "@/components/Home/EnjoyStayHome";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import ExploreActivitiesHome from "@/components/Home/ExploreActivitiesHome";
import { BannerStepsItinerary } from "@/components/Home/BannerStepsItinerary";
import PopularDestinationsHome from "@/components/Home/PopularDestinationsHome";
import { TransportBanner } from "@/services/Hotels/components/home/TransportBanner";
import BannerDiscoverPossibilities from "@/components/bannerJsx/bannerDiscoverPossibilities";
import { ImageProvider } from "@/context/ImageContext";

export default async function DetailPageHotel({ params }) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_CRM}getImages/all`
    );

    const dataImg = response.data;

    return (
      <ImageProvider>
        <LanguageProvider>
          <TokenProvider>
            <CartAxiosProvider>
              <Token />
              <Navigation />

              <div className="relative flex justify-center align-center mb-[256px] lg:mb-[118px]">
                <BannersHeaderHome dataImg={dataImg}/>
                <div className="absolute top-[67%] sm:top-[60%] md:top-[63%] lg:top-[73%] xl:top-[80%] 2xl:top-[81%] w-full flex flex-col items-center z-[1]">
                  <SearchBox />
                </div>
              </div>

              <Container>
                <div className="max-md:overflow-x-hidden">
                  <BannersHomeOffers/>
                  <BannersHomeExclusiveDiscounts/>
                  <BannersHomeOffersNow/>
                </div>
              </Container>

              {/* TOP HOTEL REVIEWS */}
              {/* <UserExperienceBanner /> */}

              <Container>
                <ExploreActivitiesHome />
              </Container>

              {/* BANNER STEP */}
              <BannerStepsItinerary />

              <Container>
                <div className="max-md:overflow-x-hidden">
                  <PopularDestinationsHome />
                  <ChainsHome/>
                  <EnjoyStayHome />
                  <TransportBanner />

                  <WaveLine />
                  <BannerDiscoverPossibilities />
                </div>
              </Container>

              <ContactUs />
              <FooterT />
            </CartAxiosProvider>
          </TokenProvider>
        </LanguageProvider>
      </ImageProvider>
    );
  } catch (error) {
    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation hotelDetails={true} />
            <Page404 />
            <FooterT />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  }
}
