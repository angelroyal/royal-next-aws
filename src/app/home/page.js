
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import ChainsHome from "@/components/Home/ChainsHome";
import { Container } from "@/config/Others/Container";
import LanguageProvider from "@/language/LanguageProvider";
import EnjoyStayHome from "@/components/Home/EnjoyStayHome";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import ExploreActivitiesHome from "@/components/Home/ExploreActivitiesHome";
import PopularDestinationsHome from "@/components/Home/PopularDestinationsHome";
import { TransportBanner } from "@/services/Hotels/components/home/TransportBanner";
import { BannersHomeExclusiveDiscounts, BannersHomeOffers, BannersHomeOffersNow } from "@/components/Home/BannersHome";
export default function Home() {
  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />

            <Container>
              <BannersHomeOffers />
              <BannersHomeExclusiveDiscounts />
              <BannersHomeOffersNow />
              <ExploreActivitiesHome />
              <PopularDestinationsHome/>
              <ChainsHome/>
              <EnjoyStayHome/>
              <TransportBanner/>
            </Container>

            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
