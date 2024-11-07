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
                <Container>
                  <BannerPaymentPending />
                  <DetailReservationPending />
                  <BannerDiscoverPossibilities />
                </Container>

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
