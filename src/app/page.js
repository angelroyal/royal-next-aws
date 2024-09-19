import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import HomeHotel from "@/services/General/HomeHotel";
import ContactUs from "@/components/General/ContactUs";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";

<<<<<<< Updated upstream
export default function Home() {
  return (
    <>
=======
export default async function DetailPageHotel({ params }) {
  try {
    const cookiesStore = cookies();
    const language = cookiesStore.get("language")?.value || "en";
    console.log(language);

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_CRM}getImages/${language}/all`,
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
              <Navigation />

              <div className="relative flex justify-center align-center mb-[256px] lg:mb-[118px]">
                <BannersHeaderHome dataImg={dataImg} />
                <div className="absolute top-[67%] sm:top-[60%] md:top-[63%] lg:top-[73%] xl:top-[80%] 2xl:top-[81%] w-full flex flex-col items-center z-[1]">
                  <SearchBox />
                </div>
              </div>

              <Container>
                <div className="max-md:overflow-x-hidden">
                  <BannersHomeOffers />
                  <BannersHomeExclusiveDiscounts />
                  <BannersHomeOffersNow />
                </div>
              </Container>

              <Container>
                <ExploreActivitiesHome />
              </Container>

              <BannerStepsItinerary />

              <Container>
                <div className="max-md:overflow-x-hidden">
                  <PopularDestinationsHome />
                  <ChainsHome />
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
    console.log("error img", error);

    return (
>>>>>>> Stashed changes
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />
            <HomeHotel />
            <ContactUs />
            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
