
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import { Container } from "@/config/Others/Container";
import ExploreActivitiesHome from "@/components/Home/ExploreActivitiesHome";
import PopularDestinationsHome from "@/components/Home/PopularDestinationsHome";
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
            </Container>

            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
