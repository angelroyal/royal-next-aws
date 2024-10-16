import axios from "axios";
import SearchBox from "@/hooks/SearchBox";
import Token from "@/components/General/Token";
import FooterT from "@/components/Footer/FooterT";
import Page404 from "@/components/General/Page404";
// import Footer from "@/components/Footer/Footer";
import { Container } from "@/config/Others/Container";
import ContactUs from "@/components/General/ContactUs";
import { ImageProvider } from "@/context/ImageContext";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import TopActivities from "@/services/Tours/Home/TopActivities";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import { BannerHomeTour } from "@/services/Tours/Home/bannerTour";
import { PopularState } from "@/components/General/PopularEstates";
import BannerFooterTour from "@/services/Tours/Home/bannerFooterTour";
import BannerHeaderTour from "@/services/Tours/Home/bannerHeaderTour";
import BannerCallHotelT from "@/components/bannerJsx/bannerCallHotelT";

export const metadata = {
  title: "StayWuw.com | Únete a los Tours Más Emocionantes de México",
  description:
    "Descubre México con StayWuw: desde lujosos hoteles hasta tours emocionantes y traslados cómodos. Planifica tu escapada perfecta con opciones personalizadas para explorar los destinos más emblemáticos. Todo lo que necesitas para unas vacaciones inolvidables, en un solo lugar.",
  keywords:
    "Vacaciones en México, Hoteles de Lujo, Tours Aventureros, Servicio de Traslados, Viajes Personalizados, Destinos Emblemáticos, Planificación de Viajes",
  author: "StayWuw",
  content: "width=device-width, initial-scale=1.0",
};

export default async function Home({ params }) {
  // return (
  //   <>
  //     <LanguageProvider>
  //       <TokenProvider>
  //         <CartAxiosProvider>
  //           <Token />
  //           <Navigation />

  //           <div className="relative flex justify-center align-center mb-[256px] lg:mb-[118px]">
  //             <BannerHeaderTour />
  //             <div className="absolute top-[67%] sm:top-[60%] md:top-[63%] lg:top-[73%] xl:top-[80%] 2xl:top-[81%] w-full flex flex-col items-center z-[1]">
  //               <SearchBox />
  //             </div>
  //           </div>

  //           <Container>
  //             <BannerHomeTour />
  //             <BannerCallHotelT />
  //             <PopularState tour={true} />
  //             <TopActivities />
  //             <BannerFooterTour />
  //           </Container>
  //           <ContactUs />
  //           <FooterT />
  //         </CartAxiosProvider>
  //       </TokenProvider>
  //     </LanguageProvider>
  //   </>
  // );
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_CRM}getImages/${params.lang}/all`,
    );

    const dataImg = response.data;

    return (
      <>
        <ImageProvider>
          <LanguageProvider>
            <TokenProvider>
              <CartAxiosProvider>
                <Token />
                <Navigation />

                <div className="relative flex justify-center align-center mb-[256px] lg:mb-[118px]">
                  <BannerHeaderTour dataImg={dataImg} />
                  <div className="absolute top-[67%] sm:top-[60%] md:top-[63%] lg:top-[73%] xl:top-[80%] 2xl:top-[81%] w-full flex flex-col items-center z-[1]">
                    <SearchBox />
                  </div>
                </div>

                <Container>
                  <BannerHomeTour />
                  <BannerCallHotelT />
                  <PopularState tour={true} />
                  <TopActivities />
                  <BannerFooterTour />
                </Container>
                <ContactUs />
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
