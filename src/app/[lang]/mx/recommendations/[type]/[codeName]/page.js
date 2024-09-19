import axios from "axios";

import Token from "@/components/General/Token";
import FooterT from "@/components/Footer/FooterT";
import { Container } from "@/config/Others/Container";
import { ImageProvider } from "@/context/ImageContext";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import KeepExploring from "@/components/Recommended/KeepExploring";
import DestinationReady from "@/components/Recommended/DestinationReady";
import OrderRecommendation from "@/components/Recommended/OrderRecommendation";
import Page404 from "@/components/General/Page404";

export default async function Details({ params, searchParams }) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_CRM}getImages/${params.lang}/all`,
      {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Surrogate-Control": "no-store",
        },
        params: {
          timestamp: new Date().getTime(),
        },
      }
    );

    const dataImg = response.data;

    return (
      <ImageProvider>
        <LanguageProvider>
          <TokenProvider>
            <CartAxiosProvider>
              <Token />
              <div className="bg-[#f6f6f6]">
                <Navigation />

                <Container>
                  {searchParams.name && searchParams.cartUid && (
                    <DestinationReady
                      dataImg={dataImg}
                      type={params.type}
                      reservationDetails={searchParams}
                    />
                  )}

                  <OrderRecommendation type={params.type} />

                  <KeepExploring />
                </Container>

                <FooterT />
              </div>
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
