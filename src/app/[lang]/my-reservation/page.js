import Token from "@/components/General/Token";
import FooterT from "@/components/Footer/FooterT";
import Page404 from "@/components/General/Page404";

import { ImageProvider } from "@/context/ImageContext";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import BannerPaymentPending from "@/payment/Pending/bannerPaymentPending";
import { Container } from "@/config/Others/Container";
import BannerDiscoverPossibilities from "@/components/bannerJsx/bannerDiscoverPossibilities";
import DetailReservationPending from "@/payment/Pending/DetailReservationPending";
import BannerMyReservation from "@/components/my-reservation/bannerMyReservation";
import SearchReservation from "@/components/my-reservation/SearchReservation";
import FooterMyReservation from "@/components/my-reservation/FooterMyReservation";

export default function page() {
  try {
    return (
      <>
        <ImageProvider>
          <LanguageProvider>
            <TokenProvider>
              <CartAxiosProvider>
                <Token />
                <Navigation />
                {/* <Container> */}
                  <BannerMyReservation/>
                  {/* <SearchReservation/> */}
                  <FooterMyReservation/>
                {/* </Container> */}
                <FooterT />
              </CartAxiosProvider>
            </TokenProvider>
          </LanguageProvider>
        </ImageProvider>
      </>
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