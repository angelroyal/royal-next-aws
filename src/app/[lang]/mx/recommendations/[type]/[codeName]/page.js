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
import { fetchPostHotels } from "@/services/Hotels/config/axiosService";
import { GetActivities } from "@/services/Tours/Api/requestTour";

export default async function Details({ params, searchParams }) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_CRM}/image/get-images/${params.lang}/all`,
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
    const occupancies = JSON.parse(
      decodeURIComponent(searchParams.occupancies)
    );

    const paramsFindHotel = {
      "check-in": searchParams["check-in"],
      "check-out": searchParams["check-out"],
      code: searchParams.code,
      occupancies,
      type: "destination",
      codeName: searchParams.codeName,
    };

    let hotelsMap = [];
    try {
      const responseHotels = await fetchPostHotels(paramsFindHotel);
      hotelsMap = responseHotels?.mapHotels || [];
    } catch (e) {
      console.warn("Error al obtener hoteles:", e);
    }

    let toursMap = [];
    try {
      const responseTour = await GetActivities(searchParams.codeName);
      toursMap = responseTour?.data?.activities?.slice(0, 20) || [];
    } catch (e) {
      console.warn("Error al obtener tours:", e);
    }

    if (hotelsMap.length === 0 && toursMap.length === 0) {
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

    const isOnlyHotels = hotelsMap.length > 0 && toursMap.length === 0;
    const isOnlyTours = toursMap.length > 0 && hotelsMap.length === 0;
    const hasBoth = hotelsMap.length > 0 && toursMap.length > 0;

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

                  <OrderRecommendation
                    params={params}
                    searchParams={searchParams}
                    hotelsMap={hotelsMap}
                    toursMap={toursMap}
                    isOnlyHotels={isOnlyHotels}
                    isOnlyTours={isOnlyTours}
                    hasBoth={hasBoth}
                  />

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
    console.error("Error en Details:", error);
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
